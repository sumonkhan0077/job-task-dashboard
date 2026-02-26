import React from "react";
import Navbar from "../Components/SideNavbar";
import { Outlet } from "react-router";
import TopNavbar from "../Components/TopNavbar";

const MainLayout = () => {
  return (
    <div className="flex gap-3 mt-5 p-3">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="flex-1">
        <TopNavbar></TopNavbar>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
