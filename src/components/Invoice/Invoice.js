import React from "react";
import { Link } from "react-router-dom";
import Total from "./Total";

const Invoice = ({ date, days }) => {
  return (
    <>
      <div className="flex flex-col w-full px-10 py-4 mt-10 bg-slate-100">
        <Total title={`Total days out of 31`} total={`15 days`} />
        <Total title={`Total amount of water delivered`} total={`30x20=600L`} />
        <Total
          title={`Total payable amount till September 30`}
          total={`30x20= Rs 600`}
        />
        <button className="self-end btn-primary">
          Pay on {date.toLocaleDateString("en", { month: "long" })}{" "}
          {days.at(-1)}
        </button>
      </div>
      <div className="flex justify-between w-full px-10 mx-10 mt-4">
        <div className="text-xl">
          Any problem with monthly status please feel free to contact us
        </div>
        <Link
          to={{ pathname: "/", hash: "#contact" }}
          className="btn-secondary"
        >
          Raise Issue
        </Link>
      </div>
    </>
  );
};

export default Invoice;
