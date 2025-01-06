"use client";

import styles from "./chart.module.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Lundi",
    visit: 3900,
    click: 1398,
  },
  {
    name: "Mardi",
    visit: 29000,
    click: 3800,
  },
  {
    name: "Mercredi",
    visit: 35800,
    click: 15788,
  },
  {
    name: "Jeudi",
    visit: 18540,
    click: 1744,
  },
  {
    name: "Vendredi",
    visit: 50200,
    click: 1050,
  },
  {
    name: "Samedi",
    visit: 9000,
    click: 8569,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Statistiques</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
