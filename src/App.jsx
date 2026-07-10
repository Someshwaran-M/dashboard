import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Otp from "./pages/Otp";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/sidebarpages/Orders";
import Rides from "./pages/sidebarpages/Rides";
import Clients from "./pages/sidebarpages/Clients";
import Drivers from "./pages/sidebarpages/Drivers";
import Shift from "./pages/sidebarpages/Shift";
import LiveMap from "./pages/sidebarpages/LiveMap";
import CarClasses from "./pages/sidebarpages/CarClasses";
import Branches from "./pages/sidebarpages/Branches";
import Moderators from "./pages/sidebarpages/Moderators";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="rides" element={<Rides />} />
          <Route path="clients" element={<Clients />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="shift" element={<Shift />} />
          <Route path="livemap" element={<LiveMap />} />
          <Route path="carclasses" element={<CarClasses />} />
          <Route path="branches" element={<Branches />} />
          <Route path="moderators" element={<Moderators />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;