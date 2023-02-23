import React from "react";
import Navbar from "./componentes/Navbar";
import { Outlet } from "react-router-dom";
const MainHeader = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainHeader;
