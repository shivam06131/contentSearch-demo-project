import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCites } from "../../redux/actions/country_actions";
import Cities from "../Cities/Cities";

const States = ({ currentState }) => {
  const states = useSelector((state) => state.states);
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  console.log("states rendered");

  //   if (Array.isArray(states[0]) && states[0].length > 0) {
  //     console.log("is arr", states[0]);
  //     states[0].map((item) => {
  //       return console.log("item ", item);
  //     });
  //   }
  const checkEmptyArr = (val) => {
    console.log(val.length);
    if (val.length === 0) return true;
  };

  if (checkEmptyArr(states)) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  const handleSetStates = (e) => {
    setValue(e.target.value);
    dispatch(getCites(currentState, e.target.value));
  };

  return (
    <div>
      <div>
        <label htmlFor="State">States:</label>
        <select name="State" id="State" onChange={(e) => handleSetStates(e)}>
          <option value="">--Please choose an option--</option>
          {!checkEmptyArr(states[0]) > 0 &&
            states[0].map((item, index) => {
              return (
                <option key={index} id={item.name} value={item.name}>
                  {item.name}
                </option>
              );
            })}
        </select>
        <br />
        <br />
        {value && <Cities />}
      </div>
    </div>
  );
};

export default States;
