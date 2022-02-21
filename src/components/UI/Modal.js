import React from "react";

const Modal = ({ roleHandle }) => {
  const clickHandler = (id) => {
    roleHandle(id);
  };
  return (
    <div className="z-10 flex flex-col w-1/3 h-32 p-4 shadow-md bg-slate-100">
      <p className="text-xl font-bold text-center">Signup as</p>
      <div className="flex justify-between">
        <button
          onClick={clickHandler.bind(this, "admin")}
          className=" btn-secondary"
        >
          Admin
        </button>
        <button
          onClick={clickHandler.bind(this, "user")}
          className=" btn-primary"
        >
          User
        </button>
      </div>
    </div>
  );
};

export default Modal;
