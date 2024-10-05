import React from "react";
import GreetIcon from "../../icons/greeting";
import "./header.css"

export const Header = ({ userName }) => {
  return (
    <div className="header">
      <div className="greet-icon">
        <GreetIcon />
        <h2>Welcome back {userName}!</h2>
      </div>
      <p>
        Need to create a campaign? <a href="#">Contact our Support Team</a>
      </p>
    </div>
  );
};

export default Header;
