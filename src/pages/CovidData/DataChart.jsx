import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const DataChart = (props) => {
  let { rows } = { ...props };

  const filteredRow = rows.filter((row) => {
    return row.Country !== "World";
  });

  console.log(filteredRow);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={filteredRow}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="TotalCases" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Country" fill="#8884d8" />
        <Bar dataKey="TotalCases" fill="#8884d8" />
        <Bar dataKey="TotalRecovered" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
