import React, { useState } from "react";
import {
  FaCar,
  FaRoad,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
} from "react-icons/fa";
import "../../styles/dashboard/Rides.css";

const initialRides = [
  {
    id: "#RID-1001",
    driver: "John Smith",
    passenger: "Emma Wilson",
    fare: "$25",
    status: "Completed",
  },
  {
    id: "#RID-1002",
    driver: "David Miller",
    passenger: "Sophia Lee",
    fare: "$18",
    status: "Ongoing",
  },
  {
    id: "#RID-1003",
    driver: "Michael Brown",
    passenger: "Olivia White",
    fare: "$32",
    status: "Cancelled",
  },
  {
    id: "#RID-1004",
    driver: "James Clark",
    passenger: "William Scott",
    fare: "$15",
    status: "Completed",
  },
  {
    id: "#RID-1005",
    driver: "Daniel Harris",
    passenger: "Lucas King",
    fare: "$21",
    status: "Ongoing",
  },
];

const Rides = () => {
  const [rides, setRides] = useState(initialRides);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const handleNewRide = () => {
    const ride = {
      id: `#RID-${1000 + rides.length + 1}`,
      driver: "New Driver",
      passenger: "New Passenger",
      fare: "$20",
      status: "Ongoing",
    };

    setRides([...rides, ride]);
  };

  const filteredRides = rides.filter((ride) => {
    const matchSearch =
      ride.id.toLowerCase().includes(search.toLowerCase()) ||
      ride.driver.toLowerCase().includes(search.toLowerCase()) ||
      ride.passenger.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All Status" || ride.status === status;

    return matchSearch && matchStatus;
  });

  const total = rides.length;
  const ongoing = rides.filter((r) => r.status === "Ongoing").length;
  const completed = rides.filter((r) => r.status === "Completed").length;
  const cancelled = rides.filter((r) => r.status === "Cancelled").length;

  return (
    <div className="orders-page">

      <div className="orders-header">
        <div>
          <h1>Ride Management</h1>
          <p>Manage and monitor all rides.</p>
        </div>

        <button
          className="new-order-btn"
          onClick={handleNewRide}
        >
          + New Ride
        </button>
      </div>

      <div className="orders-cards">

        <div className="order-card">
          <FaCar />
          <h3>{total}</h3>
          <p>Total Rides</p>
        </div>

        <div className="order-card">
          <FaRoad />
          <h3>{ongoing}</h3>
          <p>Ongoing</p>
        </div>

        <div className="order-card">
          <FaCheckCircle />
          <h3>{completed}</h3>
          <p>Completed</p>
        </div>

        <div className="order-card">
          <FaTimesCircle />
          <h3>{cancelled}</h3>
          <p>Cancelled</p>
        </div>

      </div>

      <div className="orders-toolbar">

        <div className="search-box-order">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Rides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Ongoing</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>

      </div>

      <div className="orders-table">
        <table>

          <thead>
            <tr>
              <th>Ride ID</th>
              <th>Driver</th>
              <th>Passenger</th>
              <th>Fare</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredRides.length > 0 ? (
              filteredRides.map((ride) => (
                <tr key={ride.id}>
                  <td>{ride.id}</td>
                  <td>{ride.driver}</td>
                  <td>{ride.passenger}</td>
                  <td>{ride.fare}</td>

                  <td>
                    <span
                      className={`status ${ride.status.toLowerCase()}`}
                    >
                      {ride.status}
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
                  No Rides Found
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Rides;