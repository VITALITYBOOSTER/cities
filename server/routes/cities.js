const express = require("express");
const router = express.Router();
const cityObtainingHandler = require("../models/City/cityGetAll");

router.get("/", async (req, res) => {
  if (!req) {
    res.status(400).end("The req in get is empty");
  }
  const { dbService } = req.locals.services;
  const { from, to } = req.body;
  const data = await dbService.getData(from, to);
  await data.toArray(cityObtainingHandler(res));
});

router.delete("/:id", async (req, res) => {
  if (!req || !req.params.id) {
    res.status(400).end("The req in delete is empty");
  }
  const { dbService } = req.locals.services;
  const resolve = await dbService.deleteDataById(req.params.id);
  resolve ? res.send(req.params.id) : res.status(500);
});

router.post("/post-city", async (req, res) => {
  if (!req) {
    res.status(400).end("The req in post is empty");
  }
  const { dbService } = req.locals.services;
  const resolve = await dbService.insertData(req.body);
  resolve ? res.send({ message: "The update is succssed" }) : res.status(500);
});

router.put("/:id", async (req, res) => {
  if (!req) {
    res.status(400).end("The req in put is empty");
  }
  const { dbService } = req.locals.services;
  const city = req.body;
  const resolve = await dbService.editDataById(req.params.id, city);
  resolve ? res.send({ message: "The update is succssed" }) : res.status(500);
});

module.exports = router;
