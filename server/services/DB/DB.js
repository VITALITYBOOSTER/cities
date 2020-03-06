export default class DB {

    constructor(url, options) {
        this.url = url
        this.useNewUrlParser = options.useNewUrlParser || false
        this.useUnifiedTopology = options.useUnifiedTopology || false
    }

}