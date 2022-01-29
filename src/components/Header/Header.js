import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-8 bg-slate-100 drop-shadow-md">
      <nav className="flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-bold text-blue-600">
            FILTERWATER
          </Link>
        </div>
        <ul className="flex justify-between w-1/2">
          <li>
            <NavLink to={{ pathname: "/", hash: "#home" }}>Home</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: "/", hash: "#options" }}>Options</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: "/", hash: "#service" }}>Service</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: "/", hash: "#contact" }}>Contact</NavLink>
          </li>
        </ul>
        <ul className="flex">
          <li>
            <Link to="/signup" className="mr-2 btn-secondary">
              Create Account
            </Link>
          </li>
          <li>
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
