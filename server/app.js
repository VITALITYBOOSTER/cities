const express = require("express");
const cities = require("./routes/cities");
const DBService = require("./services/DB/DB");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const dbService = new DBService({
  dbUrl:
    "mongodb+srv://vitalii:bhbyf12123434A@cluster0-jd0za.mongodb.net/test?retryWrites=true&w=majority",
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  req.locals = {
    services: {
      dbService
    }
  };
  next();
});

app.use("/cities", cities);

app.use();

app.listen(PORT, () => {
  console.log("The server has started");
  if (process) {
    console.log("The server is working");
  }
});
