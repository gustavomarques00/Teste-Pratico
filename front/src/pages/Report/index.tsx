import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ReportContainer } from "./styles";

interface IClient {
  id: string;
  nome: string;
  categoria: string;
}

interface IClientCount {
  quantidade: number;
}

export function Report() {
  const [clients, setClients] = useState<IClient[]>([]);
  const [totalClients, setTotalClients] = useState<IClientCount[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    api
      .get("/clients")
      .then((response) => setClients(response.data))
      .catch((err) => {
        console.error("ops! Ocorreu um erro" + err);
      });

    api
      .get("/somar-ExpImp")
      .then((response) => {
        setTotalClients(response.data);
      })
      .catch((err) => {
        console.error("Ops! Ocorreu um erro" + err);
      });
  }, [clients]);

  return (
    <ReportContainer>
      <input
        placeholder='Filtre aqui...'
        type='text'
        onChange={(e) => setValue(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Movimentação</th>
          </tr>
        </thead>

        <tbody>
          {clients
            .filter((item) => {
              if (!value) return true;
              if (item.nome.includes(value) || item.categoria.includes(value)) {
                return true;
              }
              return false;
            })
            .map((client) => (
              <tr key={client.id}>
                <td>{client?.nome}</td>
                <td>{client?.categoria}</td>
              </tr>
            ))}
        </tbody>

        <tfoot>
          <tr>
            <td>Total de Importações</td>
            <td>{totalClients[0] ? totalClients[0]?.quantidade : 0}</td>
          </tr>

          <tr>
            <td>Total de Exportações</td>
            <td>{totalClients[1] ? totalClients[1]?.quantidade : 0}</td>
          </tr>
        </tfoot>
      </table>
    </ReportContainer>
  );
}
