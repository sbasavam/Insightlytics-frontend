import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  getDashboardData,
  getTrafficByLocation,
  getTrafficByDevice,
  getUserGrowthData,
} from "../services/Api";

import DashboardCards from "./MainDashboardComps/Cards";
import UserGrowthChart from "./MainDashboardComps/UserGrowthChart";
import DeviceChart from "./MainDashboardComps/DeviceChart";
import LocationChart from "./MainDashboardComps/LocationChart";
import   "./MainDashboardComps/ChartRegistration";


const MainDashboard = () => {
  const [dateOption, setDateOption] = useState("Today");
  const [customDate, setCustomDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Overview");

  const [stats, setStats] = useState(null);
  const [deviceChart, setDeviceChart] = useState(null);
  const [locationChart, setLocationChart] = useState(null);
  const [userGrowthChart, setUserGrowthChart] = useState(null);

  const dateRef = useRef();

  // Close custom date picker on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch all dashboard data on mount
  useEffect(() => {
    getDashboardData()
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Failed to fetch dashboard stats:", err));

    getTrafficByDevice()
      .then((res) => {
        const { labels, values } = res.data;
        setDeviceChart({
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: [
                "#A5B4FC",
                "#BBF7D0",
                "#0F0F0F",
                "#BAE6FD",
                "#94A3B8",
                "#86EFAC",
              ],
              borderRadius: 4,
            },
          ],
        });
      })
      .catch((err) => console.error("Failed to fetch device chart data:", err));

    getTrafficByLocation()
      .then((res) => {
        const { labels, values } = res.data;
        const backgroundColor = ["#0F0F0F", "#BBF7D0", "#A5B4FC", "#BAE6FD"];
        setLocationChart({
          labels,
          datasets: [
            {
              data: values,
              backgroundColor,
              borderWidth: 4,
              borderColor: "#F7F9FB",
            },
          ],
        });
      })
      .catch((err) => console.error("Failed to fetch location chart data:", err));

    getUserGrowthData()
      .then((res) => {
        const { labels, values } = res.data;
        setUserGrowthChart({
          labels,
          datasets: [
            {
              label: "This year",
              data: values,
              fill: false,
              borderColor: "#000000",
              tension: 0.4,
            },
            {
              label: "Last year",
              data: values.map((v) => v * 0.85),
              fill: false,
              borderColor: "#A8D5FF",
              borderDash: [5, 5],
              tension: 0.4,
            },
          ],
        });
      })
      .catch((err) => console.error("Failed to fetch user growth data:", err));
  }, []);

  const handleDateOptionChange = (value) => {
    setDateOption(value);
    setShowDatePicker(value === "Custom");
  };

  return (
    <main className="flex-1 overflow-y-auto px-6 py-2 bg-[#F8F8F8] min-h-0 relative">
      {/* Date Dropdown */}
      <div className="mb-2 relative w-full sm:w-40">
        <select
          value={dateOption}
          onChange={(e) => handleDateOptionChange(e.target.value)}
        >
          <option>Today</option>
          <option>Yesterday</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Custom</option>
        </select>

        {showDatePicker && (
          <div
            ref={dateRef}
            className="absolute z-50 mt-2 bg-white/90 backdrop-blur-lg shadow-lg border border-gray-200 rounded-lg p-4"
          >
            <DatePicker
              selected={customDate}
              onChange={(date) => {
                setCustomDate(date);
                setShowDatePicker(false);
              }}
              inline
              calendarClassName="rounded-md shadow"
            />
          </div>
        )}

        {dateOption === "Custom" && (
          <p className="mt-1 text-sm text-gray-700 font-medium">
            Selected Date:{" "}
            <span className="text-blue-500">{customDate.toDateString()}</span>
          </p>
        )}
      </div>

      {/* Top Stats Cards */}
      <DashboardCards stats={stats} />

      {/* Line Chart with Tabs */}
      <UserGrowthChart
        chartData={userGrowthChart}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        <DeviceChart chartData={deviceChart} />
        <LocationChart chartData={locationChart} />
      </div>
    </main>
  );
};

export default MainDashboard;
