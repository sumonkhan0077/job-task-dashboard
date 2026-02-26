import { PieChart, Pie, Cell } from "recharts";
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
import {
  CircleUserRound,
  CloudCog,
  FolderKanban,
  MonitorCog,
  NotebookText,
  Pause,
  Share2,
  Square,
  Video,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import axiosSecure from "../API/axiosSecure";


const AnaDashborad = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axiosSecure
      .get("/api/overview")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);
useEffect(() => {
  axiosSecure
    .get("/api/analytics")
    .then((res) => {
      const formattedData = res.data.map(item => ({
        ...item, 
        formattedDate: new Date(item.date).toLocaleString('en-GB', {
          day: 'numeric',
          month: 'short'
        })
      }));
      setBarData(formattedData);
    })
    .catch((err) => console.error(err));
}, []);

  const percentage = data.totalUsers
    ? Math.round((data.activeUsers / data.totalUsers) * 100)
    : 0;

  const chartData = [
    { name: "Active", value: percentage, fill: "#166534" },
    { name: "Remaining", value: 100 - percentage, fill: "#E5E7EB" },
  ];
  return (
    <div className="grid grid-cols-12 grid-rows-9 gap-3 mt-3">
      {/* 2 1 */}
      <div className=" col-span-6 row-span-4">
        <div className="bg-white rounded-2xl p-5 w-full h-full">
          <h2 className="text-xl font-semibold mb-4">Website Analytics</h2>

          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="formattedDate" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="views" fill="#2563eb" radius={[6, 6, 0, 0]} />
              <Bar dataKey="clicks" fill="#16a34a" radius={[6, 6, 0, 0]} />
              <Bar dataKey="conversions" fill="#f59e0b" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* 2 2 */}
      <div className="bg-white rounded-2xl col-span-3 row-span-4">
        <div className="p-2  border-gray-800">
          <div className=" rounded-xl p-3 ">
            <h1 className="font-medium text-xl mb-3">Reminders</h1>
            <h3 className="font-medium text-xl text-emerald-900 mb-1 ">
              Meeting with Arc <br />
              Company
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Time: 02:00 PM - 04:00 PM
            </p>
            <button className="w-full cursor-pointer bg-gradient-to-br from-emerald-900 to-emerald-700  text-white py-2 rounded-4xl font-normal transition flex justify-center gap-3">
              <Video /> Start Meeting
            </button>
          </div>
        </div>
      </div>

      {/* 2 3 */}
      <div className="bg-white rounded-2xl col-span-3 row-span-6 p-5">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-xl">Project</h1>
          <button className="px-3 py-1 border border-emerald-800 text-emerald-800 rounded-2xl">
            + New
          </button>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center mb-2">
            <div>
              <NotebookText className="text-green-700" />
            </div>
            <div>
              <h1 className="text-sm">Develop API Endpoint</h1>
              <p className="text-xs text-gray-400 mt-2">
                Due Date: Nov 28, 2026
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <FolderKanban className="text-yellow-400" />
            </div>
            <div>
              <h1 className="text-sm">Develop API Endpoint</h1>
              <p className="text-xs text-gray-400 mt-2">
                Due Date: Nov 28, 2026
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <Share2 className="text-pink-600" />
            </div>
            <div>
              <h1 className="text-sm">Develop API Endpoint</h1>
              <p className="text-xs text-gray-400 mt-2">
                Due Date: Nov 28, 2026
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <MonitorCog className="text-sky-700" />
            </div>
            <div>
              <h1 className="text-sm">Develop API Endpoint</h1>
              <p className="text-xs text-gray-400 mt-2">
                Due Date: Nov 28, 2026
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <CloudCog className="text-fuchsia-700" />
            </div>
            <div>
              <h1 className="text-sm">Develop API Endpoint</h1>
              <p className="text-xs text-gray-400 mt-2">
                Due Date: Nov 28, 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 1 */}
      <div className="bg-white rounded-2xl p-5 col-span-5 row-span-5">
        <div className="">
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-medium text-xl">Team Collaboration</h1>
            <button className="px-3 py-1 border border-emerald-800 text-emerald-900 rounded-2xl">
              + Add Member
            </button>
          </div>
          {users.map((user) => (
            <div key={user.id} className="">
              <div className="flex  justify-between">
                <div className="flex justify-between gap-3 items-center mb-2">
                  <div className="bg-[#3493ff96] p-1.5 rounded-full ">
                    <CircleUserRound />
                  </div>
                  <div>
                    <h1 className="text-sm font-semibold">{user.name}</h1>
                    <p className="text-xs text-gray-400 mt-2">
                      Email: {user.email}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    className={`border bg-green-500/20 text-green-800 px-1 rounded-lg text-sm ${user.status == "inactive" && "bg-red-500/20 text-red-900"}`}
                  >
                    {user.status}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 2  */}
      <div className="bg-white rounded-2xl col-span-4 row-span-5 p-5">
        <h2 className="text-xl font-semibold mb-4">User Activity Progress</h2>

        <div className="relative flex justify-center">
          <PieChart width={300} height={150}>
            <Pie
              data={chartData}
              startAngle={180}
              endAngle={0}
              cx="50%"
              cy="100%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            />
          </PieChart>

          <div className="absolute bottom-4 text-center">
            <h1 className="text-2xl font-bold">{percentage}%</h1>
            <p className="text-green-700 text-sm">Active Users</p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-4 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Total Users</p>
            <p className="font-semibold">{data.totalUsers || 0}</p>
          </div>

          <div>
            <p className="text-gray-500">Revenue</p>
            <p className="font-semibold">${data.revenue || 0}</p>
          </div>

          <div>
            <p className="text-gray-500">Growth</p>
            <p className="font-semibold text-green-600">+{data.growth || 0}%</p>
          </div>
        </div>
      </div>

      {/* 3 3 */}
      <div className="bg-gradient-to-br from-emerald-800 to-teal-950  col-span-3 row-span-3 rounded-2xl">
        <div className="p-2  border-gray-800">
          <div className=" rounded-xl p-3 ">
            <h1 className="font-normal text-xl mb-3 text-white">
              Time Tracker
            </h1>
            <h3 className="font-bold text-4xl text-center text-emerald-900 mb-4 text-white">
              01:24:08
            </h3>

            <div className="flex justify-center gap-3">
              <div className="bg-white p-1.5 rounded-full">
                <Pause className=" " />
              </div>
              <div className="bg-red-500 p-1.5 rounded-full">
                <Square className=" text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnaDashborad;
