import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between mx-5 mt-5">
        <div className="text-2xl">
          <h1 className="logo">Omkar's Gallery</h1>
        </div>
        <nav className="right-0">
          <ul className="flex justify-evenly text-lg">
            <li className="mx-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mx-2">
              <NavLink to="/computer">Computer</NavLink>
            </li>
            <li className="mx-2">
              <NavLink to="/phone">Phone</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
