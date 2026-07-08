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
} from "react-icons/fa";

import "../styles/dashboard/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      {/* Profile */}

      <div className="profile">

        <img
          src="https://i.pravatar.cc/120?img=12"
          alt="profile"
        />

        <div>
          <h3>Maharram</h3>
          <p>+998 (99) 436-46-15</p>
        </div>

      </div>

      <span className="menu-title">MAIN MENU</span>

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
          Live map
        </li>

        <li>
          <FaCar />
          Car classes
        </li>

        <li>
          <FaCodeBranch />
          Branches
        </li>

        <li>
          <FaUserShield />
          Moderators
        </li>

        <li>
          <FaSlidersH />
          Settings
        </li>

      </ul>

    </aside>
  );
};

export default Sidebar;