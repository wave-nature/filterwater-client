import React from "react";
import check from "../../assets/icons/check.png";
import remove from "../../assets/icons/remove.png";

const CalenderBox = () => {
  return (
    <div
      id="box"
      className="flex flex-col items-center justify-between w-40 mb-2 mr-2 border-2 border-blue-600 h-36"
    >
      <div className="mt-2 text-5xl font-semibold ">1</div>
      <div className="text-xl text-green-600">Success</div>
      <div className="flex justify-between w-full bg-yellow-200">
        <img
          src={check}
          id="success"
          alt="success"
          className="w-6 h-6 duration-500 cursor-pointer"
          onClick={(e) => {
            e.target.style.transform = "translateX(4rem)";
          }}
        />
        <img
          src={remove}
          id="remove"
          alt="fail"
          className="w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CalenderBox;
