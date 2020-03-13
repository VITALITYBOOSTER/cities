import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const CityUpdater = props => {
  const [cityS, setCity] = useState({});
  const [isRedirect, setIsRedirect] = useState(true);
  const [cityName, setCityName] = useState(props.city.cityName);
  const [originalCityName, setOriginalCityName] = useState(props.city.originalCityName);
  const [status, setStatus] = useState("");
  const [population, setPopulation] = useState(props.city.population);

  const handleChange = e => {
    if (e.target.name === "city-name") {
      setCityName(e.target.value);
    }
    if (e.target.name === "or-city-name") {
      setOriginalCityName(e.target.value);
    }
    if (e.target.name === "status") {
      setStatus(e.target.value === "yes" ? true : false);
    }
    if (e.target.name === "population") {
      setPopulation(+e.target.value);
    }
  };

  const submitUpdate = () => {
    fetch("http://localhost:5000/cities/" + props.city._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cityName,
        originalCityName,
        status,
        population
      }),
    }).then(() => setIsRedirect(!isRedirect));
  };

  useEffect(() => {
    setCity(props.city);
  }, []);

  return isRedirect ? (
    <div onChange={handleChange}>
      <input type="text" defaultValue={props.city.cityName} name="city-name" />
      <input
        type="text"
        defaultValue={props.city.originalCityName}
        name="or-city-name"
      />
      <input type="text" defaultValue={props.city.status ? "yes" : "no"} name="status" />
      <input
        type="text"
        defaultValue={props.city.population}
        name="population"
      />
      <button onClick={submitUpdate}>Submit update</button>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = state => {
  return {
    city: state.city
  };
};

export default connect(mapStateToProps)(CityUpdater);
