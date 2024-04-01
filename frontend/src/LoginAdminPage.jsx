import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginAdminPage.css';

function LoginAdminPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 
    
    if (username === 'admin' && password === 'password') {
      
      setError('');
      
      navigate('/adminhomepage');
    } else {
      
      setError('Invalid credentials.Try again');
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
              type="text" 
              placeholder="Username" 
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
