import React from 'react';
import './LoginHome.css';
import { useNavigate } from 'react-router-dom';

function EmployeeHomePage() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/edithotelbookings');
  };

  const handleEmployeeClick = () => {
    navigate('/edithotelbookings');
  };

  return (
    <div className="login-home">
      <div className="login-home-content">
        <div className="login-option" id="employee" onClick={handleEmployeeClick}>
          <div className="icon-container">
            <span className="icon"><i className="fa-regular fa-user"></i></span>
          </div>
          <h2>Manage Room Bookings</h2>
        </div>
        <div className="login-option" id="availablerooms" onClick={handleEmployeeClick}>
          <div className="icon-container">
            <span className="icon"><i className="fa-regular fa-user"></i></span>
          </div>
          <h2>View Available Rooms</h2>
        </div>
        <div className="login-option" id="admin" onClick={handleAdminClick}>
          <div className="icon-container">
            <span className="icon"><i className="fa-solid fa-user-tie"></i></span>
          </div>
          <h2>My Profile</h2>
        </div>
       
      </div>
    </div>
  );
}

export default EmployeeHomePage;
