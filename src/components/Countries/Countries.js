import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStates } from "../../redux/actions/country_actions.js";
import States from "../States/States.js";

const Countries = () => {
  const [value, setValue] = useState();
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  console.log("Country rendered");

  const handleSetStates = (e) => {
    setValue(e.target.value);
    dispatch(getStates(e.target.value));
  };

  const checkEmptyArr = () => {
    if (country.length === 0) return true;
  };

  //   if (Array.isArray(country[0]) && country[0].length > 0) {
  //     console.log("is arr", country[0]);
  //     country[0].map((item) => {
  //       return console.log("item ", item);
  //     });
  //   }

  if (checkEmptyArr()) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div>
      <div>
        <label htmlFor="Country">Country:</label>
        <select
          name="Country"
          id="Country"
          onChange={(e) => handleSetStates(e)}
        >
          <option value="">--Please choose an option--</option>
          {country[0].map((item, index) => {
            return (
              <option
                key={index}
                id={item.name.common}
                value={item.name.common}
              >
                {item.name.common}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        {value && <States currentState={value} />}
      </div>
    </div>
  );
};

export default Countries;
