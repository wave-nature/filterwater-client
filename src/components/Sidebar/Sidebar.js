import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { userLogoutActon } from "../../actions/userAction";

const Sidebar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"));
  const logoutHandler = () => {
    localStorage.removeItem("user");
    Cookies.remove("token");
    dispatch(userLogoutActon());
    history.replace("/");
  };

  return (
    <div className="w-1/4 border-blue-600 border-x">
      <ul className="flex flex-col items-center mt-10 text-xl">
        <li className="w-full p-4 mb-4 text-center active:bg-slate-100 visited:bg-slate-100">
          {user?.role === "user" ? (
            <Link to="/user" className="user__option-items">
              Monthly Status
            </Link>
          ) : (
            <Link to="/admin" className="user__option-items">
              All Users
            </Link>
          )}
        </li>
        {user.role === "super-admin" && (
          <li className="w-full p-4 mb-4 text-center active:bg-slate-100 visited:bg-slate-100">
            <Link to="/admin/queries" className="user__option-items">
              Queries
            </Link>
          </li>
        )}
        {user.role === "user" && (
          <li className="w-full p-4 mb-4 text-center active:bg-slate-100 visited:bg-slate-100">
            <Link to="/user/queries" className="user__option-items">
              My Queries
            </Link>
          </li>
        )}
        {user.role === "user" && (
          <li className="w-full p-4 mb-4 text-center active:bg-slate-100 visited:bg-slate-100">
            <Link to="/user/payment/history" className="user__option-items">
              Payments
            </Link>
          </li>
        )}
        {user.role !== "user" && (
          <li className="w-full p-4 mb-4 text-center active:bg-slate-100 visited:bg-slate-100">
            <Link to="/admin/payment/history" className="user__option-items">
              Payments
            </Link>
          </li>
        )}
        <li className="w-full p-4 mb-4 text-center active:bg-slate-100 visited:bg-slate-100">
          <Link to="/myprofile" className="user__option-items">
            My Profile
          </Link>
        </li>
        <li className="w-full p-4 mb-4 text-center">
          <button onClick={logoutHandler} className="user__option-items">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
