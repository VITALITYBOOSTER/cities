const express = require("express");
const ObjectId = require("mongodb").ObjectID;
const createCity = require("./models/City/cityCreator");
const cityGetAll = require("./models/City/cityGetAll");
const DBService = require( './services/DB/DB');

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
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  dbService.getData().then( data =>
    data.toArray(cityGetAll(req, res))
  )
});

app.post("/cities", async (req, res, next) => {

  /*try {
    const a = await dbService.insert(bodyToSave);
    req.json(a)
  } catch (error) {
    next(error);
  }*/
  

  const cities = app.locals.cities;

  const { bodyToSave, callback } = createCity(req, res);
  const s = await dbService.insertData(bodyToSave);
  cities.insertOne(bodyToSave, callback);
})

app.delete("/cities", (req, res) => {
  
  const cities = app.locals.cities;
  cities.deleteOne({ "_id": ObjectId(req.body._id) }, (err, data) => {
    if (err) console.log(err);
    console.log(req._id);
    res.send(data);
  });
});

//STARTING SERVER
app.listen(PORT, () => {
  console.log("The server has started");
});
