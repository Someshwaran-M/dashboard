import React from "react";
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

const data = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 180 },
  { month: "Mar", value: 260 },
  { month: "Apr", value: 320 },
  { month: "May", value: 420 },
  { month: "Jun", value: 390 },
  { month: "Jul", value: 520 },
  { month: "Aug", value: 610 },
  { month: "Sep", value: 560 },
  { month: "Oct", value: 680 },
  { month: "Nov", value: 740 },
  { month: "Dec", value: 820 },
];

const Statistics = () => {
  return (
    <div className="statistics">

      <div className="statistics-header">
        <div>
          <h2>Statistics Overview</h2>
          <p>Business performance this year</p>
        </div>

        <div className="filter-buttons">
          <button className="active">Month</button>
          <button>Week</button>
          <button>Year</button>
        </div>
      </div>

      <div className="chart">

        <ResponsiveContainer width="100%" height={350}>

          <AreaChart data={data}>

            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#edf2f7" vertical={false}/>

            <XAxis dataKey="month"/>

            <YAxis hide/>

            <Tooltip/>

            <Area
              type="monotone"
              dataKey="value"
              stroke="#4F46E5"
              strokeWidth={3}
              fill="url(#colorValue)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default Statistics;