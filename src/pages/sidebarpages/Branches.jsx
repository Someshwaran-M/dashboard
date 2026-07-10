import React, { useState } from "react";
import {
  FaSearch,
  FaBuilding,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import "../../styles/dashboard/Branches.css";

const initialBranches = [
  {
    id: "#BR-1001",
    name: "Chennai Branch",
    city: "Chennai",
    manager: "John Smith",
    status: "Active",
  },
  {
    id: "#BR-1002",
    name: "Coimbatore Branch",
    city: "Coimbatore",
    manager: "Emma Wilson",
    status: "Active",
  },
  {
    id: "#BR-1003",
    name: "Madurai Branch",
    city: "Madurai",
    manager: "David Miller",
    status: "Inactive",
  },
  {
    id: "#BR-1004",
    name: "Salem Branch",
    city: "Salem",
    manager: "Sophia Lee",
    status: "Active",
  },
];

const Branches = () => {
  const [branches, setBranches] = useState(initialBranches);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const handleNewBranch = () => {
    const newBranch = {
      id: `#BR-${1000 + branches.length + 1}`,
      name: "New Branch",
      city: "New City",
      manager: "New Manager",
      status: "Active",
    };

    setBranches([...branches, newBranch]);
  };

  const filteredBranches = branches.filter((branch) => {
    const matchSearch =
      branch.id.toLowerCase().includes(search.toLowerCase()) ||
      branch.name.toLowerCase().includes(search.toLowerCase()) ||
      branch.city.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All Status" || branch.status === status;

    return matchSearch && matchStatus;
  });

  const total = branches.length;
  const active = branches.filter((b) => b.status === "Active").length;
  const inactive = branches.filter((b) => b.status === "Inactive").length;

  return (
    <div className="branch-page">

      <div className="branch-header">
        <div>
          <h1>Branch Management</h1>
          <p>Manage all company branches.</p>
        </div>

        <button
          className="new-branch-btn"
          onClick={handleNewBranch}
        >
          + New Branch
        </button>
      </div>

      <div className="branch-cards">

        <div className="branch-card">
          <FaBuilding />
          <h3>{total}</h3>
          <p>Total Branches</p>
        </div>

        <div className="branch-card">
          <FaCheckCircle />
          <h3>{active}</h3>
          <p>Active</p>
        </div>

        <div className="branch-card">
          <FaTimesCircle />
          <h3>{inactive}</h3>
          <p>Inactive</p>
        </div>

        <div className="branch-card">
          <FaMapMarkerAlt />
          <h3>{total}</h3>
          <p>Locations</p>
        </div>

      </div>

      <div className="branch-toolbar">

        <div className="search-box-branch">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Branch..."
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

      <div className="branch-table">
        <table>

          <thead>
            <tr>
              <th>Branch ID</th>
              <th>Branch Name</th>
              <th>City</th>
              <th>Manager</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredBranches.length > 0 ? (
              filteredBranches.map((branch) => (
                <tr key={branch.id}>
                  <td>{branch.id}</td>
                  <td>{branch.name}</td>
                  <td>{branch.city}</td>
                  <td>{branch.manager}</td>
                  <td>
                    <span
                      className={`status ${branch.status.toLowerCase()}`}
                    >
                      {branch.status}
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
                  No Branches Found
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Branches;