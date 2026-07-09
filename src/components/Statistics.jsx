import React, { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import "../styles/dashboard/Statistics.css";

const chartData = {
  Month: [
    { name: "Jan", revenue: 120, profit: 80 },
    { name: "Feb", revenue: 180, profit: 110 },
    { name: "Mar", revenue: 260, profit: 170 },
    { name: "Apr", revenue: 320, profit: 220 },
    { name: "May", revenue: 420, profit: 300 },
    { name: "Jun", revenue: 390, profit: 280 },
    { name: "Jul", revenue: 520, profit: 390 },
    { name: "Aug", revenue: 610, profit: 470 },
    { name: "Sep", revenue: 560, profit: 430 },
    { name: "Oct", revenue: 680, profit: 520 },
    { name: "Nov", revenue: 740, profit: 600 },
    { name: "Dec", revenue: 820, profit: 690 },
  ],

  Week: [
    { name: "Mon", revenue: 60, profit: 35 },
    { name: "Tue", revenue: 90, profit: 50 },
    { name: "Wed", revenue: 120, profit: 80 },
    { name: "Thu", revenue: 110, profit: 75 },
    { name: "Fri", revenue: 150, profit: 110 },
    { name: "Sat", revenue: 180, profit: 140 },
    { name: "Sun", revenue: 130, profit: 95 },
  ],

  Year: [
    { name: "2021", revenue: 350, profit: 220 },
    { name: "2022", revenue: 520, profit: 360 },
    { name: "2023", revenue: 760, profit: 510 },
    { name: "2024", revenue: 980, profit: 720 },
    { name: "2025", revenue: 1240, profit: 910 },
  ],
};

export default function Statistics() {
  const [filter, setFilter] = useState("Month");

  return (
    <div className="statistics">
      <div className="statistics-header">
        <div>
          <h2>Statistics Overview</h2>
          <p>Revenue vs Profit</p>
        </div>

        <div className="filter-buttons">
          {["Month", "Week", "Year"].map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="chart">
        <ResponsiveContainer width="100%" height={330}>
          <AreaChart data={chartData[filter]}>
            <defs>
              <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="pro" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#16A34A" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#16A34A" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#edf2f7" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            {/* Revenue */}
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#4F46E5"
              strokeWidth={3}
              fill="url(#rev)"
            />

            {/* Profit */}
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#16A34A"
              strokeWidth={3}
              fill="url(#pro)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}