import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import Statistics from "../components/Statistics";
import TopDrivers from "../components/TopDrivers";

import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="dashboard-content">

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Header */}
        <div className="dashboard-header">

          <div className="header-left">
            

            <h1 className="section-title">
              Dashboard Overview
            </h1>

            
          </div>

        </div>

        {/* Dashboard Body */}
        <div className="dashboard-body">

          {/* Left Side */}
          <div className="left-content">

            <DashboardCards />

            <Statistics />

          </div>

          {/* Right Side */}
          <div className="right-content">

            <TopDrivers />

          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;