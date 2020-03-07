import React from "react";
import { connect } from "react-redux";

const Search = props => {
  return (
    <div
      className="form-inline mr-auto"
      style={{ marginLeft: "50px", marginTop: "10px" }}
    >
      <input
        placeholder="type in the name of the city"
        name="search"
        onChange={props.handleChange}
        aria-label="Search"
        className="form-control"
      />
      <button
        onClick={props.handleSubmit}
        className='class="btn blue-gradient btn-rounded btn-sm my-0"'
      >
        Search
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchName: state.searchName,
    isisSearchName: state.isSearchName
  };
};

const dispatchPropsToState = dispatch => {
  return {
    handleChange: event => {
      dispatch({ type: "SEARCH_RESULT", payload: event.target.value });
    },
    handleSubmit: () => {
      dispatch({ type: "LOAD_SEARCH" });
    }
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(Search);
