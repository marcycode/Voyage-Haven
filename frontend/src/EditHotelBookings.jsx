import React, { useState } from 'react';
import './EditHotelBookings.css';



const initialBookings = [
  {
    customerId: 1,
    firstName: 'John',
    lastName: 'Doe',
    bookingId: 100,
    startDate: '2024-04-01',
    endDate: '2024-04-07',
    is_renting: true,
  },
  {
    customerId: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    bookingId: 101,
    startDate: '2024-05-15',
    endDate: '2024-05-20',
    is_renting: true,
  },
  {
    customerId: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    bookingId: 102,
    startDate: '2024-06-10',
    endDate: '2024-06-15',
    is_renting: false,
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
      is_renting: false,
    };
    setBookings([...bookings, newBooking]);
  };

  const deleteBooking = (index) => {
    const newBookings = bookings.filter((_, i) => i !== index);
    setBookings(newBookings);
  };
  
  

  const updateBooking = (index, column, value) => {
    const updatedBookings = [...bookings];
    if (column === 'customerId' || column === 'bookingId') {
      updatedBookings[index][column] = parseInt(value, 10);
    } 
    else if (column === 'is_renting') {
      updatedBookings[index][column] = value === 'true';
    }else {
      updatedBookings[index][column] = value;
    }
    setBookings(updatedBookings);
  };
  
  
  const saveChains = () => {
    const chainsJson = JSON.stringify(bookings);
    console.log(chainsJson);
  
  };


  return (
    <div className='everything'>
        <h1> Edit Room Bookings</h1>
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
            <th>Is_Renting</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
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
                  type="number"
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
                <select
                  value={booking.is_renting.toString()}
                  onChange={(e) => updateBooking(index, 'is_renting', e.target.value)}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </td>
              <td>
                <button onClick={() => deleteBooking(index)} id="delete"><i className="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          
          ))}
        </tbody>
      </table>
      <button onClick={saveChains} id="save">Save</button>
    </div>
  );
};

export default EditHotelBookings;
