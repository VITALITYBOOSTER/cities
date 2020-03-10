const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const createCity = require("../../models/City/cityCreator");

module.exports = class DB {
  constructor({ dbUrl, useNewUrlParser = false, useUnifiedTopology = false }) {
    this.connectToMongo({ dbUrl, useNewUrlParser, useUnifiedTopology });
  }

  connectToMongo(dbOptions) {
    this.mongoClient = new MongoClient(dbOptions.dbUrl, {
      useNewUrlParser: dbOptions.useNewUrlParser,
      useUnifiedTopology: dbOptions.useUnifiedTopology
    }).connect();
  }

  async getData() {
    return (
      await (await (await this.mongoClient).db("cities")).collection("cities")
    ).find({});
  }

  async insertData(req) {
    const data = createCity(req);
    return (
      await (await (await this.mongoClient).db("cities")).collection("cities")
    ).insertOne(data);
  }

  async deleteDataById(id) {
    return await (
      await (await (await this.mongoClient).db("cities")).collection("cities")
    ).deleteOne({ _id: ObjectId(id) });
  }

  async editDataById(id) {
    return await await (
      await (await (await this.mongoClient).db("cities")).collection(
        "collection"
      )
    ).findOneAndUpdate({ _id: ObjectId(id) }, {...req.body});
  }
};
