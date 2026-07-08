import React from "react";
import {
  FaFolder,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/dashboard/DashboardCards.css";

const cards = [
  {
    title: "Total Orders",
    color: "#dbe5ff",
    iconColor: "#4d6fff",
    textColor: "#4d6fff",
  },
  {
    title: "Total Earnings",
    color: "#ffdfe2",
    iconColor: "#ff4d5a",
    textColor: "#ff4d5a",
  },
  {
    title: "Profit",
    color: "#ffe9d1",
    iconColor: "#ff9d2f",
    textColor: "#ff9d2f",
  },
  {
    title: "Completed",
    color: "#e5ffe8",
    iconColor: "#31c95b",
    textColor: "#31c95b",
  },
];

const DashboardCards = () => {
  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div
          className="dashboard-card"
          key={index}
          style={{ background: card.color }}
        >
          <div
            className="card-icon"
            style={{ color: card.iconColor }}
          >
            <FaFolder />
          </div>

          <div className="card-info">
            <h4 style={{ color: card.textColor }}>
              {card.title}
            </h4>
          </div>

          <FaArrowRight
            className="arrow"
            style={{ color: card.textColor }}
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;