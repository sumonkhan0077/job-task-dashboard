import axios from "axios";
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

  useEffect(() => {
    axiosSecure
      .get("/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);
  // console.log(users)
  return (
    <div className="grid grid-cols-12 grid-rows-9 gap-3 mt-3">
      {/* 1 1 */}
      <div className="bg-amber-300 col-span-6 row-span-4">grap</div>
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
  {
            users.map((user) => (
       
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
                <button className={`border bg-green-500/20 text-green-800 px-1 rounded-lg text-sm ${user.status == "inactive" && "bg-red-500/20 text-red-900"}`}>
                  {user.status}
                </button>
              </div>
            </div>
          </div>
               
            ))
        }
        </div>
      </div>

      {/* 3 2  */}
      <div className="bg-amber-300 col-span-4 row-span-5"></div>

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
