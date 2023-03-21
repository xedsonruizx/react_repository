import { Link, NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { FaBeer } from 'react-icons/fa';
import sidebarBg from "../assets/images/background.png";

const SidebarPage = ({}) => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar className="sidebar-app">
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}> <FaBeer />? Collapse</button>
      </main>
    </div>
  );
};

export default SidebarPage;
