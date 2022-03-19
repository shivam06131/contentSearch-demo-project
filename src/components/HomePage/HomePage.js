import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../redux/actions/country_actions";

export const HomePage = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry());
  }, []);

  const ResData = useSelector((state) => state.country);
  console.log("ResData", ResData);

  const handleCountryClick = (val) => {
    console.log("country clicked", val);
  };
  return (
    <div>
      <h1>Countries: </h1>
      <ul>
        {ResData.map((item) => {
          return (
            <div id={item.name}>
              <label for={item.name}>{item.name} </label>
              <select
                style={{ marginTop: "3rem" }}
                name={item.name}
                key={item.name}
                onClick={() => handleCountryClick(item.name)}
              >
                <option value="States">States</option>
                <option value="States">States</option>
                <option value="States">States</option>
              </select>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default HomePage;
