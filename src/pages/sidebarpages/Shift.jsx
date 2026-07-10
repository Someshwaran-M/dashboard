import React, { useState } from "react";
import {
  FaSearch,
  FaUsers,
  FaSun,
  FaMoon,
  FaClock,
} from "react-icons/fa";
import "../../styles/dashboard/Shift.css";

const initialShifts = [
  {
    id: "#SH-1001",
    employee: "John Smith",
    shift: "Morning",
    time: "06:00 AM - 02:00 PM",
    status: "Active",
  },
  {
    id: "#SH-1002",
    employee: "Emma Wilson",
    shift: "Evening",
    time: "02:00 PM - 10:00 PM",
    status: "Active",
  },
  {
    id: "#SH-1003",
    employee: "David Miller",
    shift: "Night",
    time: "10:00 PM - 06:00 AM",
    status: "Inactive",
  },
  {
    id: "#SH-1004",
    employee: "Sophia Lee",
    shift: "Morning",
    time: "06:00 AM - 02:00 PM",
    status: "Active",
  },
];

const Shift = () => {
  const [shifts, setShifts] = useState(initialShifts);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const handleNewShift = () => {
    const newShift = {
      id: `#SH-${1000 + shifts.length + 1}`,
      employee: "New Employee",
      shift: "Morning",
      time: "09:00 AM - 05:00 PM",
      status: "Active",
    };

    setShifts([...shifts, newShift]);
  };

  const filteredShifts = shifts.filter((shift) => {
    const matchSearch =
      shift.id.toLowerCase().includes(search.toLowerCase()) ||
      shift.employee.toLowerCase().includes(search.toLowerCase()) ||
      shift.shift.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All Status" || shift.status === status;

    return matchSearch && matchStatus;
  });

  const total = shifts.length;
  const morning = shifts.filter((s) => s.shift === "Morning").length;
  const evening = shifts.filter((s) => s.shift === "Evening").length;
  const night = shifts.filter((s) => s.shift === "Night").length;

  return (
    <div className="shift-page">

      {/* Header */}
      <div className="shift-header">
        <div>
          <h1>Shift Management</h1>
          <p>Manage employee work shifts.</p>
        </div>

        <button
          className="new-shift-btn"
          onClick={handleNewShift}
        >
          + New Shift
        </button>
      </div>

      {/* Cards */}
      <div className="shift-cards">

        <div className="shift-card">
          <FaUsers />
          <h3>{total}</h3>
          <p>Total Shifts</p>
        </div>

        <div className="shift-card">
          <FaSun />
          <h3>{morning}</h3>
          <p>Morning</p>
        </div>

        <div className="shift-card">
          <FaClock />
          <h3>{evening}</h3>
          <p>Evening</p>
        </div>

        <div className="shift-card">
          <FaMoon />
          <h3>{night}</h3>
          <p>Night</p>
        </div>

      </div>

      {/* Search & Filter */}
      <div className="shift-toolbar">

        <div className="search-box-shift">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Shifts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      {/* Table */}
      <div className="shift-table">
        <table>
          <thead>
            <tr>
              <th>Shift ID</th>
              <th>Employee</th>
              <th>Shift</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredShifts.length > 0 ? (
              filteredShifts.map((shift) => (
                <tr key={shift.id}>
                  <td>{shift.id}</td>
                  <td>{shift.employee}</td>
                  <td>{shift.shift}</td>
                  <td>{shift.time}</td>
                  <td>
                    <span
                      className={`status ${shift.status.toLowerCase()}`}
                    >
                      {shift.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No Shifts Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Shift;