import axios from "axios";

export const getCountry = () => async (dispatch) => {
  const url = "https://countriesnow.space/api/v0.1/countries/capital";
  try {
    let data = await axios.get(url);
    dispatch({ type: "GET_COUNTRY", payload: data.data.data });
  } catch (error) {
    console.log(error);
  }
};

export const getCountries = (data) => async (dispatch) => {
  const url = `https://restcountries.com/v3.1/region/${data}`;
  try {
    let data = await axios.get(url);
    dispatch({ type: "GET_COUNTRIES", payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const getStates = (value) => async (dispatch) => {
  const url = `https://countriesnow.space/api/v0.1/countries/states`;
  try {
    let data = await axios.post(url, { country: value });
    dispatch({ type: "GET_STATES", payload: data.data.data.states });
  } catch (error) {
    console.log(error);
  }
};

export const getCites = (country, state) => async (dispatch) => {
  const url = `https://countriesnow.space/api/v0.1/countries/state/cities`;
  try {
    let data = await axios.post(url, { country, state });
    dispatch({ type: "GET_CITIES", payload: data.data.data });
  } catch (error) {
    console.log(error);
  }
};
