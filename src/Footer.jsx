import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-gray-800 text-white mt-5 py-5">
      <div className="top">
        <h1 className="text-center text-xl ">Omkar's Gallery</h1>
        <ul
          className="mt-5 text-center text-wh
        "
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="computer">Computer</NavLink>
          </li>
          <li>
            <NavLink to="phone">Phone</NavLink>
          </li>
        </ul>
      </div>
      <div className="bottom mt-5">
        <h1 className="text-center text-xl">
          Developed by{" "}
          <span className="text-red-400 hover:underline hover:underline-offset-4 hover:cursor-not-allowed">
            Omkar
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
