import React from "react";
import defaultUserImg from "../../assets/icons/user.png";

const UserBox = (props) => {
  const { userName, userImg, subscription, status } = props;
  return (
    <div className="flex items-center justify-between w-full px-4 py-1 mb-2 border-2 border-blue-600 cursor-pointer hover:bg-slate-100">
      <img
        src={defaultUserImg}
        alt="default img"
        className="w-16 h-16 rounded-full"
      />
      <div className="text-xl font-bold">Default User</div>
      <div className="text-xl font-bold">10L</div>
      <div className="flex items-center">
        <div className="mr-2 text-xl">Delivered</div>
        <div className="w-8 h-8 bg-green-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default UserBox;
