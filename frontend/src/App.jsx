import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import LoginHome from './LoginHome'; // Import the component for the login page
import LoginAdminPage from './LoginAdminPage';
import LoginEmployeePage from './LoginHotelEmployeePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<LoginHome />} />
          <Route path = "/admin-login" element={<LoginAdminPage/>} />
          <Route path = "/employee-login" element={<LoginEmployeePage/>} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
