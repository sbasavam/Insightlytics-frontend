import React from 'react';
import { Bar } from 'react-chartjs-2';

const DeviceChart = ({ chartData }) => {
  if (!chartData) return null;

  return (
    <div className="bg-[#F7F9FB] px-6 py-2 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">Traffic by Device</h2>
      <div className="h-60">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: (value) =>
                    value >= 1000000 ? `${(value / 1000000).toFixed(0)}M` : value,
                },
              },
              x: { grid: { display: false } },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DeviceChart;
