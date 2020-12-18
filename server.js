const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//****************************Router config  */

const userRoute = require("./src/routes/user");
const clientRoute = require("./src/routes/client");

//***************************global configuration**********************/
const PORT = 9000 || process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//************************database connection here ******************/
mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://Sid:jBWcaYOiVj9oZw9M@cluster0.xz4rb.mongodb.net/client-panel?retryWrites=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("and database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//************************all route endpoins are here */
app.use("/api", userRoute);
app.use("/api", clientRoute);

//**************************port listing */
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
