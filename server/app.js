const express = require("express");
const cities = require('./routes/api/api/cities');
const DBService = require('./services/DB/DB');

const app = express();

const jsonParser = express.json();

app.use(jsonParser);

const dbService = new DBService({
  dbUrl: "mongodb+srv://vitalii:bhbyf12123434A@cluster0-jd0za.mongodb.net/test?retryWrites=true&w=majority",
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((req, res, next) => {
  req.locals = {
    services: {
      dbService,
    }
  };

  next();
});

app.use('/cities', cities);

app.listen(PORT, () => {
  console.log("The server has started");
});