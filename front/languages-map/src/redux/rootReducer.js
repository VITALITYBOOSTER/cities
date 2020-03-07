const initialState = {
  searchName: "",
  isSearchName: false,
  isRedirectingUpdate: false,
  updatingCity: {}
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UPDATE_CITY":
      return {
        ...state,
        isRedirectingUpdate: false
      };
    case "ON_UPDATE_CITY":
      return {
        ...state,
        isRedirectingUpdate: true,
        updatingCity: action.city
      };
    case "SEARCH_RESULT":
      return {
        ...state,
        searchName: action.payload
      };
    case "LOAD_SEARCH":
      return {
        ...state,
        isSearchName: true
      };
    case "RESET_SEARCH":
      return {
        ...state,
        isSearchName: false
      };
    default:
      return state;
  }
};
