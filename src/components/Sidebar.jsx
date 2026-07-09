import React from "react";
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
  return (
    <aside className="sidebar">

      {/* Logo */}

      <div className="logo">
        <img src={logo} alt="OneDAO Logo" className="logo-img" />
        <span className="logo-dark">OneDAO</span>
      </div>

      {/* Profile */}

      <div className="profile">
        <img
          src="https://i.pravatar.cc/120?img=12"
          alt="profile"
        />

        <div>
          <h3>Maharram</h3>
          <span>Admin</span>
        </div>
      </div>

      <ul className="menu">

        <li className="active">
          <FaThLarge />
          Dashboard
        </li>

        <li>
          <FaClipboardList />
          Orders
        </li>

        <li>
          <FaCarSide />
          Rides
        </li>

        <li>
          <FaUsers />
          Clients
        </li>

        <li>
          <FaUserTie />
          Drivers
        </li>

        <li>
          <FaDollarSign />
          Shift
        </li>

        <li>
          <FaMapMarkedAlt />
          Live Map
        </li>

        <li>
          <FaCar />
          Car Classes
        </li>

        <li>
          <FaCodeBranch />
          Branches
        </li>

        <li>
          <FaUserShield />
          Reports
        </li>

        <li>
          <FaSlidersH />
          Settings
        </li>

      </ul>

      <button className="logout-btn">
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
};

export default Sidebar;