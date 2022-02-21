import React, { useState } from "react";

const FilterOptions = (props) => {
  const [value, setValue] = useState("Not Delivered");
  const onSelectHandler = (e) => {
    let filter = "";
    const value = e.target.value;
    switch (value) {
      case "10L":
        filter = `connectionFor=10`;
        break;
      case "20L":
        filter = `connectionFor=20`;
        break;
      case "not-delivered":
        filter = `deliveryStatus=false`;
        break;
      case "delivered":
        filter = `deliveryStatus=true`;
        break;
      default:
        filter = "";
    }
    props.selectFilter(filter);
    setValue(e.target.value);
  };
  return (
    <div className="self-start mb-2">
      <label htmlFor="filter" className="mr-4 text-blue-600 ">
        Filter Users
      </label>
      <select
        onChange={onSelectHandler}
        name="filter"
        id="filter"
        className="border-2 border-blue-600 cursor-pointer"
        // value={value}
        defaultValue={"HELLO"}
      >
        <option value="not-delivered">Not Delivered</option>
        <option value="delivered">Delivered</option>
        <option value="10L">10L</option>
        <option value="20L">20L</option>
      </select>
    </div>
  );
};

export default FilterOptions;
