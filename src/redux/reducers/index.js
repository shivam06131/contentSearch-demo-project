const Initial_State = {
  country: [],
  states: [],
  cities: [],
};

const countriesReducers = (state = Initial_State, action) => {
  switch (action.type) {
    case "GET_COUNTRY":
      return { ...state, country: action.payload };
    case "GET_COUNTRIES":
      return {
        ...state,
        country: [action.payload],
      };
    case "GET_STATES":
      return {
        ...state,
        states: [action.payload],
      };
    case "GET_CITIES":
      return {
        ...state,
        cities: [action.payload],
      };
    default:
      return state;
  }
};

export default countriesReducers;
