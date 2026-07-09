import React from "react";
import {
  FaShoppingBag,
  FaDollarSign,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/dashboard/DashboardCards.css";

const cards = [
  {
    title: "Total Orders",
    value: "435",
    change: "+12.5%",
    icon: <FaShoppingBag />,
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
  {
    title: "Revenue",
    value: "$16,240",
    change: "+8.3%",
    icon: <FaDollarSign />,
    color: "#16A34A",
    bg: "#ECFDF5",
  },
  {
    title: "Profit",
    value: "$8,530",
    change: "+4.8%",
    icon: <FaChartLine />,
    color: "#F59E0B",
    bg: "#FFF7ED",
  },
  {
    title: "Completed",
    value: "326",
    change: "+18.2%",
    icon: <FaCheckCircle />,
    color: "#EF4444",
    bg: "#FEF2F2",
  },
];

const DashboardCards = () => {
  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div className="stat-card" key={index}>

          <div
            className="stat-icon"
            style={{
              background: card.bg,
              color: card.color,
            }}
          >
            {card.icon}
          </div>

          <div className="stat-content">
            <span>{card.title}</span>
            <h2>{card.value}</h2>

            <small
              style={{
                color: card.color,
              }}
            >
              {card.change} this month
            </small>
          </div>

        </div>
      ))}
    </div>
  );
};

export default DashboardCards;