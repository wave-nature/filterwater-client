import React from "react";

const FilterOptions = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
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
      case "admins":
        filter = `role=admin`;
        break;
      case "users":
        filter = `role=user`;
        break;
      default:
        filter = "";
    }
    props.selectFilter(filter);
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
        defaultValue={"Not Delivered"}
      >
        <option value="not-delivered">Filter By</option>
        <option value="not-delivered">Not Delivered</option>
        <option value="delivered">Delivered</option>
        <option value="10L">10L</option>
        <option value="20L">20L</option>
        {currentUser.role === "super-admin" && (
          <>
            <option value="admins">Admins</option>
            <option value="users">Users</option>
          </>
        )}
      </select>
    </div>
  );
};

export default FilterOptions;
