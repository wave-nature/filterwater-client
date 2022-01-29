import React from "react";

const Total = ({ title, total }) => {
  return (
    <div className="flex justify-between mb-2">
      <h2 className="total__days--heading-primary">{title}</h2>
      <h2 className="total__days--heading-primary">{total}</h2>
    </div>
  );
};

export default Total;
