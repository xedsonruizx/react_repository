import React from "react";
import Sidebar from "./Sidebar";
// import Home from "../pages/Home";
// import Navbar from "./navbar";
// import About from "../pages/About";
import { BrowserRouter, Routes, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

// import Header from "./Header";
const Layout = ({}) => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
