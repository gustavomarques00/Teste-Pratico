import { Client } from "../models/clients";
import database from "./database";

const clientsRepository = {
  criar: (client: Client, callback: (id?: number) => void) => {
    const sql =
      "INSERT INTO clientes (nome, nContainer, tipo, status, categoria,tipoMovimentacao, dataInicio, horaInicio, dataFim, horaFim) VALUES (?,?,?,?,?,?,?,?,?,?)";
    const params = [
      client.nome,
      client.nContainer,
      client.tipo,
      client.status,
      client.categoria,
      client.tipoMovimentacao,
      client.dataInicio,
      client.horaInicio,
      client.dataFim,
      client.horaFim,
    ];

    database.run(sql,params, function(_err) {
      callback(this?.lastID)

    })
  },

  lerTodos: (callback: (clientes: Client[]) => void) => {
    const sql = "SELECT * FROM clientes";
    const params: any[] = []
    database.all(sql,params, (_err,rows) => callback(rows))
  },

  somarExpImp: (callback: (itens: Client[]) => void) => {
    const sql = "SELECT categoria, COUNT(*) AS quantidade FROM clientes GROUP BY categoria"

    const params: any[] = []
    database.all(sql,params, (_err,rows) => callback(rows))
  }
};

export default clientsRepository
