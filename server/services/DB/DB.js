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
        .connect(handleMongoDbConnection);
    };

    async insertData(data) {
        const res = await this.mongoClient.insertOne();
        console.log(res);
        return res;
    }

    /*async saveRow(data) {
        const res = await this.mongoClient.insert(data);
        console.log(res);
        return res;
    }*/
}
