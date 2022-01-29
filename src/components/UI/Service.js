import React from "react";

const Service = () => {
  return (
    <section
      id="service"
      className="flex flex-col items-center pb-4 mt-4 border-b-2 border-slate-200"
    >
      <h3 className="mb-2 text-2xl border-b-2 border-gray-400">Service</h3>
      <p className="text-xl">
        We are now delevering in gwalior city, but in future we will cover major
        city in India for sure!
      </p>
      <div className="flex w-full mt-4 font-bold">
        <div className="w-1/2 mx-auto">
          <div className="w-1/2 p-2 mx-auto mb-2 text-center border-2 border-blue-600">
            DD Nagar
          </div>
          <div className="w-1/2 p-2 mx-auto mb-2 text-center border-2 border-blue-600 ">
            Samarth Nagar
          </div>
          <div className="w-1/2 p-2 mx-auto mb-2 text-center border-2 border-blue-600 ">
            Rachana Nagar
          </div>
          <div className="w-1/2 p-2 mx-auto mb-2 text-center border-2 border-blue-600 ">
            Gole ka Mandir
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <div className="w-1/2 p-2 mx-auto mb-2 text-center border-2 border-blue-600">
            Pinto Park
          </div>
          <div className="w-1/2 p-2 mx-auto mb-2 text-center border-2 border-blue-600">
            Hazira
          </div>
          <div className="w-1/2 p-2 mx-auto mb-2 text-center border-2 border-blue-600">
            Morar
          </div>
          <div className="w-1/2 p-2 mx-auto mb-2 text-center border-2 border-blue-600">
            Kunj Vihar
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
