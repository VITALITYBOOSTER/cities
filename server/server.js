const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const app = express();
const jsonParser = express.json();
app.use(jsonParser);
const PORT = process.env.PORT || 8080;

const mongoClient = new MongoClient("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoClient.connect(function(err, client) {
  if (err) return console.log(err);
  dbClient = client;

  const dataBase = client.db("cities");
  const cities = dataBase.collection("cities");
  app.locals.cities = cities;

  app.listen(5000, function() {
    console.log("Сервер подключён");
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  app.locals.cities.find({}).toArray((err, result) => {
    res.send(result);
  });
});

app.post("/cities", (req, res) => {
  const cities = app.locals.cities;
  const city = {
    cityName: req.body.cityName,
    originalCityName: req.body.originalCityName,
    status: req.body.status,
    population: +req.body.population
  };

  cities.insertOne(city, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.put("/cities/:id", (req, res) => {
  const cities = app.locals.cities;
  const id = req.params.id;
  const percentage = req.body.percentageUpdate;

  cities.updateOne(
    { _id: ObjectId(id) },
    { $set: { population: population * percentage } }
  );
});

app.get("/cities/:cityname", (req, res) => {
  const cities = app.locals.cities;
  const cityName = req.params.cityname;

  cities.find({ cityName: cityName }).toArray((err, result) => {
    res.send(JSON.stringify(result));
  });
});

app.delete("/cities", (req, res) => {
  const cities = app.locals.cities;
  cities.deleteOne({ _id: ObjectId(req.body._id) }, (err, data) => {
    res.send(JSON.stringify({ id: req.body._id }));
  });
});

app.put("/cities:id", (req, res) => {
  const cities = app.locals.cities;
  const cityId = req.params.id;
  const city = {
    cityName: req.body.cityName,
    originalCityName: req.body.originalCityName,
    status: req.body.status,
    population: req.body.population
  };
  
  cities.updateOne({ _id: ObjectId(cityId) }, { $set: { city } });
});
//STARTING SERVER
app.listen(PORT, () => {
  console.log("The server has started");
});
