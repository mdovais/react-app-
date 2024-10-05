import React from 'react';
import "./analytics.css"

const AnalyticsCard = ({ title, value, change, isSelected, onSelect }) => {
  return (
    <div
      className={`analytics-card ${isSelected ? 'selected' : ''}`} 
      onClick={onSelect}
    >
      <h4>{title}</h4>
      <div className="card-value">
        <span>{value}</span>
        <span className={change >= 0 ? "positive" : "negative"}>
          {change >= 0 ? `+${change}` : change}
        </span>
      </div>
    </div>
  );
};

export default AnalyticsCard;
