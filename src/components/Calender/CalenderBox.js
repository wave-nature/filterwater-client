import React from "react";
import { useDispatch } from "react-redux";
import check from "../../assets/icons/check.png";
import remove from "../../assets/icons/remove.png";
import { createUserDeliveryAction } from "../../actions/deliveryAction";
import Cookies from "js-cookie";

const CalenderBox = (props) => {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const { role, day, delivered, createdAt } = props;
  const createDeliveryHandler = (type) => {
    const delivered = type;
    const id = window.location.pathname.split("/user/")[1];
    dispatch(createUserDeliveryAction(id, token, { delivered }));
  };
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
        <div className={`flex justify-between w-full bg-yellow-200`}>
          {new Date().getDate() === day && delivered === undefined && (
            <>
              <img
                src={check}
                id="success"
                alt="success"
                className="w-4 h-4 duration-500 cursor-pointer"
                onClick={(e) => {
                  e.target.style.transform = "translateX(2.2rem)";
                  createDeliveryHandler(true);
                }}
              />
              <img
                src={remove}
                id="remove"
                alt="fail"
                className="w-4 h-4 cursor-pointer"
                onClick={(e) => {
                  e.target.style.transform = "translateX(-2.2rem)";
                  createDeliveryHandler(false);
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CalenderBox;
