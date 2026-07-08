import React from "react";
import {
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/dashboard/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="navbar-left">

        <button className="menu-btn">
          <FaBars />
        </button>

        <h2>
          Good morning, <span>Maharram👋</span>
        </h2>

        <p>
          you have <span>1 new message</span>
        </p>

      </div>

      <div className="navbar-right">

        <button className="logout-btn">
          <FaSignOutAlt />
        </button>

      </div>

    </header>
  );
};

export default Navbar;