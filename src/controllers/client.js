const Client = require("../models/client");

//************create a cliet */
exports.createClient = (req, res) => {
  const client = new Client({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    balance: req.body.balance,
  });

  client
    .save()
    .then((client) => {
      return res.status(200).json({
        message: "added successfully",
        client: client,
      });
    })
    .catch((err) => {
      return res.status(500).json({ message: "something went wrong" });
    });
};

//*****get all the clients */
exports.getAllClients = (req, res) => {
  Client.find()
    .then((clients) => {
      if (!clients) {
        return res.status(500).json({
          message: "No clients found!",
        });
      }
      return res.status(200).json({
        message: "success",
        clients: clients,
      });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

//********get a client by id */
exports.getClientById = (req, res) => {
  const id = req.params.id;
  Client.findById(id)
    .then((client) => {
      if (!client) {
        return res.status(500).json({
          message: "no client found!",
        });
      }
      return res.status(200).json({
        client: client,
      });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

//*********************update a client balance with id */
exports.updateBalanceById = (req, res) => {
  const client = new Client({
    _id: req.body._id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    balance: req.body.balance,
  });
  Client.updateOne(
    {
      _id: req.params.id,
    },
    client
  )
    .then((client) => {
      if (!client) {
        return res.status(500).json({
          message: "no client found!",
        });
      }
      return res.status(200).json({
        client: client,
      });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

//***************delete handler */
exports.deleteClient = (req, res) => {
  console.log(req.params.id);
  Client.deleteOne({ _id: req.params.id })
    .then((client) => {
      return res.status(200).json({
        message: "deleted successfully!",
      });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
