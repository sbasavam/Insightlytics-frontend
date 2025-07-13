import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Linux', value: 5 },
  { name: 'Mac', value: 15 },
  { name: 'iOS', value: 20 },
  { name: 'Windows', value: 25 },
  { name: 'Android', value: 18 },
  { name: 'Other', value: 7 },
];

const TrafficByDeviceChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
        <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
        <YAxis 
          dataKey="name" 
          type="category" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#9CA3AF' }}
        />
        <Tooltip />
        <Bar 
          dataKey="value" 
          fill="#3B82F6" 
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TrafficByDeviceChart;