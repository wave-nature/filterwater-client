import React from "react";
import check from "../../assets/icons/check.png";
import remove from "../../assets/icons/remove.png";

const CalenderBox = (props) => {
  return (
    <div
      id="box"
      className="flex flex-col items-center justify-between w-24 h-24 mb-2 mr-2 border-2 border-blue-600"
    >
      <div className="mt-2 text-2xl font-semibold ">{props.day}</div>
      <div className="text-base text-green-600 ">Success</div>
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
    </div>
  );
};

export default CalenderBox;
