import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { useState } from "react";

const CityDisplayItem = props => {

  const [ isRedirect, setIsRedirect ] = useState(true);

  const deleteCity = () => {
    fetch("http://localhost:5000/cities/" + props.city._id, {
      method: "DELETE"
    })
    .then(()=> props.filterCities(props.allCities.filter((el)=> el._id !== props.city._id)));
  };

  const updateCity = () => {
    setIsRedirect(!isRedirect);
    props.onUpdateId(props.city);
  };

  return (isRedirect ? 
    <div>
      <div>
        <div>City name : {props.city.cityName}</div>
      </div>
      <div>
        <div>Original city name : {props.city.originalCityName}</div>
      </div>
      <div>
        <div>City population : {props.city.population}</div>
      </div>
      <div>
        <div>Is city the capital : {props.city.status ? "yes" : "no"}</div>
      </div>
      <button onClick={deleteCity}>Delete city</button>
      <button onClick={updateCity}>Update city</button>
    </div>
    : <Redirect to='/update-city'></Redirect>
  );
};

const dispatchPropsToState = dispatch => {
  return {
    onUpdateId:  bodyOfCityToUpdate => {dispatch({ type: "SET_UPDATABLE_ID", payload : bodyOfCityToUpdate });} 
  };
};

export default connect(null, dispatchPropsToState)(CityDisplayItem);
