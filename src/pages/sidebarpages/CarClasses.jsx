import React, { useState } from "react";
import {
  FaSearch,
  FaCar,
  FaCheckCircle,
  FaTools,
  FaTimesCircle,
} from "react-icons/fa";
import "../../styles/dashboard/CarClasses.css";

const initialCars = [
  {
    id: "#CAR-1001",
    model: "Toyota Camry",
    category: "Sedan",
    seats: 5,
    status: "Available",
  },
  {
    id: "#CAR-1002",
    model: "Honda CR-V",
    category: "SUV",
    seats: 7,
    status: "Booked",
  },
  {
    id: "#CAR-1003",
    model: "Hyundai i20",
    category: "Hatchback",
    seats: 5,
    status: "Maintenance",
  },
  {
    id: "#CAR-1004",
    model: "BMW X5",
    category: "Luxury SUV",
    seats: 7,
    status: "Available",
  },
];

const CarClasses = () => {
  const [cars, setCars] = useState(initialCars);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const handleNewCar = () => {
    const newCar = {
      id: `#CAR-${1000 + cars.length + 1}`,
      model: "New Car",
      category: "Sedan",
      seats: 5,
      status: "Available",
    };

    setCars([...cars, newCar]);
  };

  const filteredCars = cars.filter((car) => {
    const matchSearch =
      car.id.toLowerCase().includes(search.toLowerCase()) ||
      car.model.toLowerCase().includes(search.toLowerCase()) ||
      car.category.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All Status" || car.status === status;

    return matchSearch && matchStatus;
  });

  const total = cars.length;
  const available = cars.filter((c) => c.status === "Available").length;
  const booked = cars.filter((c) => c.status === "Booked").length;
  const maintenance = cars.filter((c) => c.status === "Maintenance").length;

  return (
    <div className="car-page">

      {/* Header */}
      <div className="car-header">
        <div>
          <h1>Car Classes</h1>
          <p>Manage all vehicle categories.</p>
        </div>

        <button
          className="new-car-btn"
          onClick={handleNewCar}
        >
          + New Car
        </button>
      </div>

      {/* Cards */}
      <div className="car-cards">

        <div className="car-card">
          <FaCar />
          <h3>{total}</h3>
          <p>Total Cars</p>
        </div>

        <div className="car-card">
          <FaCheckCircle />
          <h3>{available}</h3>
          <p>Available</p>
        </div>

        <div className="car-card">
          <FaCar />
          <h3>{booked}</h3>
          <p>Booked</p>
        </div>

        <div className="car-card">
          <FaTools />
          <h3>{maintenance}</h3>
          <p>Maintenance</p>
        </div>

      </div>

      {/* Search */}
      <div className="car-toolbar">

        <div className="search-box-car">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Available</option>
          <option>Booked</option>
          <option>Maintenance</option>
        </select>

      </div>

      {/* Table */}
      <div className="car-table">
        <table>

          <thead>
            <tr>
              <th>Car ID</th>
              <th>Model</th>
              <th>Category</th>
              <th>Seats</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <tr key={car.id}>
                  <td>{car.id}</td>
                  <td>{car.model}</td>
                  <td>{car.category}</td>
                  <td>{car.seats}</td>

                  <td>
                    <span
                      className={`status ${car.status.toLowerCase()}`}
                    >
                      {car.status}
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
                  No Cars Found
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default CarClasses;