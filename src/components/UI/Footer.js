import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook (1).png";
import twitter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/youtube.png";
import linkedin from "../../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <footer className="flex justify-between p-4 text-white bg-gray-800 h-52">
      <div className="footer__about">
        <h4 className="footer__about-heading">About</h4>
        <p className="footer__about-para">
          We are here to delever filter and fresh water in your area
        </p>
        <p className="footer__about-para">&copy; Vivek Singh Bhadouria, 2021</p>
      </div>

      <div className="w-1/2">
        <ul className="flex justify-between">
          <li>
            <Link
              to={{ pathname: "/", hash: "#home" }}
              className="footer__links-items"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/", hash: "#options" }}
              className="footer__links-items"
            >
              Options
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/", hash: "#service" }}
              className="footer__links-items"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/", hash: "#contact" }}
              className="footer__links-items"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex ">
        <img src={facebook} alt="" className="w-8 h-8 ml-1" />
        <img src={linkedin} alt="" className="w-8 h-8 ml-1" />
        <img src={twitter} alt="" className="w-8 h-8 ml-1" />
        <img src={youtube} alt="" className="w-8 h-8 ml-1" />
      </div>
    </footer>
  );
};

export default Footer;
