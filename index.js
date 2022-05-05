const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();

app.use(express.json());

app.use("/", routes);

const url =
  "mongodb+srv://dasurahul:12345@cluster0.swidc.mongodb.net/TodoApp?retryWrites=true&w=majority";

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
