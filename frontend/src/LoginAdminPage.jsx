
import React from 'react';
import './LoginAdminPage.css';
function LoginAdminPage() {
  return (
    <div className="login-admin-page">
      <div className="login-form-container">
        
        <h2>Admin Login <i class="fa-solid fa-right-to-bracket"></i></h2>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
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
