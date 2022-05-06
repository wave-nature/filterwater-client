import React from "react";

const QueryBox = ({
  id,
  userName,
  mobile,
  wardNumber,
  connectionFor,
  title,
  message,
  solved,
  createdAt,
  updateQuery,
  deleteQuery,
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col items-center justify-between w-2/3 px-4 py-2 mt-4 rounded-lg drop-shadow-md bg-slate-100 h-72">
      <div className="flex justify-between w-full font-bold">
        <div className="">{userName}</div>
        <div>{mobile}</div>
        <div>
          {wardNumber ? "ward Number:" : null} {wardNumber}
        </div>
        <div>
          {connectionFor}
          {connectionFor ? "L" : null}
        </div>
      </div>
      <div className="self-start ">
        <span className="text-sm text-gray-500 ">created on: </span>
        <span className="text-sm ">{formattedDate}</span>
      </div>
      <div className="w-full h-12 px-4 py-2 mt-2 mb-1 bg-white rounded">
        <p>{title}</p>
      </div>
      <div className="w-full px-4 py-2 bg-white rounded h-1/3">
        <p>{message}</p>
      </div>
      <div className="flex justify-between w-full mt-2">
        {!solved && userName ? (
          <button onClick={updateQuery} className="btn-primary">
            Resolved
          </button>
        ) : !solved && !userName ? (
          <p className="font-bold text-blue-600 ">Pending</p>
        ) : (
          <p className="font-bold text-green-600 ">Solved!</p>
        )}
        <button onClick={deleteQuery} className="btn-secondary">
          Delete
        </button>
      </div>
    </div>
  );
};

export default QueryBox;
