// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes,
//   NavLink,
// } from "react-router-dom";
// import {
//   Sidebar,
//   Menu,
//   SubMenu,
//   MenuItem,
//   useProSidebar,
// } from "react-pro-sidebar";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import sidebarBg from "../assets/images/background.png";

// import Home from "../pages/Home";
// import Profile from "../pages/Profile";
// import Proyects from "../pages/Proyects";
// import NotFound from "../pages/NotFound";

// const SidebarPage = ({ children }) => {
//   const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
//     useProSidebar();
//   const [isActive, setActive] = useState("false");

//   const handleToggle = () => {
//     collapseSidebar();
//     return setActive(!isActive);
//   };

//   return (
//     <div style={{ display: "flex", height: "100%" }}>
//       <Sidebar defaultCollapsed>
//         <Menu>
//           <MenuItem> </MenuItem>
//           <MenuItem component={<Link to="/" />}> About me</MenuItem>
//           <MenuItem component={<Link to="/my-proyect" />}> Calendar</MenuItem>
//           <MenuItem component={<Link to="/studies" />}> E-commerce</MenuItem>
//           <MenuItem className="d-none" component={<Link to="*" />}> E-commerce</MenuItem>
//         </Menu>
//       </Sidebar>
//       <div>
//         <header className="top-bar">
//           <button onClick={() => handleToggle()} className="btn-toggle">
//             {" "}
//             <div className={!isActive ? "d-none" : null}>
//               <GiHamburgerMenu />
//             </div>
//             <div className={isActive ? "d-none" : null}>
//               <RxCross2 />
//             </div>
//           </button>
//         </header>
//         <main className="pt-5 mt-5 ps-4"> 
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/my-proyect" element={<Profile />} />
//             <Route path="/studies" element={<Profile />} />
//             <Route path="/about" element={<Profile />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SidebarPage;
