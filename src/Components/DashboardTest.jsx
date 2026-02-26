import React from "react";

const DashboardTest = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div>
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <p className="text-gray-500 mt-3">
          Plan, prioritize and accomplish your task ease.
        </p>
      </div>
      <div className="">
        <button className="text-white py-3 px-4.5 rounded-4xl bg-gradient-to-br from-emerald-900 to-emerald-700 mr-4">+  Add Project</button>
        <button className="text-emerald-900 border border-emerald-900 bg-white py-3 px-4.5 rounded-4xl  ">Import Data</button>
      </div>
    </div>
  );
};

export default DashboardTest;
