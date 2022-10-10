import express from "express";
import { Client } from "../models/clients";
import clientsRepository from "../repositories/client-repository";

const clientsRouter = express.Router();

clientsRouter.get("/clients", (req, res) => {
  clientsRepository.lerTodos((clients) => res.json(clients));
});

clientsRouter.post("/clients", (req, res) => {
  const client: Client = req.body;
  clientsRepository.criar(client, (id) => {
    if (id) {
      res.status(201).location(`/clients/${id}`).send();
    } else {
      res.status(400).send();
    }
  });
});

clientsRouter.get("/somar-ExpImp", (req,res) => {
  clientsRepository.somarExpImp((clients) => res.json(clients))
})

export default clientsRouter;
