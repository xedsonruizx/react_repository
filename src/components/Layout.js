import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  NavLink,
  Redirect,
} from "react-router-dom";
import {
  Sidebar,
  Menu,
  SubMenu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaHammer } from "react-icons/fa";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaStarOfDavid } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";


import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Proyects from "../pages/Proyects";
import Academic from "../pages/Academic";
import NotFound from "../pages/NotFound";

// import Header from "./Header";
const Layout = ({}) => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    collapseSidebar();
    return setActive(!isActive);
  };
  return (
    <div className="d-flex h-100 w-100">
      <BrowserRouter>
        <Sidebar defaultCollapsed>
          <Menu className={isActive ? "bar-collapsed" : "bar-not-collapsed"}>
            <MenuItem className="ms-1" onClick={() => handleToggle()}>
              <button className="btn-toggle">
                <div className={!isActive ? "d-none" : null}>
                  <GiHamburgerMenu />
                </div>
                <div className={isActive ? "d-none" : null}>
                  <RxCross2 />
                </div>
              </button>
            </MenuItem>
            <MenuItem
              icon={<FaStarOfDavid className="fs-3" />}
              component={<Link to="/" />}
            >
              
              <strong>Home</strong>
            </MenuItem>
            <MenuItem
              icon={<BsFillPersonVcardFill className="fs-3" />}
              component={<Link to="/about" />}
            >
              
              <strong>About me</strong>
            </MenuItem>
            <MenuItem
              icon={<FaHammer className="fs-3" />}
              component={<Link to="/my-proyect" />}
            >
              
              <strong>My Proyects</strong>
            </MenuItem>
            <MenuItem
              icon={<BsBookFill className="fs-3" />}
              component={<Link to="/academic" />}
            >
              <strong>Academic</strong>
            </MenuItem>
            <MenuItem
              icon={<FaHammer />}
              className="d-none"
              component={<Link to="*" />}
            >
              {" "}
              Not Found
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="w-100 h-100">
          <header className="top-bar d-flex justify-content-between">
            <div className="position-relative">
              <span className="welcome">
                Welcome to my repository
              </span>
            </div>
          </header>
          <main className=" h-100 main ps-4 pe-4 ps-md-2 pe-md-2 d-flex justify-content-center">
            <div className="container ps-4 ms-5 ms-md-auto ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Profile />} />
                <Route path="/my-proyect" element={<Proyects />} />
                <Route path="/academic" element={<Academic />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </div>
        
      </BrowserRouter>
    </div>
  );
};

export default Layout;
