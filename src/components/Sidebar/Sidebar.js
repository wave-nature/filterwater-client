import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/4 border-blue-600 border-x">
      <ul className="flex flex-col items-center mt-10 text-xl">
        <li className="w-full p-4 mb-4 text-center bg-slate-100">
          <Link to="/user" className="user__option-items">
            Monthly Status
          </Link>
        </li>
        <li className="w-full p-4 mb-4 text-center">
          <Link to="/settings" className="user__option-items">
            Settings
          </Link>
        </li>
        <li className="w-full p-4 mb-4 text-center">
          <Link to="/user/profile" className="user__option-items">
            My Profile
          </Link>
        </li>
        <li className="w-full p-4 mb-4 text-center">
          <Link to="#" className="user__option-items">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
