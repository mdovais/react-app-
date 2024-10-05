import React from 'react';
import { FaCog, FaQuestionCircle } from 'react-icons/fa'; // Icons for settings and help
import SamsungIcon from '../../icons/samsung';
import DashboardIcon from '../../icons/dashboardIcon';
import "./sideBar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-section">
    
       <SamsungIcon/>
      </div>
      
      <nav className="navigation">
        <div className="nav-item">
         <DashboardIcon/>
          <span className="nav-text">Dashboard</span>
        </div>
      </nav>

      <div className="footer">
        <div className="footer-item">
          <FaCog className="footer-icon" />
          <span className="footer-text">Settings</span>
        </div>
        <div className="footer-item">
          <FaQuestionCircle className="footer-icon" />
          <span className="footer-text">Help Support</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
