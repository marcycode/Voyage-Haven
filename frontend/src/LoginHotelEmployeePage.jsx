  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  import './LoginAdminPage.css'; 


 
  function LoginEmployeePage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
      e.preventDefault(); // Prevents the default form submit action
      // TODO: This should be replaced with a real authentication check
      if (email === 'test@test.com' && password === 'password' && hotelName === 'VoyageHaven') {
        navigate('/employee-homepage'); // Navigate to EmployeeHomePage upon successful login
      } else {
        setError('Invalid.Please try again.'); // Display error if credentials are invalid
      }
    };

    return (
      <div className="login-admin-page">
        <div className="login-form-container">
          
          <h2>Employee Login <i className="fa-solid fa-right-to-bracket"></i></h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="input"
                placeholder="Hotel Name"
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
              />
            </div>
            <button type="submit" className="login-btn">LOGIN</button>
          </form>
        </div>
      </div>
    );
  }

  export default LoginEmployeePage;
