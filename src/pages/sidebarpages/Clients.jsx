import React, { useState } from "react";
import {
  FaSearch,
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaUserTimes,
} from "react-icons/fa";
import "../../styles/dashboard/Clients.css";

const initialClients = [
  {
    id: "#CL-1001",
    name: "John Smith",
    company: "Google",
    email: "john@gmail.com",
    status: "Active",
  },
  {
    id: "#CL-1002",
    name: "Emma Wilson",
    company: "Microsoft",
    email: "emma@gmail.com",
    status: "Pending",
  },
  {
    id: "#CL-1003",
    name: "David Miller",
    company: "Amazon",
    email: "david@gmail.com",
    status: "Inactive",
  },
  {
    id: "#CL-1004",
    name: "Sophia Lee",
    company: "Apple",
    email: "sophia@gmail.com",
    status: "Active",
  },
];

const Clients = () => {
  const [clients, setClients] = useState(initialClients);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const handleNewClient = () => {
    const newClient = {
      id: `#CL-${1000 + clients.length + 1}`,
      name: "New Client",
      company: "Company",
      email: "client@gmail.com",
      status: "Pending",
    };

    setClients([...clients, newClient]);
  };

  const filteredClients = clients.filter((client) => {
    const matchSearch =
      client.id.toLowerCase().includes(search.toLowerCase()) ||
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.company.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All Status" || client.status === status;

    return matchSearch && matchStatus;
  });

  const total = clients.length;
  const active = clients.filter((c) => c.status === "Active").length;
  const pending = clients.filter((c) => c.status === "Pending").length;
  const inactive = clients.filter((c) => c.status === "Inactive").length;

  return (
    <div className="orders-page">

      <div className="orders-header">
        <div>
          <h1>Clients Management</h1>
          <p>Manage all your clients.</p>
        </div>

        <button
          className="new-order-btn"
          onClick={handleNewClient}
        >
          + New Client
        </button>
      </div>

      <div className="orders-cards">

        <div className="order-card">
          <FaUsers />
          <h3>{total}</h3>
          <p>Total Clients</p>
        </div>

        <div className="order-card">
          <FaUserCheck />
          <h3>{active}</h3>
          <p>Active</p>
        </div>

        <div className="order-card">
          <FaUserClock />
          <h3>{pending}</h3>
          <p>Pending</p>
        </div>

        <div className="order-card">
          <FaUserTimes />
          <h3>{inactive}</h3>
          <p>Inactive</p>
        </div>

      </div>

      <div className="orders-toolbar">

        <div className="search-box-order">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Clients..."
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
          <option>Pending</option>
          <option>Inactive</option>
        </select>

      </div>

      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Client ID</th>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.company}</td>
                  <td>{client.email}</td>
                  <td>
                    <span
                      className={`status ${client.status.toLowerCase()}`}
                    >
                      {client.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No Clients Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Clients;