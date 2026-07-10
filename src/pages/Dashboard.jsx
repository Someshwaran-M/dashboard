import React from "react";

import DashboardCards from "../components/DashboardCards";
import Statistics from "../components/Statistics";

import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <h1 className="section-title">
            Dashboard Overview
          </h1>
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="left-content">
        <DashboardCards />
        <Statistics />
      </div>
    </>
  );
};

export default Dashboard;