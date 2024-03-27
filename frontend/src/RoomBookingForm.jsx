import React, { useState } from 'react';
import './RoomBookingForm.css';

const RoomBookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    checkInDate: '',
    checkOutDate: '',
    bookingType: 'Booking',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert bookingType to is_rent boolean
    const is_rent = formData.bookingType === 'Renting';
    const dataToSend = {
      ...formData,
      is_rent, // Adds the is_rent boolean to the data object
      bookingType: undefined, // Remove bookingType from the object
    };
    delete dataToSend.bookingType; // Ensures bookingType is removed before sending
    console.log(JSON.stringify(dataToSend)); // For demonstration, replace this with your actual send logic
    // Implement your logic to send dataToSend as a JSON object
  };

  return (
    <form className="room-booking-form" onSubmit={handleSubmit}>
      <h2>Room Booking</h2>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        placeholder="Email Address"
        required
      />
      <label htmlFor="checkInDate">Check-in Date</label>
      <input
        type="date"
        id="checkInDate"
        name="checkInDate"
        value={formData.checkInDate}
        onChange={handleChange}
        required
      />
      <label htmlFor="checkOutDate">Check-out Date</label>
      <input
        type="date"
        id="checkOutDate"
        name="checkOutDate"
        value={formData.checkOutDate}
        onChange={handleChange}
        required
      />
      <select name="bookingType" value={formData.bookingType} onChange={handleChange}>
        <option value="Booking">Booking</option>
        <option value="Renting">Renting</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RoomBookingForm;
