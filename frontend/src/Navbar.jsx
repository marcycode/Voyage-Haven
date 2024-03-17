import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation(); // Hook to get location object
  const homePage = location.pathname === '/'; // Check if it's the homepage

  let navbarClasses = 'navbar';
  if (!homePage) {
    navbarClasses += ' navbar-other'; // Add class for other pages
  }

  return (
    <nav className={navbarClasses}>
      <div className="navbar-logo">
        <Link to="/">Voyage Haven</Link>
      </div>
      <div className="navbar-links">
        <Link to="/hotel-chains">Hotel Chains</Link>
        <Link to="/book-room">Book a Room</Link>
        <Link to="/sign-in">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
