import React from "react";

const FilterOptions = () => {
  return (
    <div className="self-start mb-2">
      <label htmlFor="filter" className="mr-4 text-blue-600 ">
        Filter Users
      </label>
      <select id="filter" className="border-2 border-blue-600 cursor-pointer">
        <option value="delevered">Not Delevered</option>
        <option value="not-delevered">Delevered</option>
        <option value="10L">10L</option>
        <option value="20L">20L</option>
      </select>
    </div>
  );
};

export default FilterOptions;
