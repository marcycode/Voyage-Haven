import React from 'react';
import './LoginHome.css'; // Make sure to create a CSS file with this name

function LoginHome() {
  return (
    <div className="login-home">
      <div className="login-home-content">
        <div className="login-option" id="employee">
          <div className="icon-container">
            <span className="icon"><i class="fa-regular fa-user"></i></span>
          </div>
          <h2>Hotel Employee</h2>
        </div>
        <div className="login-option" id="admin">
          <div className="icon-container">
            <span className="icon"><i class="fa-solid fa-user-tie"></i></span>
          </div>
          <h2>Administrator</h2>
        </div>
      </div>
    </div>
  );
}

export default LoginHome;
