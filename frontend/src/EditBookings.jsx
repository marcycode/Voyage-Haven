import React, { useState, useEffect } from 'react';
import './EditHotelBookings.css'; 

const EditBookings = () => {
  const [bookings, setBookings] = useState([]);

  function convertTimestampToDateString(timestamp) {
    const date = new Date(timestamp);
    return date.toISOString().split('T')[0]; 
  }
  function convertDateStringToTimestamp(dateString) {
    return new Date(dateString).getTime();
  }
  
  

  useEffect(() => {
    fetch('http://localhost:8080/bookings')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(booking => ({
          ...booking,
          startDate: convertTimestampToDateString(booking.startDate),
          endDate: convertTimestampToDateString(booking.endDate)
        }));
        setBookings(formattedData);
      })
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);
  

  const addBooking = () => {
    
    const today = new Date().toISOString().split('T')[0];
    const newBooking = {
      bookingId: null,
      startDate: today,
      endDate: today,
      isRent: false
    };
    setBookings([...bookings, newBooking]);
  };
  
  

  const deleteBooking = (bookingId, index) => {
   
    if (bookingId) {
      const url = `http://localhost:8080/bookings?bookingId=${bookingId}`;
  
      fetch(url, {
        method: 'DELETE',
        headers: {
        
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
      
        setBookings(currentBookings => currentBookings.filter((_, i) => i !== index));
      })
      .catch(error => {
        console.error('There was a problem with the deletion operation:', error);
      });
    } else {
      console.error('Invalid booking ID');
    }
  };
  

  const updateBooking = (index, key, value) => {
    const updatedBookings = [...bookings];
    if (key === 'bookingId') {
      value = parseInt(value, 10) || null;
    } else if (key === 'isRent') {
      value = value === 'true'; 
    } else if (key === 'startDate' || key === 'endDate') {
      value = convertDateStringToTimestamp(value); 
    }
    updatedBookings[index][key] = value;
    setBookings(updatedBookings);
  };
  const saveBookings = () => {
    Promise.all(
      bookings.map(booking => {
        const url = `http://localhost:8080/bookings?booking_id=${booking.bookingId}`; 
        
        const formattedBooking = {
          ...booking,
          startDate: convertDateStringToTimestamp(booking.startDate), 
          endDate: convertDateStringToTimestamp(booking.endDate)
        };
  
        return fetch(url, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedBooking),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok, status ${response.status}`);
          }
          return response.json(); 
        });
      })
    )
    .then(updatedBookings => {
      
      console.log('All bookings updated', updatedBookings);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  };
  

  
  

  return (
    <div className='everything'>
      <h1>Edit Bookings</h1>
      <button onClick={addBooking} id="add">+</button>
      <table className="bookingsTable">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Is Rent?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  value={booking.bookingId || ''}
                  onChange={(e) => updateBooking(index, 'bookingId', e.target.value)}
                  disabled={booking.bookingId !== null} 
                />
              </td>
              <td>
                <input
                  type="date"
                  value={booking.startDate ? convertTimestampToDateString(booking.startDate) : ''}
                  onChange={(e) => updateBooking(index, 'startDate', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={booking.endDate ? convertTimestampToDateString(booking.endDate) : ''}
                  onChange={(e) => updateBooking(index, 'endDate', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={booking.isRent}
                  onChange={(e) => updateBooking(index, 'isRent', e.target.value)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </td>
              <td>
                <button onClick={() => deleteBooking(booking.bookingId, index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={saveBookings} id="save">Save Changes</button>
    </div>
  );
};

export default EditBookings;
