import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaBell,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";

import "../styles/dashboard/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="navbar">

      <div className="navbar-left">
        <button className="menu-btn">
          <FaBars size={18} />
        </button>

        <div className="welcome">
          <h2>Welcome Back, Maharram!</h2>
          <p>{today}</p>
        </div>
      </div>

      <div className="navbar-center">
        <div className="search-box">
          <FaSearch className="search-icon" size={16} />
          <input
            type="text"
            placeholder="Search orders, drivers..."
          />
        </div>
      </div>

      <div className="navbar-right">

        <button className="icon-btn" type="button">
          <FaEnvelope size={18} />
          <span className="badge">2</span>
        </button>

        <button className="icon-btn" type="button">
          <FaBell size={18} />
          <span className="badge">5</span>
        </button>

        <div
          className="user-box"
          onClick={() => navigate("/profile")}
        >
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