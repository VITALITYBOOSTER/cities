const express = require("express");
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

app.get("/", async (req, res) => {
  const data = await dbService.getData();
  await data.toArray(cityGetAll(req, res)); 
});

app.post("/cities", async (req, res, next) => {
  const { bodyToSave } = createCity(req, res);
  await dbService.insertData(bodyToSave);
})

app.delete("/cities:_id", async (req, res) => {
  //////////////////////////REDO
  dbService.deleteDataById(req.params._id);
});

//STARTING SERVER
app.listen(PORT, () => {
  console.log("The server has started");
});