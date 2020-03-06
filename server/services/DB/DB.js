const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

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
    };

    async getData() {
        return (await (await (await
            this.mongoClient)
            .db("cities"))
            .collection("cities"))
            .find({});
    }

    async insertData(data = {}) {
        return  (await (await (await
            this.mongoClient)
            .db("cities"))
            .collection("cities"))
            .insertOne(data);
    }

    async deleteDataById(id) {
        return  (await (await (await
            this.mongoClient)
            .db("cities"))
            .collection("cities"))
            .deleteOne({ "_id": ObjectId(id) }); 
    }
}
