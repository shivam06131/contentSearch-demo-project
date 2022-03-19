import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Countries from "../Countries/Countries";
import { getCountries } from "../../redux/actions/country_actions";

const Continent = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  console.log("Continent rendered");
  //   useEffect(() => {
  //     dispatch(getCountries(value));
  //   }, [dispatch, value]);

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(getCountries(e.target.value));
  };

  return (
    <div>
      <label htmlFor="Continent">Continent:</label>

      <select name="Continent" id="Continent" onChange={(e) => handleChange(e)}>
        <option value="">--Please choose an option--</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <br />
      <br />
      {value && <Countries />}
    </div>
  );
};

export default Continent;
