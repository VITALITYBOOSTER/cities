const createCity = (req) => {
    if(!req.body) {
        res.status(400).send("The body of the request is empty");
        return {};
    }
    return {
        cityName: req.body.cityName,
        originalCityName: req.body.originalCityName,
        status: req.body.status,
        population: +req.body.population
    }
}

const cityCreatingHandler = (req, res) => {
    return {
        bodyToSave: createCity(req), 
        callback: (err, result) => {
            if(!err) {
                res.send(result);
            }
            else {
                res.status(400).end();
            }
        }
    }
};
module.exports = cityCreatingHandler;