import React, { useEffect, useState } from "react";
import CityHomePageDisplayer from "./CityHomePageDisplayer";

const HomePage = () => {
  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(data => data.json())
      .then(d => setAllCities(d));
  }, []);

  return (
    <div className="row">
      {allCities.map(el => (
        <CityHomePageDisplayer city={el} key={el._id}></CityHomePageDisplayer>
      ))}
    </div>
  );
};

export default HomePage;
