import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";

class ForgotPassword extends Component {
  render() {
    return (
      <section
        id="ForgotPassword"
        className="flex flex-col items-center pb-4 mt-4 "
      >
        <h3 className="mb-2 text-2xl border-b-2 border-gray-400">
          Forgot Password
        </h3>
        <p className="text-xl">
          Please enter your registered email, so that we can send you reset
          password link there!
        </p>

        <form
          action=""
          className="w-5/12 p-4 m-4 rounded shadow-sm bg-slate-100"
        >
          <Input
            title="Email"
            placeholder="Your Email"
            id="email"
            htmlFor="email"
            type="email"
            isRequired={true}
          />

          <div className="flex justify-between">
            <button className="btn-primary">Send</button>
            <div>
              <span>Already have an account </span>
              <span>
                <Link to="/login" className="text-xl text-blue-600">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default ForgotPassword;
