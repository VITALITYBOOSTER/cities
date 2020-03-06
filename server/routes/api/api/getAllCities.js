const express = require("express");
const router = express.Router();
const DBService = require( '../../../services/DB/DB');
const cityGetAll = require("../../../models/City/cityGetAll");

const dbService = new DBService({
    dbUrl: "mongodb+srv://vitalii:bhbyf12123434A@cluster0-jd0za.mongodb.net/test?retryWrites=true&w=majority",
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

router.get('/', async (req, res) => {
    const data = await dbService.getData();
    await data.toArray(cityGetAll(req, res)); 
});

module.exports = router;