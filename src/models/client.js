const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  balance: { type: Number, required: true },
});

module.exports = mongoose.model("Client", clientSchema);
