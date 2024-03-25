import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginAdminPage.css';

function LoginAdminPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission action
    // Check if the credentials are correct
    if (username === 'admin' && password === 'password') {
      // Reset any existing error message
      setError('');
      // Navigate to the Admin Homepage
      navigate('/adminhomepage');
    } else {
      // Set an error message if credentials are invalid
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-admin-page">
      <div className="login-form-container">
        <h2>Admin Login <i className="fa-solid fa-right-to-bracket"></i></h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text" // Username should typically be of type text, not email
              placeholder="Username" // Changed to 'Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="form-group toggle">
            <label>
              <input type="checkbox" /> Administrator
            </label>
          </div>
          <button type="submit" className="login-btn">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default LoginAdminPage;
