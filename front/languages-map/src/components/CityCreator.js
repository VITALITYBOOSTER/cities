import React, { useState } from "react";

const CityCreator = () => {
  const [cityName, setCityName] = useState("");
  const [originalCityName, setOriginalCityName] = useState("");
  const [status, setStatus] = useState(false);
  const [population, setPopulation] = useState(0);

  const handleChange = event => {
    event.preventDefault();
    if (event.target.name === "name") setCityName(event.target.value);
    if (event.target.name === "originalName")
      setOriginalCityName(event.target.value);
    if (event.target.name === "status") setStatus(event.target.checked);
    if (event.target.name === "pop") setPopulation(+event.target.value);
  };

  const resetStates = () => {
    setCityName("");
    setOriginalCityName("");
    setStatus(false);
    setPopulation(0);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const sendData = {
      cityName,
      originalCityName,
      status,
      population
    };
    event.target.reset();
    resetStates();
    fetch("http://localhost:5000/cities/cities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendData)
    });
  };

  return (
    <div className="input-group form-control-sm">
      <form onChange={e => handleChange(e)} onSubmit={handleSubmit}>
        <label>City name</label>
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="input a city name"
          name="name"
        ></input>
        <label>Original city name</label>
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="input a language name"
          name="originalName"
        ></input>
        <div className="form-check">
          <input
            className="form-check-input form-control-sm"
            type="checkbox"
            value="capital"
            name="status"
          ></input>
          <label className="form-check-label form-control-sm">
            City status
          </label>
        </div>
        <label>Population</label>
        <input
          className="form-control col-xs-3"
          type="text"
          placeholder="input a population of the city"
          name="pop"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CityCreator;
