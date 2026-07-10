import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import "../styles/dashboard/Statistics.css";

const chartData = {
  Month: [
    { name: "Jan", revenue: 120, profit: 280 },
    { name: "Feb", revenue: 180, profit: 110 },
    { name: "Mar", revenue: 260, profit: 170 },
    { name: "Apr", revenue: 120, profit: 420 },
    { name: "May", revenue: 420, profit: 300 },
    { name: "Jun", revenue: 390, profit: 280 },
    { name: "Jul", revenue: 120, profit: 490 },
    { name: "Aug", revenue: 610, profit: 470 },
    { name: "Sep", revenue: 560, profit: 430 },
    { name: "Oct", revenue: 380, profit: 720 },
    { name: "Nov", revenue: 740, profit: 600 },
    { name: "Dec", revenue: 820, profit: 690 },
  ],

  Week: [
    { name: "Mon", revenue: 60, profit: 35 },
    { name: "Tue", revenue: 90, profit: 50 },
    { name: "Wed", revenue: 120, profit: 180 },
    { name: "Thu", revenue: 110, profit: 75 },
    { name: "Fri", revenue: 150, profit: 110 },
    { name: "Sat", revenue: 180, profit: 240 },
    { name: "Sun", revenue: 130, profit: 95 },
  ],

  Year: [
    { name: "2021", revenue: 250, profit: 290 },
    { name: "2022", revenue: 520, profit: 360 },
    { name: "2023", revenue: 760, profit: 510 },
    { name: "2024", revenue: 680, profit: 920 },
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
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData[filter]}
            margin={{
              top: 15,
              right: 20,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid
              stroke="#EEF2F7"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{
                stroke: "#CBD5E1",
                strokeWidth: 2,
              }}
              contentStyle={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,.15)",
              }}
            />

            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
            />

            <Line
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#2563EB",
              }}
              activeDot={{
                r: 7,
                fill: "#2563EB",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />

            <Line
              type="monotone"
              dataKey="profit"
              name="Profit"
              stroke="#10B981"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#10B981",
              }}
              activeDot={{
                r: 7,
                fill: "#10B981",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}