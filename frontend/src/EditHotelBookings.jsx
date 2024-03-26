import React, { useState } from 'react';
import './EditHotelBookings.css';

const initialBookings = [
  {
    customerId: '001',
    firstName: 'John',
    lastName: 'Doe',
    bookingId: 'B001',
    startDate: '2024-04-01',
    endDate: '2024-04-07',
  },
  {
    customerId: '002',
    firstName: 'Jane',
    lastName: 'Smith',
    bookingId: 'B002',
    startDate: '2024-05-15',
    endDate: '2024-05-20',
  },
  {
    customerId: '003',
    firstName: 'Alice',
    lastName: 'Johnson',
    bookingId: 'B003',
    startDate: '2024-06-10',
    endDate: '2024-06-15',
  },
];

const EditHotelBookings = () => {
  const [bookings, setBookings] = useState(initialBookings);

  const addBooking = () => {
    const newBooking = {
      customerId: '',
      firstName: '',
      lastName: '',
      bookingId: '',
      startDate: '',
      endDate: '',
    };
    setBookings([...bookings, newBooking]);
  };

  const deleteBooking = (index) => {
    const newBookings = bookings.filter((_, i) => i !== index);
    setBookings(newBookings);
  };

  const updateBooking = (index, column, value) => {
    const updatedBookings = [...bookings];
    updatedBookings[index][column] = value;
    setBookings(updatedBookings);
  };

  return (
    <div className='everything'>
        <h1> Edit Hotel Bookings</h1>
      <button onClick={addBooking} id="add"><i className="fa-solid fa-add"></i></button>
      <table className="bookingsTable">
        <thead>
          <tr>
            <th>CustomerID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>BookingID</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={booking.customerId}
                  onChange={(e) => updateBooking(index, 'customerId', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={booking.firstName}
                  onChange={(e) => updateBooking(index, 'firstName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={booking.lastName}
                  onChange={(e) => updateBooking(index, 'lastName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={booking.bookingId}
                  onChange={(e) => updateBooking(index, 'bookingId', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={booking.startDate}
                  onChange={(e) => updateBooking(index, 'startDate', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={booking.endDate}
                  onChange={(e) => updateBooking(index, 'endDate', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => deleteBooking(index)} id="delete"><i className="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditHotelBookings;