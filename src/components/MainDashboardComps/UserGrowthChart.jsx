import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ chartData }) => {
  if (!chartData) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-2">
      <div className="flex flex-wrap items-center justify-between mb-2">
        <div className="flex items-center space-x-6">
          <h2 className="text-md font-semibold text-gray-800">Total Users</h2>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="text-gray-400 font-semibold">Total Projects</span>
            <span className="text-gray-400 font-semibold">Operating Status</span>
            <span className="flex items-center text-gray-400 font-semibold">
              <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
              This year
            </span>
            <span className="flex items-center text-gray-400 font-semibold">
              <span className="w-2 h-2 bg-[#A8D5FF] rounded-full mr-2"></span>
              Last year
            </span>
          </div>
        </div>
      </div>
      <div className="h-60">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
