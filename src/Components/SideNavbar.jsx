import React from "react";
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  EggFried,
} from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex flex-col md:w-64 bg-gray-100 text-white h-screen rounded-2xl border-gray-800">
      {/* Logo / Brand */}
      <div className="p-6  border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl">
            D
          </div>
          <h1 className="text-2xl font-bold text-black">Donezo</h1>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-3 mb-6">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            MENU
          </p>
          <nav className="space-y-3 p-3">
            <NavLink className="flex items-center text-gray-500 rounded-lg hover:text-black  transition">
              <LayoutDashboard className="w-5 h-5 mr-3" />
              Dashboard
            </NavLink>
            <NavLink className="flex items-center text-gray-500 rounded-lg hover:text-black  transition relative">
              <CheckSquare className="w-5 h-5 mr-3" />
              Tasks
              <span className="absolute right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                12+
              </span>
            </NavLink>
            <NavLink className="flex items-center text-gray-500  rounded-lg hover:text-black  transition">
              <Calendar className="w-5 h-5 mr-3" />
              Calendar
            </NavLink>
            <NavLink className="flex items-center text-gray-500 rounded-lg hover:text-black  transition">
              <BarChart3 className="w-5 h-5 mr-3" />
              Analytics
            </NavLink>
            <NavLink className="flex items-center text-gray-500  rounded-lg hover:text-black  transition">
              <Users className="w-5 h-5 mr-3" />
              Team
            </NavLink>
          </nav>
        </div>

        <div className="px-3">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            GENERAL
          </p>
          <nav className="space-y-3 p-3">
            <NavLink className="flex items-center text-gray-500  rounded-lg hover:text-black  transition">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </NavLink>
            <NavLink className="flex items-center text-gray-500  rounded-lg hover:text-black  transition">
              <HelpCircle className="w-5 h-5 mr-3" />
              Help
            </NavLink>
            <NavLink className="flex items-center text-gray-500  rounded-lg hover:text-red-500  transition">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile App Promo Card */}
      <div className="p-2  border-gray-800">
        <div className="bg-gradient-to-br from-emerald-900 to-teal-950 rounded-xl p-3 ">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-2xl">
              <EggFried className="text-black" />
            </span>
          </div>
          <h3 className="font-normal mb-1">
            Download our <br /> Mobile App
          </h3>
          <p className="text-sm text-gray-300 mb-4">Get it another way</p>
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-4xl font-medium transition">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
