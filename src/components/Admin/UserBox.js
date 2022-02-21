import React from "react";
import { useHistory } from "react-router-dom";
import defaultUserImg from "../../assets/icons/user.png";

const UserBox = (props) => {
  const history = useHistory();
  const { id, userName, userImg, connectionFor, status } = props;
  const getUserHandler = () => {
    history.push(`/user/${id}`);
  };
  return (
    <div
      className="flex items-center justify-between w-full px-4 py-1 mb-2 border-2 border-blue-600 cursor-pointer hover:bg-slate-100"
      onClick={getUserHandler}
    >
      <img
        src={defaultUserImg}
        alt="default img"
        className="w-12 h-12 rounded-full"
      />
      <div className="text-xl font-bold">{userName}</div>
      <div className="text-xl font-bold">{connectionFor}L</div>
      <div className="flex items-center">
        <div className="mr-2 text-xl">
          {status ? "Delivered" : "Not-delivered"}
        </div>
        <div
          className={`w-4 h-4 ${
            status ? "bg-green-400" : "bg-red-400"
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default UserBox;
