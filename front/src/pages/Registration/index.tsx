import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services/api";
import { CrudArea } from "./styles";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, compareAsc, formatISO } from "date-fns";

interface IFormInput {
  nome: string;
  nContainer: string;
  tipo: string;
  status: string;
  categoria: string;
  movimentacao: string;
  dataInicio: Date;
  horaInicio: Date;
  dataFim: Date;
  horaFim: Date;
}

const schema = yup
  .object({
    nome: yup.string().required("Este campo é obrigatório"),
    nContainer: yup
      .string()
      .uppercase()
      .matches(/[A-Za-z]{4}[0-9]{7}/, "A placa deve ter 4 letras e 7 dígitos")
      .required(),
    tipo: yup.string().required(),
    status: yup.string().required(),
    categoria: yup.string().required(),
    movimentacao: yup.string().required(),
    dataInicio: yup.date().required(),
    horaInicio: yup.date().required(),
    dataFim: yup.date().required(),
    horaFim: yup.date().required(),
  })
  .required();

export function Registration() {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const comparacaoData = compareAsc(data.dataInicio, data.dataFim);
    const horaInicio = formatISO(data.horaInicio, { representation: "time" });
    const horaFim = formatISO(data.horaFim, { representation: "time" });

    const horaInicioFormatada = horaInicio.split("-");
    const horaFimFormatada = horaFim.split("-");

    if (comparacaoData === -1) {
      const entrada = format(data.dataInicio, "dd/MM/yyyy");
      const saida = format(data.dataFim, "dd/MM/yyyy");

      api
        .post("/clients", {
          nome: data.nome,
          nContainer: data.nContainer,
          tipo: data.tipo,
          status: data.status,
          categoria: data.categoria,
          tipoMovimentacao: data.movimentacao,
          dataInicio: entrada,
          horaInicio: horaInicioFormatada[0],
          dataFim: saida,
          horaFim: horaFimFormatada[0],
        })
        .then((response) => console.log(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
      reset();
    } else {
      window.alert("Incompatibilidade com datas");
    }
  };

  return (
    <CrudArea>
      <h2>Cliente</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome:</label>
        <input type='text' {...register("nome")} />
        <p>{errors.nome?.message}</p>

        <label>Número do Contêiner:</label>
        <input type='text' {...register("nContainer")} />
        <p>{errors.nContainer?.message}</p>

        <label>Tipo:</label>
        <select {...register("tipo")}>
          <option value='20'>20</option>
          <option value='40'>40</option>
        </select>

        <label>Status:</label>
        <select {...register("status")}>
          <option value='Cheio'>Cheio</option>
          <option value='Vazio'>Vazio</option>
        </select>

        <label>Categoria:</label>
        <select {...register("categoria")}>
          <option value='Importação'>Importação</option>
          <option value='Exportação'>Exportação</option>
        </select>

        <h2>Movimentação</h2>

        <label>Movimentacao:</label>
        <select {...register("movimentacao")}>
          <option value='Embarque'>Embarque</option>
          <option value='Descarga'>Descarga</option>
          <option value='Gate in'>Gate in</option>
          <option value='Gate out'>Gate out</option>
          <option value='Reposicionamento'>Reposicionamento</option>
          <option value='Pesagem'>Pesagem</option>
          <option value='Scanner'>Scanner</option>
        </select>

        <label>Data de início:</label>
        <Controller
          control={control}
          name='dataInicio'
          render={({ field: { value, ...fieldProps } }) => {
            return (
              <ReactDatePicker
                {...fieldProps}
                selected={value}
                dateFormat='PP'
              />
            );
          }}
        />

        <label>Hora de início:</label>
        <Controller
          control={control}
          name='horaInicio'
          render={({ field: { value, ...fieldProps } }) => {
            return (
              <ReactDatePicker
                {...fieldProps}
                selected={value}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption='Horário'
                dateFormat='h:mm aa'
              />
            );
          }}
        />

        <label>Data do fim:</label>
        <Controller
          control={control}
          name='dataFim'
          render={({ field: { value, ...fieldProps } }) => {
            return (
              <ReactDatePicker
                {...fieldProps}
                selected={value}
                dateFormat='PP'
              />
            );
          }}
        />

        <label>Hora do fim:</label>
        <Controller
          control={control}
          name='horaFim'
          render={({ field: { value, ...fieldProps } }) => {
            return (
              <ReactDatePicker
                {...fieldProps}
                selected={value}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption='Horário'
                dateFormat='h:mm aa'
              />
            );
          }}
        />

        <input type='submit' />
      </form>
    </CrudArea>
  );
}
