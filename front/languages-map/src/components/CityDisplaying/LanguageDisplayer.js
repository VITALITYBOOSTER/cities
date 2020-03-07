import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CityDisplayItem from "./CityDisplayItem/CityDisplayItem";
import CityUpdater from "../CityUpdater/CityUpdater";

const CityDisplayer = props => {
  const [allCities, setAllCities] = useState([]);
  const isSearchName = props.isSearchName;

  useEffect(() => {
    fetch("http://localhost:5000/cities/" + (props.searchName), {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(data => data.json())
      .then(data => {
        setAllCities(data);
        props.searchHandler();
      });
  }, [isSearchName]);

  return !props.isRedirectingUpdate ? (
    <div style={{ paddingLeft: "50px", paddingTop: "10px" }}>
      {props.searchName ? (
        allCities.map(el => {
          return (
            <CityDisplayItem
              city={el}
              key={el._id}
              setState={setAllCities}
              allCities={allCities}
            ></CityDisplayItem>
          );
        })
      ) : (
        <div>Nothing is found</div>
      )}
    </div>
  ) : (
    <CityUpdater  />
  );
};

const mapStateToProps = state => {
  return {
    isSearchName: state.isSearchName,
    searchName: state.searchName,
    isRedirectingUpdate: state.isRedirectingUpdate
  };
};

const dispatchPropsToState = dispatch => {
  return {
    searchHandler: () => dispatch({ type: "RESET_SEARCH" })
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(CityDisplayer);
