import React from "react";
import { Mail, Bell, Search,  } from "lucide-react";
import { motion } from "framer-motion";

const TopNavbar = () => {
  return (
    <div>
      <div className="w-full rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 rounded-2xl shadow-sm px-6 py-3">
        
          {/* Search Section */}
          <div className="flex items-center gap-3 w-1/2">
            <div className="flex items-center bg-white rounded-4xl px-4 py-2 w-full">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search task"
                className="bg-transparent outline-none px-3 w-full text-sm"
              />
            <div className="bg-gray-100 flex rounded-lg px-2 py-1 text-md text-gray-600 cursor-pointer hover:bg-gray-200 transition">
             <span>⌘</span> <span>F</span>
            </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-white p-2 rounded-full cursor-pointer"
            >
              <Mail className="w-5 h-5 text-gray-600" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-white p-2 rounded-full cursor-pointer"
            >
              <Bell className="w-5 h-5 text-gray-600" />
            </motion.div>

            {/* Profile */}
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="https://img.icons8.com/?size=160&id=aZ0WjSq1u1YB&format=png"
                alt="avatar"
                className="w-10 h-10 bg-purple-600/60 p-1 rounded-full"
              />
              <div className="text-sm">
                <p className="font-semibold text-gray-800">Totok Michael</p>
                <p className="text-gray-500 text-xs">tmichael20@mail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
