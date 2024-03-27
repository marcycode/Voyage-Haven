import React from 'react';
import './LoginHome.css';
import { useNavigate } from 'react-router-dom';

function AdminHomePage() {
  const navigate = useNavigate();

  const handleEditHotelChains = () => {
    navigate('/edithotelchains');
  };

  const handleEditEmployee = () => {
    navigate('/edithotelemployees');
  };

  return (
    <div className="login-home">
      <div className="login-home-content">
        <div className="login-option" id="employee" onClick={handleEditHotelChains}>
          <div className="icon-container">
            <span className="icon"><i className="fa-regular fa-user"></i></span>
          </div>
          <h2>Edit Hotel Chains</h2>
        </div>
        <div className="login-option" id="admin" onClick={handleEditEmployee}>
          <div className="icon-container">
            <span className="icon"><i className="fa-solid fa-user-tie"></i></span>
          </div>
          <h2>Edit Employees</h2>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
