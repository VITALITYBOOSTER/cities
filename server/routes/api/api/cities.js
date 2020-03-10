const express = require("express");
const router = express.Router();
const cityGetAll = require("../../../models/City/cityGetAll");


router.get('/', async (req, res) => {
    const { dbService } = req.locals.services;
    const data = await dbService.getData();
    await data.toArray(cityGetAll(req, res)); 
});

router.delete('/:id', async (req, res) => {
  const { dbService } = req.locals.services;
  await dbService.deleteDataById(req.params.id);
});

router.post('/cities', async (req, res) => {
  const { dbService } = req.locals.services;
  await dbService.insertData(req);
});

router.put('/:id', async (req, res) => {
  const { dbService } = req.locals.services;
  await dbService.editDataById(req.params.id);
});

module.exports = router;