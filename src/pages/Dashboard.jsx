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
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="dashboard-body">
          <div className="left-content">
            <h1 className="section-title">Knowledge base</h1>

            <DashboardCards />
            <Statistics />
          </div>

          <div className="right-content">
            <TopDrivers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;