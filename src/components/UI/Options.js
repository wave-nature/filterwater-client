import React from "react";
import bottleImg from "../../assets/bottle.jpg";

const Options = () => {
  return (
    <section
      id="options"
      className="flex flex-col items-center pb-4 mt-4 border-b-2 border-slate-200"
    >
      <h3 className="mb-2 text-2xl border-b-2 border-gray-400">Options</h3>
      <p className="text-xl">
        There are two options, get your connection for 10 Rs for 10 liter
        bottle, or 20 Rs for 20 litre bottle
      </p>

      <div className="flex items-end">
        <figure className="flex flex-col items-center">
          <img className="h-60 w-72" src={bottleImg} alt="bottle 10" />
          <figcaption className="flex flex-col">
            <span className="text-xl font-bold">Rs 10</span>
            <span>10 Liter</span>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center">
          <img className=" h-80 w-96" src={bottleImg} alt="bottle 20" />
          <figcaption className="flex flex-col">
            <span className="text-xl font-bold">Rs 20</span>
            <span>20 Liter</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Options;
