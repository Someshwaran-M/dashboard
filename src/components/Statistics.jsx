import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import "../styles/dashboard/Statistics.css";

const data = [
  { month: "Jan", grade: 20, exams: 20 },
  { month: "Feb", grade: 25, exams: 35 },
  { month: "Mar", grade: 35, exams: 50 },
  { month: "Apr", grade: 50, exams: 60 },
  { month: "May", grade: 70, exams: 55 },
  { month: "Jun", grade: 75, exams: 30 },
  { month: "Jul", grade: 65, exams: 45 },
  { month: "Aug", grade: 40, exams: 85 },
  { month: "Sep", grade: 30, exams: 90 },
  { month: "Oct", grade: 40, exams: 80 },
  { month: "Nov", grade: 60, exams: 85 },
  { month: "Dec", grade: 85, exams: 100 },
];

const Statistics = () => {
  return (
    <div className="statistics">

      <div className="statistics-header">

        <h2>Statistic</h2>

        <div className="month">
          ❮ <span>Aug 2021</span> ❯
        </div>

      </div>

      <div className="statistics-top">

        <h3>Progress score</h3>

        <div className="legend">

          <span className="blue-dot"></span>
          Average grade

          <span className="green-dot"></span>
          Exams

        </div>

      </div>

      <div className="chart">

        <ResponsiveContainer width="100%" height={350}>

          <LineChart data={data}>

            <CartesianGrid
              stroke="#ececec"
              vertical={false}
            />

            <XAxis dataKey="month" />

            <YAxis hide />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="grade"
              stroke="#3d63ff"
              strokeWidth={3}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="exams"
              stroke="#00d084"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default Statistics;