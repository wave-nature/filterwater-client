import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { Link, NavLink } from "react-router-dom";
import userImg from "../../assets/icons/user.png";
import { useHistory } from "react-router-dom";
import { userLogoutActon } from "../../actions/userAction";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  const user = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = () => {
    localStorage.removeItem("user");
    Cookies.remove("token");
    dispatch(userLogoutActon());
    history.replace("/");
  };
  const UserDashboard = (
    <>
      <li>
        <Link to="/user" className="flex items-center">
          <img
            src={userImg}
            alt="user"
            className="w-12 h-12 mr-2 rounded-full "
          ></img>
          <p className="text-xl font-semibold">
            {data.successResponse?.user?.name.split(" ")[0] ||
              user?.name.split(" ")[0]}
          </p>
        </Link>
      </li>
      <li>
        <button className="ml-2 btn-secondary" onClick={logoutHandler}>
          Logout
        </button>
      </li>
    </>
  );
  return (
    <header className="h-24 p-8 bg-slate-100 drop-shadow-md">
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
        <ul className="flex items-center">
          {user ? (
            UserDashboard
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
