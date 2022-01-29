import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";

class Signup extends Component {
  render() {
    return (
      <section id="signup" className="flex flex-col items-center pb-4 mt-4 ">
        <h3 className="mb-2 text-2xl border-b-2 border-gray-400">Signup</h3>
        <p className="text-xl">
          Please fill this form to create new account! or if you already have
          one then login.
        </p>

        <form
          action=""
          className="w-5/12 p-4 m-4 rounded shadow-sm bg-slate-100"
        >
          <Input
            title="Name"
            placeholder="Your Name"
            id="name"
            htmlFor="name"
            type="text"
            isRequired={true}
          />
          <Input
            title="Email"
            placeholder="Your Email"
            id="email"
            htmlFor="email"
            type="email"
            isRequired={true}
          />
          <Input
            title="Mobile"
            placeholder="Your Mobile Number"
            id="mobile"
            htmlFor="mobile"
            type="text"
            isRequired={true}
          />
          <Input
            title="Address"
            placeholder="Your Address"
            id="address"
            htmlFor="address"
            type="text"
            isRequired={true}
          />
          <div className="flex items-center justify-between">
            <Input title="10L" type="radio" id="10L" htmlFor="10L" isRequired />
            <Input title="20L" type="radio" id="20L" htmlFor="20L" isRequired />
          </div>

          <Input
            title="Password"
            placeholder="********"
            type="password"
            id="password"
            htmlFor="password"
            isRequired={true}
          />
          <Input
            title="Confirm Password"
            placeholder="********"
            type="password"
            id="confirm"
            htmlFor="confirm"
            isRequired={true}
          />
          <div className="flex justify-between">
            <button className="btn-primary">Signup</button>
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

export default Signup;
