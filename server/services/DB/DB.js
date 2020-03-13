const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const createCity = require("../../models/City/cityCreator");

class DB {
  constructor({ dbUrl, useNewUrlParser = false, useUnifiedTopology = false }) {
    this.connectToMongo({ dbUrl, useNewUrlParser, useUnifiedTopology });
  }

  async connectToMongo(dbOptions) {
    this.mongoClient = await new MongoClient(dbOptions.dbUrl, {
      useNewUrlParser: dbOptions.useNewUrlParser,
      useUnifiedTopology: dbOptions.useUnifiedTopology
    }).connect();
  }

  getCollection(nameOfCollection = "") {
    return this.mongoClient.db("cities").collection(nameOfCollection);
  }

  async getData(from = 0, to = 0) {
    try {
      return await (await this.getCollection("cities"))
        .find({})
        .skip(+from)
        .limit(+to);
    } catch (e) {
      console.log(e.name);
    }
  }

  async insertData(city = {}) {
    const data = createCity(city);
    try {
      return await this.getCollection("cities").insertOne(data);
    } catch (e) {
      console.log(e.name);
    }
  }

  async deleteDataById(id) {
    if (!id) {
      return Promise.reject();
    }
    try {
      return await (await this.getCollection("cities")).deleteOne({
        _id: ObjectId(id)
      });
    } catch (e) {
      console.log(e.name);
    }
  }

  async editDataById(id, city = {}) {
    if (!id) {
      return Promise.reject();
    }
    try {
      return await (await this.getCollection("cities")).findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { ...city } }
      );
    } catch (e) {
      console.log(e.name);
    }
  }
}

module.exports = DB;
