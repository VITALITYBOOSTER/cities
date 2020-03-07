import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const CityUpdater = props => {
  const [cityName, setCityName] = useState(props.updatingCity.cityName);
  const [originalCityName, setOriginalCityName] = useState(
    props.updatingCity.originalCityName
  );
  const [status, setStatus] = useState(props.updatingCity.status);
  const [population, setPopulation] = useState(props.updatingCity.population);

  const city = {
    cityName: cityName,
    originalCityName: originalCityName,
    status: status,
    population: population
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    alert(value);
    if (name === "name") setCityName(value);
    if (name === "or") setOriginalCityName(value);
    if (name === "st") setStatus(value);
    if (name === "pop") setPopulation(+value);
  };

  const handleSubmit = () => {
    fetch("http://localgost:5000/cities" + props.updatingCity._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(city)
    });
  };

  return props.isRedirectingUpdate ? (
    <div
      className="border border-primary bg-light p-3"
      style={{ width: "max-content" }}
      onChange={handleChange}
    >
      <div>Update city </div>
      <div>
        <div>
          <label>Name </label>
          <input type="text" name="name" value={cityName}></input>
        </div>
        <div>
          <label>Original name </label>
          <input type="text" value={originalCityName} name="or"></input>
        </div>
        <div>
          <label>Status </label>
          <input type="text" value={status ? "yes " : "no"} name="st"></input>
        </div>
        <div>
          <label>Population </label>
          <input type="text" value={population} name="pop"></input>
        </div>
      </div>
      <div>
        <button onClick={props.onUpdate}>Submit update</button>
      </div>
    </div>
  ) : (
    <Redirect to="/"></Redirect>
  );
};

const mapStateToProps = state => {
  return {
    isRedirectingUpdate: state.isRedirectingUpdate,
    updatingCity: state.updatingCity
  };
};

const dispatchPropsToState = dispatch => {
  return {
    onUpdate: () => {
      dispatch({ type: "SET_UPDATE_CITY" });
    }
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(CityUpdater);
