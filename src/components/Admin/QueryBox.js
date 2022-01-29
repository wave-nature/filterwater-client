import React from "react";

const QueryBox = () => {
  return (
    <div className="flex flex-col items-center justify-between w-2/3 px-4 py-2 mt-4 rounded-lg drop-shadow-md bg-slate-100 h-72">
      <div className="flex justify-between w-full font-bold">
        <div className="">User Name</div>
        <div>User Mobile</div>
        <div>User Subscription</div>
      </div>
      <div className="w-full p-2 bg-white rounded h-1/2">
        <p>Message</p>
      </div>
      <div className="flex justify-between w-full">
        <button className="btn-primary">Resolved</button>
        <button className="btn-secondary">Delete</button>
      </div>
    </div>
  );
};

export default QueryBox;
