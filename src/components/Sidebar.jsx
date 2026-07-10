import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaThLarge,
  FaClipboardList,
  FaCarSide,
  FaUsers,
  FaUserTie,
  FaDollarSign,
  FaMapMarkedAlt,
  FaCar,
  FaCodeBranch,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/dashboard/Sidebar.css";
import logo from "../assets/onedao-logo.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <FaThLarge />, path: "/dashboard" },
    { name: "Orders", icon: <FaClipboardList />, path: "/dashboard/orders" },
    { name: "Rides", icon: <FaCarSide />, path: "/dashboard/rides" },
    { name: "Clients", icon: <FaUsers />, path: "/dashboard/clients" },
    { name: "Drivers", icon: <FaUserTie />, path: "/dashboard/drivers" },
    { name: "Shift", icon: <FaDollarSign />, path: "/dashboard/shift" },
    { name: "Live Map", icon: <FaMapMarkedAlt />, path: "/dashboard/livemap" },
    { name: "Car Classes", icon: <FaCar />, path: "/dashboard/carclasses" },
    { name: "Branches", icon: <FaCodeBranch />, path: "/dashboard/branches" },
    { name: "Moderators", icon: <FaUserShield />, path: "/dashboard/moderators" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="OneDAO Logo" className="logo-img" />
        <span className="logo-dark">OneDAO</span>
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;