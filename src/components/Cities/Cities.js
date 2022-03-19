import React from "react";
import { useSelector } from "react-redux";

const Cities = () => {
  const cities = useSelector((state) => state.cities);

  const checkEmptyArr = () => {
    if (cities.length === 0) return true;
  };

  if (checkEmptyArr()) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <>
      <ul>
        {cities[0].map((item, index) => {
          return (
            <li key={index}>
              {index} :- {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cities;
