import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center pb-4 mt-4">
      <h3 className="mb-2 text-2xl border-b-2 border-gray-400">Contact Us</h3>
      <p className="text-xl">
        Please fill this form if you have any queries related to our service
      </p>

      <form action="" className="w-1/3">
        <div className="flex justify-between mt-4 mb-2">
          <label htmlFor="name" className="text-lg font-medium ">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-2/3 p-2 border-2 border-gray-800 rounded"
            placeholder="Your Name"
          />
        </div>
        <div className="flex justify-between mb-2">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-2/3 p-2 border-2 border-gray-800 rounded"
            placeholder="Your Email"
          />
        </div>
        <div className="flex justify-between mb-2">
          <label htmlFor="message" className="text-lg font-medium">
            Message
          </label>

          <textarea
            id="message"
            className="w-2/3 p-2 border-2 border-gray-800 rounded"
            placeholder="Enter your message here"
            rows={7}
          ></textarea>
        </div>
        <div className="flex justify-center w-full">
          <button to="#" className="w-full btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
