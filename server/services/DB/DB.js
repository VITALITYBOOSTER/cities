const MongoClient = require("mongodb").MongoClient;
const handleMongoDbConnection = require('./DBplagins/callbackGet');

module.exports = class DB {

    constructor({ dbUrl, useNewUrlParser = false, useUnifiedTopology = false }) {
        this.connectToMongo({ dbUrl, useNewUrlParser, useUnifiedTopology });
    }

    connectToMongo(dbOptions) {
        this.mongoClient = new MongoClient(dbOptions.dbUrl, {
            useNewUrlParser : dbOptions.useNewUrlParser,
            useUnifiedTopology : dbOptions.useUnifiedTopology
        })
        .connect();
        console.log(this.mongoClient);
    };

    async getData() {
        const res = (await (await (await
        this.mongoClient)
        .db("cities"))
        .collection("cities"))
        .find({});
        console.log(res);
        return res;
    }

    async insertData(data = {}) {
        const res = await this.mongoClient
        .db("cities")
        .collection("cities")
        .insertOne(data);
        console.log(res);
        return res;
    }
}
