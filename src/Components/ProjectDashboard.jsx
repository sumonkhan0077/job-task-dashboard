import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import axiosSecure from "../API/axiosSecure";

const stats = [
  {
    title: "Total Projects",
    value: 24,
    change: "+5",
    note: "Increased from last month",
    highlight: true,
  },
  {
    title: "Ended Projects",
    value: 10,
    change: "+6",
    note: "Increased from last month",
  },
  {
    title: "Running Projects",
    value: 12,
    change: "+2",
    note: "Increased from last month",
  },
  {
    title: "Pending Project",
    value: 2,
    note: "On Discuss",
  },
];

const ProjectDashboard = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(products)
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-3 mt-4">
        {products.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className={`rounded-2xl p-6 shadow-sm transition-all duration-300 col-span-12 md:col-span-5 lg:col-span-3 ${index == 0 && "bg-gradient-to-br from-emerald-900 to-emerald-700"}`}
           
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-lg font-medium ${index == 0 && "text-white"}`}
              >
                {item.name}
              </h3>

              <div
                className={`p-2 rounded-full border border-black text-black ${index == 0 && "bg-white border-0"}`}
              >
                <ArrowUpRight size={16} />
              </div>
            </div>

            {/* Value */}
            <h2
              className={`text-4xl font-bold mb-4 ${index == 0 && "text-white"}`}
            >
              {item.price}
            </h2>

            {/* Footer */}
            <div className="flex items-center gap-2 text-sm">
              {item.sales && (
                <span
                  className={`px-2 py-1 bg-green-600/5 rounded-md text-xs font-medium border border-green-600 ${index == 0 && "text-yellow-300"}`}
                  
                >
                  {item.sales} +
                </span>
              )}

              <span
                className={`text-green-600 text-xs ${index == 0 && "text-yellow-300/85"}`}
              >
                {item.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDashboard;
