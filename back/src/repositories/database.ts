import sqlite3 from "sqlite3";

const DBSOURCE = "db.sqlite";

const SQL_CLIENTS_CREATE = `
  CREATE TABLE clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    nContainer TEXT,
    tipo TEXT,
    status TEXT,
    categoria TEXT,
    tipoMovimentacao TEXT,
    dataInicio DATETIME,
    horaInicio DATETIME,
    dataFim DATETIME,
    horaFim DATETIME
  )
`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
  if(err){
    console.log("entrei")
    console.error(err.message)
    throw err
  } else{
    console.log("Base de Dados conectada com sucesso!")
    database.run(SQL_CLIENTS_CREATE, (err) => {
      if(err){
        console.log(err)
      }else {
        console.log("Tabela clientes criada com sucesso!")
      }
    })
  }
})

export default database
