import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarAnalyticsChart = () => {
  const data = [
    { date: "01 Jan", views: 1234, clicks: 456, conversions: 23 },
    { date: "02 Jan", views: 1567, clicks: 523, conversions: 31 },
    { date: "03 Jan", views: 1890, clicks: 678, conversions: 42 },
    { date: "04 Jan", views: 1456, clicks: 534, conversions: 28 },
    { date: "05 Jan", views: 1789, clicks: 623, conversions: 35 },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-md w-full h-[400px]">
      <h2 className="text-xl font-semibold mb-4">
        Website Analytics
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="views" fill="#2563eb" radius={[6, 6, 0, 0]} />
          <Bar dataKey="clicks" fill="#16a34a" radius={[6, 6, 0, 0]} />
          <Bar dataKey="conversions" fill="#f59e0b" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarAnalyticsChart;