import React from 'react';
import TotalUsersChart from './charts/TotalUsersChart';
import TrafficByDeviceChart from './charts/TrafficByDeviceChart';
import TrafficByLocationChart from './charts/TrafficByLocationChart';

const MainDashboard = () => {
  return (
  <main className="flex-1 overflow-y-auto p-6 bg-[#F8F8F8] min-h-0">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { label: 'Views', value: '721K', change: '+11.02%', positive: true },
          { label: 'Visits', value: '367K', change: '-0.03%', positive: false, checkmark: true },
          { label: 'New Users', value: '1,156', change: '+15.03%', positive: true, checkmark: true },
          { label: 'Active Users', value: '239K', change: '+6.08%', positive: true, checkmark: true },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">{item.value}</h2>
            <div className="flex items-center">
              <span className={`text-xs ${item.positive ? 'text-green-500' : 'text-red-500'} font-medium`}>
                {item.change}
              </span>
              {item.checkmark && (
                <span className="ml-1 text-green-500 text-xs">✔</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Total Users</h2>
          <div className="flex space-x-4 text-sm text-gray-500">
            <span>Total Projects</span>
            <span>Operating Status</span>
            <span>This year</span>
            <span>Last year</span>
          </div>
        </div>
        <div className="h-80">
          <TotalUsersChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Traffic by Device</h2>
          <div className="h-64">
            <TrafficByDeviceChart />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Traffic by Location</h2>
          <div className="h-64">
            <TrafficByLocationChart />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-gray-500">
          <span>Targets</span>
          <span>Budget</span>
          <span>Users</span>
          <span>Files</span>
          <span>Activity</span>
          <span>Settings</span>
        </div>
      </div>
    </main>
  );
};

export default MainDashboard;