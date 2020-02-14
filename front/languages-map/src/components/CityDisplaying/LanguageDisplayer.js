import React, { useEffect, useState } from "react";
import CityDisplayItem from "./CityDisplayItem/CityDisplayItem";

const CityDisplayer = () => {
  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(data => data.json())
      .then(data => {
        console.log(data);
        return setAllCities(data);
      });
  }, []);

  return (
    <div>
      {allCities.map(el => (
        <CityDisplayItem city={el} key={el._id}></CityDisplayItem>
      ))}
    </div>
  );
};

export default CityDisplayer;
