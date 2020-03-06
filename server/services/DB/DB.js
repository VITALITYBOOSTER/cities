const MongoClient = require("mongodb").MongoClient;

module.exports = class DB {

    constructor(props) {
        this.url = props.dbUrl
        this.useNewUrlParser = props.dbOptions.useNewUrlParser || false
        this.useUnifiedTopology = props.dbOptions.useUnifiedTopology || false 
        this.mongoClient;
    }

    createMongoClient() {
        this.mongoClient = new MongoClient(this.url, {
            useNewUrlParser : this.useNewUrlParser,
            useUnifiedTopology : this.useUnifiedTopology
        })
        console.log(this.mongoClient);
    };

    getMongoClient() {
        return this.mongoClient;
    };

    async connectToMongo() {
        this.mongoClient.connect(()=> {
                console.log('NOT IMPLEMENTED');
        });
    };

    getDataBase(name) {
        
    }   
}
