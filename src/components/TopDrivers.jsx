import React from "react";
import {
  FaEllipsisH,
  FaArrowRight,
  FaStar,
  FaCircle,
  FaMapMarkerAlt,
  FaCarSide,
  FaDollarSign,
  FaClipboardCheck,
} from "react-icons/fa";

import "../styles/dashboard/TopDrivers.css";

const drivers = [
  {
    id: 1,
    name: "Guy Hawkins",
    rides: 128,
    income: "$12,540",
    rating: 4.9,
    location: "New York",
    car: "Tesla Model 3",
    progress: 92,
    image: "https://i.pravatar.cc/80?img=11",
  },
  {
    id: 2,
    name: "Jane Cooper",
    rides: 112,
    income: "$11,200",
    rating: 4.8,
    location: "California",
    car: "Toyota Prius",
    progress: 84,
    image: "https://i.pravatar.cc/80?img=32",
  },
  {
    id: 3,
    name: "Robert Fox",
    rides: 98,
    income: "$9,850",
    rating: 4.7,
    location: "Chicago",
    car: "Honda City",
    progress: 75,
    image: "https://i.pravatar.cc/80?img=15",
  },
];

const TopDrivers = () => {
  return (
    <div className="top-drivers">

  <div className="driver-header">
    <h2>Top Drivers</h2>

    <button className="more-btn">
      <FaEllipsisH />
    </button>
  </div>

  {/* Scrollable Area */}
  <div className="drivers-list">
    {drivers.map((driver) => (
      <div className="driver-card" key={driver.id}>

        <img src={driver.image} alt={driver.name} />

        <div className="driver-info">

          <div className="driver-top">
            <div>
              <h3>{driver.name}</h3>

              <span className="online">
                <FaCircle />
                Online
              </span>
            </div>

            <h4>
              <FaDollarSign className="income-icon" />
              {driver.income}
            </h4>
          </div>

          <div className="driver-details">
            <p>
              <FaCarSide />
              {driver.car}
            </p>

            <p>
              <FaMapMarkerAlt />
              {driver.location}
            </p>

            <p>
              <FaStar />
              {driver.rating}
            </p>
          </div>

          <p className="orders">
            <FaClipboardCheck />
            {driver.rides} Completed Orders
          </p>

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${driver.progress}%` }}
            />
          </div>

        </div>

      </div>
    ))}
  </div>

  <button className="view-all">
    View All Drivers
    <FaArrowRight />
  </button>

</div>
  );
};

export default TopDrivers;