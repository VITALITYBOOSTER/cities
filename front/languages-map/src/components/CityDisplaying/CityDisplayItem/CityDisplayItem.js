import React, { useState } from "react";
import DialogItem from "./DialogItem";
import { connect } from "react-redux";

const CityDisplayItem = props => {
  const [confirming, setConfirming] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const deleteCity = () => {
    setShowDialog(true);
  };

  if (confirming) {
    fetch("http://localhost:5000/cities", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: props.city._id
      })
    })
      .then(d => d.json())
      .then(d => props.setState(props.allCities.filter(el => el._id !== d.id)));
  }

  return (
    <div
      className="border border-primary bg-light w-25 p-3"
      style={{ marginBottom: "5px" }}
    >
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
        <button onClick={deleteCity}>Delete сity</button>
        <button onClick={() => props.onUpdateCity(props.city)}>
          Update сity
        </button>
      </div>
      {showDialog ? (
        <DialogItem
          setShowDialog={setShowDialog}
          setConfirming={setConfirming}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isRedirectingUpdate: state.isRedirectingUpdate
  };
};

const dispatchPropsToState = dispatch => {
  return {
    onUpdateCity: city => dispatch({ type: "ON_UPDATE_CITY", city: city })
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(CityDisplayItem);
