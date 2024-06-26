import React from 'react';
import './LoginHome.css';
import { useNavigate } from 'react-router';

function LoginHome() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin-login');
  };

  const handleEmployeeClick = () => {
    navigate('/employee-login');
  };

  return (
    <div className="login-home">
      <div className="login-home-content">
        <div className="login-option" id="employee" onClick={handleEmployeeClick}>
          <div className="icon-container">
            <span className="icon"><i className="fa-regular fa-user"></i></span>
          </div>
          <h2>Hotel Employee</h2>
        </div>
        <div className="login-option" id="admin" onClick={handleAdminClick}>
          <div className="icon-container">
            <span className="icon"><i className="fa-solid fa-user-tie"></i></span>
          </div>
          <h2>Administrator</h2>
        </div>
      </div>
    </div>
  );
}

export default LoginHome;
