import React from "react";
import check from "../../assets/icons/check.png";
import remove from "../../assets/icons/remove.png";

const CalenderBox = (props) => {
  const { role, day, delivered, createdAt } = props;
  return (
    <div
      id="box"
      className={`flex flex-col items-center justify-between w-24 h-24 mb-2 mr-2 border-2 border-blue-600 ${
        delivered === undefined
          ? ""
          : delivered
          ? "bg-green-300 text-white"
          : "bg-red-400 text-white"
      }`}
    >
      <div className="mt-2 text-2xl font-semibold ">{day}</div>
      <div className="text-base font-bold text-white">
        {delivered === undefined ? "" : delivered ? "Success" : "Failed"}
      </div>
      {role !== "user" && (
        <div className="flex justify-between w-full bg-yellow-200">
          <img
            src={check}
            id="success"
            alt="success"
            className="w-4 h-4 duration-500 cursor-pointer"
            onClick={(e) => {
              e.target.style.transform = "translateX(2.2rem)";
            }}
          />
          <img
            src={remove}
            id="remove"
            alt="fail"
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default CalenderBox;
