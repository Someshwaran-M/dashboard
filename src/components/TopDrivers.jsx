import React from "react";
import {
  FaEllipsisH,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/dashboard/TopDrivers.css";

const drivers = [
  {
    id: 1,
    name: "Guy Hawkins",
    rides: 128,
    income: "$12,540",
    progress: 92,
    image: "https://i.pravatar.cc/80?img=11",
  },
  {
    id: 2,
    name: "Jane Cooper",
    rides: 112,
    income: "$11,200",
    progress: 80,
    image: "https://i.pravatar.cc/80?img=32",
  },
  {
    id: 3,
    name: "Robert Fox",
    rides: 98,
    income: "$9,850",
    progress: 72,
    image: "https://i.pravatar.cc/80?img=15",
  },
];

const TopDrivers = () => {
  return (
    <div className="top-drivers">

      <div className="driver-header">
        <h2>Top Drivers</h2>

        <button>
          <FaEllipsisH />
        </button>
      </div>

      {drivers.map((driver) => (
        <div className="driver-card" key={driver.id}>

          <img
            src={driver.image}
            alt={driver.name}
          />

          <div className="driver-info">

            <div className="driver-top">
              <h3>{driver.name}</h3>
              <h4>{driver.income}</h4>
            </div>

            <p>{driver.rides} Orders Completed</p>

            <div className="progress">
              <div
                className="progress-fill"
                style={{
                  width: `${driver.progress}%`,
                }}
              ></div>
            </div>

          </div>

        </div>
      ))}

      <button className="view-all">
        View All
        <FaArrowRight />
      </button>

    </div>
  );
};

export default TopDrivers;