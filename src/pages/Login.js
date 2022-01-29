import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";

class Login extends Component {
  render() {
    return (
      <section id="login" className="flex flex-col items-center pb-4 mt-4 ">
        <h3 className="mb-2 text-2xl border-b-2 border-gray-400">Login</h3>
        <p className="text-xl">
          Please fill this form to login in your account! or if you don' have
          one then create account.
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
          <Input
            title="Password"
            placeholder="********"
            id="password"
            htmlFor="password"
            type="password"
            isRequired={true}
          />
          <div className="flex justify-between">
            <button className="btn-primary">Login</button>
            <div>
              <span>Forgot Password </span>
              <span>
                <Link to="/forgot-password" className="text-xl text-blue-600">
                  Forgot Password
                </Link>
              </span>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
