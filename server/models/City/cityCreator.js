const createCity = (city) => {
    return {
        cityName: city.cityName,
        originalCityName: city.originalCityName,
        status: city.status,
        population: +city.population
    }
}

module.exports = createCity;