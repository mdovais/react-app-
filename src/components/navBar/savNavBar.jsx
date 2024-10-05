import React from 'react';
import AdminIcon from '../../icons/adminIcon';
import SavIcon from '../../icons/savIcon';
import "./savNavBar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
     <SavIcon/>
      </div>

      <div className="navbar-icons">
        <div className="notification">
          <i className="bell-icon">🔔</i>
          <span className="notification-dot"></span>
        </div>

        <div className="user-avatar">
         <AdminIcon/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
