import express from 'express'
import cors from 'cors'
import clientRouter from './routers/client_router'

const Port = 4000
const Hostname = 'http://localhost'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
  res.send('Olá')
})

app.use(cors({
  origin: ['http://127.0.0.1:5173']
}))

app.use('/api', clientRouter)

app.use((req,res) => {
  res.status(404)
})

app.listen(Port, () => {
  console.log(`Servidor rodando com sucesso ${Hostname}:${Port}`)
})