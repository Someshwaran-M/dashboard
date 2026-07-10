import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TopDrivers from "../components/TopDrivers";

import "../styles/DashboardLayout.css";

export default function DashboardLayout() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        <div className="page-content">

          <div className="main-section">
            <Outlet />
          </div>

          <div className="right-section">
            <TopDrivers />
          </div>

        </div>

      </div>

    </div>
  );
}