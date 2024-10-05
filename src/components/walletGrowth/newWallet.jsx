import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./newWallet.css"

const data = [
  { name: 'Nov 14', GrossRevenue: 2000, NetRevenue: 1600, CurrentWalletAmount: 3000 },
  { name: 'Nov 16', GrossRevenue: 3000, NetRevenue: 2500, CurrentWalletAmount: 4000 },
  { name: 'Nov 18', GrossRevenue: 4000, NetRevenue: 3200, CurrentWalletAmount: 5000 },
  { name: 'Nov 20', GrossRevenue: 5000, NetRevenue: 4000, CurrentWalletAmount: 6000 },
  { name: 'Nov 22', GrossRevenue: 7000, NetRevenue: 5000, CurrentWalletAmount: 7000 },
  { name: 'Nov 24', GrossRevenue: 8000, NetRevenue: 6000, CurrentWalletAmount: 9000 },
  { name: 'Nov 26', GrossRevenue: 9000, NetRevenue: 6500, CurrentWalletAmount: 11000 },
  { name: 'Dec 10', GrossRevenue: 12000, NetRevenue: 8500, CurrentWalletAmount: 14000 },
];

const NewWalletGrowth = () => {
  const [viewMode, setViewMode] = useState('Cumulative');

  return (
    <div className="new-wallet-growth">
      <div className="header11">
        <h3>New Wallet Growth</h3>
        <div className="toggle-buttons">
          <button
            className={viewMode === 'Cumulative' ? 'active' : ''}
            onClick={() => setViewMode('Cumulative')}
          >
            Cumulative
          </button>
          <button
            className={viewMode === 'Daily' ? 'active' : ''}
            onClick={() => setViewMode('Daily')}
          >
            Daily
          </button>
        </div>
      </div>

<div className='new-wallet-box'>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="GrossRevenue" stroke="#00c0ef" />
          <Line type="monotone" dataKey="NetRevenue" stroke="#f44336" />
          <Line type="monotone" dataKey="CurrentWalletAmount" stroke="#e1bee7" />
        </LineChart>
      </ResponsiveContainer>

      <div className="revenue-details">
        <div className="revenue-item">
          <span>Expected Gross Revenue</span>
          <h4>AED 114,065</h4>
        </div>
        <div className="revenue-item">
          <span>Expected Net Revenue</span>
          <h4>AED 122,564</h4>
        </div>
        <div className="revenue-item">
          <span>Current Wallet Amount</span>
          <h4>AED 85,165</h4>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewWalletGrowth;
