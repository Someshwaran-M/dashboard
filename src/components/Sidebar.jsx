import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  FaSlidersH,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/dashboard/Sidebar.css";
import logo from "../assets/onedao-logo.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaThLarge />, path: "/dashboard" },
    { name: "Orders", icon: <FaClipboardList />, path: "/orders" },
    { name: "Rides", icon: <FaCarSide />, path: "/rides" },
    { name: "Clients", icon: <FaUsers />, path: "/clients" },
    { name: "Drivers", icon: <FaUserTie />, path: "/drivers" },
    { name: "Shift", icon: <FaDollarSign />, path: "/shift" },
    { name: "Live Map", icon: <FaMapMarkedAlt />, path: "/map" },
    { name: "Car Classes", icon: <FaCar />, path: "/cars" },
    { name: "Branches", icon: <FaCodeBranch />, path: "/branches" },
    { name: "Moderators", icon: <FaUserShield />, path: "/moderators" },
    { name: "Settings", icon: <FaSlidersH />, path: "/settings" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside className="sidebar">

      {/* Logo */}

      <div className="logo">
        <img src={logo} alt="OneDAO Logo" className="logo-img" />
        <span className="logo-dark">OneDAO</span>
      </div>



      <ul className="menu">

        {menuItems.map((item) => (

          <li
            key={item.name}
            className={active === item.name ? "active" : ""}
            onClick={() => {
              setActive(item.name);
              navigate(item.path);
            }}
          >
            {item.icon}

            <span>{item.name}</span>

          </li>

        ))}

      </ul>

      {/* Logout */}

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
};

export default Sidebar;