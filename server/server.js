const express = require("express");
const DBService = require( './services/DB/DB');
const getAllCities = require('./routes/api/api/cities');

const dbService = new DBService({
  dbUrl: "mongodb+srv://vitalii:bhbyf12123434A@cluster0-jd0za.mongodb.net/test?retryWrites=true&w=majority",
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

const jsonParser = express.json();

app.use(jsonParser);

const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers");
  res.header("Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type", "application/javascript");
  next();
});

app.use('/', getAllCities);

app.use('/cities:id', getAllCities);

app.delete("/cities:_id", async (req, res) => {
  dbService.deleteDataById(req.params._id);
});

app.listen(PORT, () => {
  console.log("The server has started");
});