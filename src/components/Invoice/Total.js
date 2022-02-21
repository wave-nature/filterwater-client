import React from "react";

const Total = ({ title, total }) => {
  return (
    <div className="flex justify-between mb-2">
      <h2 className="text-xl ">{title}</h2>
      <h2 className="text-xl ">{total}</h2>
    </div>
  );
};

export default Total;
