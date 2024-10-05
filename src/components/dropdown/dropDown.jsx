import React, { useState } from 'react';
import "./dropDown.css"

const AnalyticsDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Last 30 Days");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='dropdown-box'>
      <h4>Your analytics</h4>
      <select value={selectedOption} onChange={handleChange} className="dropdown">
        <option value="Last 7 Days">Last 7 Days</option>
        <option value="Last 30 Days">Last 30 Days</option>
        <option value="Last 60 Days">Last 60 Days</option>
        <option value="Last 90 Days">Last 90 Days</option>
        <option value="Custom">Custom</option>
      </select>
    </div>
  );
};

export default AnalyticsDropdown;
