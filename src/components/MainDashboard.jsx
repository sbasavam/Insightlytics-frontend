import React, { useState, useRef, useEffect } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ArrowRiseImg from "../assets/MainContentIcons/ArrowRise.png";
import ArrowFallImg from "../assets/MainContentIcons/ArrowFall.png";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const MainDashboard = () => {
  const [dateOption, setDateOption] = useState("Today");
  const [customDate, setCustomDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Overview");

  const dateRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateOptionChange = (value) => {
    setDateOption(value);
    if (value === "Custom") {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
    }
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'This year',
        data: [10, 9, 11, 13, 15, 19, 24],
        fill: false,
        borderColor: '#000000',
        tension: 0.4,
      },
      {
        label: 'Last year',
        data: [8, 12, 18, 15, 13, 17, 26],
        fill: false,
        borderColor: '#A8D5FF',
        borderDash: [5, 5],
        tension: 0.4,
      }
    ]
  };

  const deviceData = {
    labels: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'],
    datasets: [
      {
        data: [19, 22, 20, 24, 9, 21],
        backgroundColor: [
          '#A5B4FC', '#BBF7D0', '#0F0F0F', '#BAE6FD', '#94A3B8', '#86EFAC'
        ],
        borderRadius: 4
      }
    ]
  };

  const locationData = {
    labels: ['United States', 'Canada', 'Mexico', 'Other'],
    datasets: [
      {
        data: [38.6, 22.5, 30.8, 8.1],
        backgroundColor: ['#0F0F0F', '#BBF7D0', '#A5B4FC', '#BAE6FD'],
        borderWidth: 0,
      }
    ]
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

        {/* Date Picker Popup */}
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

        {/* Display selected custom date */}
        {dateOption === 'Custom' && (
          <p className="mt-1 text-sm text-gray-700 font-medium">
            Selected Date: <span className="text-blue-500">{customDate.toDateString()}</span>
          </p>
        )}
      </div>

      {/* Top Metrics Cards (unchanged) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        {[
          { label: 'Views', value: '721K', change: '11.02%', positive: true },
          { label: 'Visits', value: '367K', change: '0.03%', positive: false },
          { label: 'New Users', value: '1,156', change: '15.03%', positive: true },
          { label: 'Active Users', value: '239K', change: '6.08%', positive: true },
        ].map((item, idx) => (
          <div key={idx} className="bg-blue-100 p-4 rounded-xl shadow-sm flex flex-col">
            <p className="text-sm text-gray-500 mb-0">{item.label}</p>
            <div className="flex justify-between items-end">
              <h2 className="text-2xl font-semibold text-gray-800">{item.value}</h2>
              <div className={`flex items-center ${item.positive ? 'text-green-500' : 'text-red-500'}`}>
                <span className="text-sm font-medium mr-1">{item.change}</span>
                <img 
                  src={item.positive ? ArrowRiseImg : ArrowFallImg} 
                  alt={item.positive ? "Increase" : "Decrease"} 
                  className="w-3 h-3" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Users Chart and Tabs */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-2">
      <div className="flex flex-wrap items-center justify-between mb-2">
  <div className="flex items-center space-x-6">
    <h2 className="text-md font-semibold text-gray-800">Total Users</h2>
    <div className="flex items-center space-x-4 text-sm text-gray-500">
      <span className='text-gray-400 font-semibold'>Total Projects</span>
      <span className='text-gray-400 font-semibold'>Operating Status</span>
      <span className="flex items-center text-gray-400 font-semibold">
        <span className="w-2 h-2 bg-black  rounded-full mr-2"></span>This year
      </span>
      <span className="flex items-center text-gray-400 font-semibold">
        <span className="w-2 h-2 bg-[#A8D5FF] rounded-full mr-2"></span>Last year
      </span>
    </div>
  </div>
</div>


        <div className="h-60 ">
          <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>

        {/* Bottom Navigation Tabs */}
        <div className="border-t pt-2 flex space-x-6 text-sm text-gray-500 font-medium">
          {['Overview', 'Targets', 'Budget', 'Users', 'Files', 'Activity', 'Settings'].map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`relative pb-1 transition-all hover:text-black ${
                selectedTab === tab ? 'text-black' : ''
              }`}
            >
              {tab}
              {selectedTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Traffic Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        {/* Device Chart */}
        <div className="bg-[#F7F9FB] px-6 py-2 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">Traffic by Device</h2>
          <div className="h-60">
            <Bar
              data={deviceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  y: { beginAtZero: true, grid: { drawBorder: false } },
                  x: { grid: { display: false } }
                }
              }}
            />
          </div>
        </div>

      {/* Location Chart */}
<div className="bg-[#F7F9FB] px-2 py-2 rounded-lg shadow-sm">
  <h2 className="text-lg font-semibold text-gray-800 mb-6">Traffic by Location</h2>
  <div className="flex items-center space-x-2">
    
    {/* Doughnut Chart */}
    <div className="w-110 h-38">
      <Pie
  data={{
    ...locationData,
    datasets: [
      {
        ...locationData.datasets[0],
        borderWidth: 4, // Controls the white gap between slices
        borderColor: '#F7F9FB' // Matches background for visual separation
        
      }
    ]
  }}
  options={{
    cutout: '60%',
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false
  }}
/>

    </div>

    {/* Labels and Values */}
    <div className="flex justify-between w-full">
      
      {/* Country Labels */}
      <div className="flex flex-col space-y-4">
        {locationData.labels.map((label, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: locationData.datasets[0].backgroundColor[index] }}
            ></div>
            <span className="text-sm text-gray-700">{label}</span>
          </div>
        ))}
      </div>

      {/* % Values */}
      <div className="flex flex-col space-y-4 text-sm font-medium text-gray-900 pr-4">
        {locationData.datasets[0].data.map((value, index) => (
          <span key={index}>{value}%</span>
        ))}
      </div>
    </div>
  </div>
</div>

      </div>
    </main>
  );
};

export default MainDashboard;
