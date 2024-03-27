import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import LoginHome from './LoginHome';
import LoginAdminPage from './LoginAdminPage';
import LoginEmployeePage from './LoginHotelEmployeePage';
import HotelChains from './HotelChains';
import SpecificHotel from './SpecificHotel';
import RoomBooking from './RoomBooking';
import EmployeeHomePage from './EmployeeHomePage';
import AdminHomePage from './AdminHomePage';
import EditHotelBookings from './EditHotelBookings';
import EditHotelChains from './EditHotelChains';
import EditEmployees from './EditEmployees';


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
          <Route path = "/hotel-chains" element={<HotelChains/>} />
          <Route path="/hotels/:hotelId" element={<SpecificHotel />} />
          <Route path = "/employee-homepage" element={<EmployeeHomePage/>}/>

          <Route path = "/room-booking" element={<RoomBooking/>}/>
          <Route path = "/adminhomepage" element={<AdminHomePage/>}/>
          <Route path = "/edithotelbookings" element={<EditHotelBookings/>}/>
          <Route path = "/edithotelchains" element={<EditHotelChains/>}/>
          <Route path = "/edithotelemployees" element={<EditEmployees/>}/>
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
