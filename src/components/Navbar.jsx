import React from "react";
import {
  FaBars,
  FaBell,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";

import "../styles/dashboard/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="navbar-left">

        <button className="menu-btn">
          <FaBars />
        </button>

        <div className="welcome">
          <h2>Good Morning 👋</h2>
          <p>Welcome back, Maharram</p>
        </div>

      </div>

      <div className="navbar-center">

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

      </div>

      <div className="navbar-right">

        <button className="icon-btn">
          <FaEnvelope />
          <span className="badge">2</span>
        </button>

        <button className="icon-btn">
          <FaBell />
          <span className="badge">5</span>
        </button>

        <div className="user-box">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
          />

          <div>
            <h4>Maharram</h4>
            <span>Administrator</span>
          </div>
        </div>

      </div>

    </header>
  );
};

export default Navbar;