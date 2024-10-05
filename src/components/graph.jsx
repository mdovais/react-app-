import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Nov 14', gross: 20000, net: 18000, wallet: 16000 },
  { date: 'Nov 16', gross: 50000, net: 45000, wallet: 40000 },
  { date: 'Nov 18', gross: 80000, net: 70000, wallet: 60000 },
];

const Graph = () => {
  return (
    <div className="graph">
      <h4>New Wallet Growth</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="gross" stroke="#82ca9d" />
          <Line type="monotone" dataKey="net" stroke="#8884d8" />
          <Line type="monotone" dataKey="wallet" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
