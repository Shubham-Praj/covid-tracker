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

export const DataChart = (props) => {
  let { rows } = { ...props };

  const filteredRow = rows.filter((row) => {
    return row.Country !== "World";
  });

  console.log(filteredRow);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={[filteredRow[0]]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
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
