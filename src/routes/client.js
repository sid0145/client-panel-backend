const express = require("express");

const clientController = require("../controllers/client");

const clientRouter = express.Router();
const checkAuth = require("../middleware/check-auth");

clientRouter.post("/newClient", checkAuth, clientController.createClient);
clientRouter.get("/clients", clientController.getAllClients);
clientRouter.get("/client/:id", checkAuth, clientController.getClientById);
clientRouter.put("/client/:id", checkAuth, clientController.updateBalanceById);
clientRouter.delete("/client/:id", checkAuth, clientController.deleteClient);

module.exports = clientRouter;
