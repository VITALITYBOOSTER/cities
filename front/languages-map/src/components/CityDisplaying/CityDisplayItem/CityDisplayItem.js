import React from "react";

const CityDisplayItem = props => {
  const deleteCity = () => {
    fetch("http://localhost:5000/cities:" +props.city._id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: props.city._id
      })
    });
  };
  return (
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
      <button onClick={deleteCity}>DeleteCity</button>
    </div>
  );
};

export default CityDisplayItem;
