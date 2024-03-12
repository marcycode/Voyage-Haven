import React from 'react';
import './Navbar.css'; // Assuming you will create a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Voyage Haven</a>
      </div>
      <div className="navbar-links">
        <a>Hotel Chains</a>
        <a>Book a Room</a>
        <a>Sign In</a>
      </div>
    </nav>
  );
}

export default Navbar;
