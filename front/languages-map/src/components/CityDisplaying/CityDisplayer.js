import React, { useEffect, useState } from "react";
import CityDisplayItem from "./CityDisplayItem/CityDisplayItem";

const CityDisplayer = () => {
  const [allCities, setAllCities] = useState([]);
  const from = 0;
  const to = 20;

  useEffect(() => {
    fetch(`http://localhost:5000/cities/?from=${from}&&to=${to}`, {
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(data => data.json())
      .then(data => {
        return setAllCities(data);
      });
  }, []);

  return (
    <div>
      {allCities.map(el => (
        <CityDisplayItem
          city={el}
          key={el._id}
          filterCities={setAllCities}
          allCities={allCities}
        ></CityDisplayItem>
      ))}
    </div>
  );
};

export default CityDisplayer;
