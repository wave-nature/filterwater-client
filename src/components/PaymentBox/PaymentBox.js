import React from "react";

const PaymentBox = ({ amount, exta, paid, createdAt, userName = "" }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col items-center justify-between w-2/3 px-4 py-2 mt-4 rounded-lg drop-shadow-md bg-slate-100">
      <div className="flex justify-between w-full font-bold">
        {userName !== "" && (
          <div className="">{userName !== "" ? userName : null}</div>
        )}
        <div className="">Rs{amount / 100}</div>
        <div>Exta: {exta ? "Yes" : "No"}</div>
        <div>Paid: {paid ? "Yes" : "No"}</div>
        <div>
          connection:
          {amount ? amount / 100 + "L" : null}
        </div>
      </div>
      <div className="self-start mt-12">
        <span className="text-sm text-gray-500 ">created on: </span>
        <span className="text-sm ">{formattedDate}</span>
      </div>
    </div>
  );
};

export default PaymentBox;
