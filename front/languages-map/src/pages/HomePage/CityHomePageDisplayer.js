import React from "react";

const CityHomePageDisplayer = props => {
  return (
    <div className="card m-4 " style={{ width: "18rem" }}>
      <div class="card-header">City</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{props.city.cityName}</li>
        <li class="list-group-item">{props.city.originalCityName}</li>
        <li class="list-group-item">
          Is capital: {props.city.status ? "yes" : "no"}
        </li>
        <li class="list-group-item">
          Population: {new Intl.NumberFormat().format(props.city.population)}{" "}
          people
        </li>
      </ul>
    </div>
  );
};

export default CityHomePageDisplayer;
