import React, { useState } from "react";
import {
  FaSearch,
  FaUserTie,
  FaCar,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import "../../styles/dashboard/Drivers.css";

const initialDrivers = [
  {
    id: "#DRV-1001",
    name: "John Smith",
    vehicle: "Toyota Camry",
    phone: "+1 9876543210",
    status: "Online",
  },
  {
    id: "#DRV-1002",
    name: "Emma Wilson",
    vehicle: "Honda City",
    phone: "+1 9123456780",
    status: "Offline",
  },
  {
    id: "#DRV-1003",
    name: "David Miller",
    vehicle: "Hyundai Creta",
    phone: "+1 9988776655",
    status: "Online",
  },
  {
    id: "#DRV-1004",
    name: "Sophia Lee",
    vehicle: "Kia Seltos",
    phone: "+1 9345678901",
    status: "Online",
  },
];

const Drivers = () => {
  const [drivers, setDrivers] = useState(initialDrivers);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const handleNewDriver = () => {
    const newDriver = {
      id: `#DRV-${1000 + drivers.length + 1}`,
      name: "New Driver",
      vehicle: "New Vehicle",
      phone: "+1 9000000000",
      status: "Online",
    };

    setDrivers([...drivers, newDriver]);
  };

  const filteredDrivers = drivers.filter((driver) => {
    const matchesSearch =
      driver.id.toLowerCase().includes(search.toLowerCase()) ||
      driver.name.toLowerCase().includes(search.toLowerCase()) ||
      driver.vehicle.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All Status" || driver.status === status;

    return matchesSearch && matchesStatus;
  });

  const total = drivers.length;
  const online = drivers.filter((d) => d.status === "Online").length;
  const offline = drivers.filter((d) => d.status === "Offline").length;

  return (
    <div className="d1-page">

      {/* Header */}
      <div className="d1-header">
        <div>
          <h1>Drivers</h1>
          <p>Manage all drivers.</p>
        </div>

        <button
          className="new-d1-btn"
          onClick={handleNewDriver}
        >
          + New Driver
        </button>
      </div>

      {/* Cards */}
      <div className="d1-cards">

        <div className="d1-card">
          <FaUserTie />
          <h3>{total}</h3>
          <p>Total Drivers</p>
        </div>

        <div className="d1-card">
          <FaCar />
          <h3>{online}</h3>
          <p>Online</p>
        </div>

        <div className="d1-card">
          <FaCheckCircle />
          <h3>{offline}</h3>
          <p>Offline</p>
        </div>

        <div className="d1-card">
          <FaTimesCircle />
          <h3>{total}</h3>
          <p>Active</p>
        </div>

      </div>

      {/* Search & Filter */}
      <div className="d1-toolbar">

        <div className="search-box-d1">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Drivers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Online</option>
          <option>Offline</option>
        </select>

      </div>

      {/* Table */}
      <div className="d1-table">

        <table>

          <thead>
            <tr>
              <th>Driver ID</th>
              <th>Name</th>
              <th>Vehicle</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredDrivers.length > 0 ? (
              filteredDrivers.map((driver) => (
                <tr key={driver.id}>
                  <td>{driver.id}</td>
                  <td>{driver.name}</td>
                  <td>{driver.vehicle}</td>
                  <td>{driver.phone}</td>
                  <td>
                    <span
                      className={`status ${driver.status.toLowerCase()}`}
                    >
                      {driver.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Drivers Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Drivers;