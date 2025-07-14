import React from 'react';
import { Pie } from 'react-chartjs-2';

const LocationChart = ({ chartData }) => {
  if (!chartData) return null;

  return (
    <div className="bg-[#F7F9FB] px-2 py-2 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">Traffic by Location</h2>
      <div className="flex items-center space-x-2">
        <div className="w-50 h-50">
          <Pie
            data={chartData}
            options={{
              cutout: "60%",
              plugins: { legend: { display: false } },
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col space-y-8">
            {chartData.labels.map((label, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
                ></div>
                <span className="text-sm text-gray-700">{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-4 text-sm font-medium text-gray-900 pr-4">
            {chartData.datasets[0].data.map((value, index) => (
              <span key={index}>{value}%</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationChart;
