import React, { useState, useEffect } from 'react';
import './EditHotelBookings.css'; // Ensure this CSS file contains all the necessary styles

const EditHotelBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/customers') // Adjust the endpoint as needed
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  const addBooking = () => {
    const newBooking = {
      customerId: '',
      typeOfId: '',
      firstName: '',
      lastName: '',
      postalCode: '',
      region: '',
      city: '',
      streetNumber: '',
      streetName: '',
      apartmentNumber: ''
    };
    setBookings([...bookings, newBooking]);
  };

  const deleteBooking = (customerId, index) => {
    const url = `http://localhost:8080/customers?id=${customerId}`; 
  
    fetch(url, {
      method: 'DELETE',
     
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
     
      setBookings(prevBookings => prevBookings.filter((_, i) => i !== index));
    })
    .catch(error => {
      console.error('There was a problem with the deletion operation:', error);
    });
  };
  
  
  

  const updateBooking = (index, key, value) => {
    const updatedBookings = [...bookings];
    updatedBookings[index][key] = key === 'customerId' ? parseInt(value, 10) : value;
    setBookings(updatedBookings);
  };

  const saveBookings = () => {
    Promise.all(bookings.map(booking => {
      const url = `http://localhost:8080/customers`; 
      return fetch(url, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
    }))
    .then(() => {
      console.log('All bookings saved');
     
    });
  };

  return (
    <div className='everything'>
        <h1>Edit Customers</h1>
        <button onClick={addBooking} id="add" className="addButton">+</button>
        <table className="employeesTable">
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Type of ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Postal Code</th>
                    <th>Region</th>
                    <th>City</th>
                    <th>Street Number</th>
                    <th>Street Name</th>
                    <th>Apartment Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((booking, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="number"
                                value={booking.customerId || ''}
                                onChange={(e) => updateBooking(index, 'customerId', e.target.value)}
                            />
                        </td>
                        <td>
                            <select
                                value={booking.typeOfId || ''}
                                onChange={(e) => updateBooking(index, 'typeOfId', e.target.value)}
                            >
                                <option value="">Select ID Type</option>
                                <option value="Driving Licence">Driving License</option>
                                <option value="SIN">SIN</option>
                            </select>
                        </td>
                        <td>
                            <input
                                type="text"
                                value={booking.firstName || ''}
                                onChange={(e) => updateBooking(index, 'firstName', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={booking.lastName || ''}
                                onChange={(e) => updateBooking(index, 'lastName', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={booking.postalCode || ''}
                                onChange={(e) => updateBooking(index, 'postalCode', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={booking.region || ''}
                                onChange={(e) => updateBooking(index, 'region', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={booking.city || ''}
                                onChange={(e) => updateBooking(index, 'city', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={booking.streetNumber || ''}
                                onChange={(e) => updateBooking(index, 'streetNumber', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={booking.streetName || ''}
                                onChange={(e) => updateBooking(index, 'streetName', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={booking.apartmentNumber || ''}
                                onChange={(e) => updateBooking(index, 'apartmentNumber', e.target.value)}
                            />
                        </td>
                        <td>
                        <button onClick={() => deleteBooking(booking.customerId, index)} className="deleteButton">Delete</button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={saveBookings} className="saveButton" id="save">Save Customers</button>
    </div>
  );
};

export default EditHotelBookings;
