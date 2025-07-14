// src/components/DashboardCards.jsx
import React from "react";
import ArrowRiseImg from "../../assets/MainContentIcons/ArrowRise.png";
import ArrowFallImg from "../../assets/MainContentIcons/ArrowFall.png";

const DashboardCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
      {stats &&
        Object.entries(stats).map(([label, value], idx) => {
          const change = (Math.random() * 20).toFixed(2) + "%";
          const positive = Math.random() > 0.5;

          return (
            <div
              key={idx}
              className="bg-blue-100 p-4 rounded-xl shadow-sm flex flex-col"
            >
              <p className="text-sm text-gray-500 mb-0">{label}</p>
              <div className="flex justify-between items-end">
                <h2 className="text-2xl font-semibold text-gray-800">{value}</h2>
                <div
                  className={`flex items-center ${
                    positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <span className="text-sm font-medium mr-1">{change}</span>
                  <img
                    src={positive ? ArrowRiseImg : ArrowFallImg}
                    alt={positive ? "Increase" : "Decrease"}
                    className="w-3 h-3"
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DashboardCards;
