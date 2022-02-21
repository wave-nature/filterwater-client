import React from "react";
import { Link } from "react-router-dom";
import bottleImg from "../../assets/bottle.jpg";

const Hero = () => {
  return (
    <section id="home" className="flex w-full pb-4 border-b-2 border-gray-200">
      <div className="flex flex-col">
        <h1 className="hero__heading--primary-one">
          We are delivering filter
          <span className="text-blue-600"> water</span>
        </h1>
        <h1 className="hero__heading--primary-two">In your area.</h1>
        <h2 className="hero__heading--secondary">
          Have your new connection today and take the advantage of home delivery
          of your filtered water bottle at affordable price.
        </h2>

        <div className="mt-20">
          <Link to="/signup" className="mr-2 btn-secondary">
            Create Account
          </Link>
          <Link to="login" className="btn-primary">
            Login
          </Link>
        </div>
      </div>

      <div className="">
        <img className="w-80 h-72" src={bottleImg} alt="Water bottle" />
      </div>
    </section>
  );
};

export default Hero;
