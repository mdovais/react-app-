import React from 'react';
import './App.css';
import Dashboard from './components/dashBoard/dashboard';
import Navbar from './components/navBar/savNavBar';
import Sidebar from './components/sideBar/sideBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='center-container'>
      <Sidebar/>
      <Dashboard />
      </div>
    </div>
  );
}

export default App;
