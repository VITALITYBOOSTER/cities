import React, { useState } from "react";
import { connect } from "react-redux";

const SearchComponent = (props) => {
  const [searchPar, setSearchPar] = useState("");

  const handleChange = (e) => {
    setSearchPar(e.target.value);
  };
  
  const handleSubmit = () => {
    props.onSearchParametr(searchPar);
    setSearchPar("");
  }

  return (
    <from>
      <input placeholder="Search..." onChange={handleChange} onSubmit={handleSubmit}/>
      <input type='submit' value='Submit' onClick={handleSubmit}/>
    </from>
  );
};

const dispatchPropsToState = dispatch => {
  return {
    onSearchParametr: searchPar =>
      dispatch({ type: "SET_SEARCH_NAME", payload: searchPar })
  };
};

export default connect(null, dispatchPropsToState)(SearchComponent);
