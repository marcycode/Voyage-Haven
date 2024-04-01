import React, { useState, useEffect } from 'react';
import './EditHotelBookings.css'; 

const EditHotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/hotels') 
      .then(response => response.json())
      .then(data => setHotels(data))
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  const addHotel = () => {
    const newHotel = {
      hotelPNNumber: 0,
      hotelContactEmail: '',
      numOfRooms: 0,
      rating: 0,
      postalCode: '',
      region: '',
      city: '',
      streetNumber: '',
      streetName: ''
    };
    setHotels([...hotels, newHotel]);
  };

  const deleteHotel = (index) => {
    const newHotels = hotels.filter((_, i) => i !== index);
    setHotels(newHotels);
  };

  const updateHotel = (index, key, value) => {
    const updatedHotels = [...hotels];
    updatedHotels[index][key] = value;
    setHotels(updatedHotels);
  };

  const saveHotels = () => {
    Promise.all(hotels.map(hotel => {
      const url = 'http://localhost:8080/hotels'; 
      return fetch(url, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotel),
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
      console.log('All hotels updated');
      // Here you could also trigger a re-fetch of the hotel data, or handle UI updates to show success.
    });
  };
  

  return (
    <div className='everything'>
      <h1>Edit Hotels</h1>
      <button onClick={addHotel} id="add">+</button>
      <table className="employeesTable">
        <thead>
          <tr>
            <th>Hotel Phone Number</th>
            <th>Contact Email</th>
            <th>Number of Rooms</th>
            <th>Rating</th>
            <th>Postal Code</th>
            <th>Region</th>
            <th>City</th>
            <th>Street Number</th>
            <th>Street Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  value={hotel.hotelPNNumber || 0}
                  onChange={(e) => updateHotel(index, 'hotelPNNumber', Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="email"
                  value={hotel.hotelContactEmail || ''}
                  onChange={(e) => updateHotel(index, 'hotelContactEmail', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={hotel.numOfRooms || 0}
                  onChange={(e) => updateHotel(index, 'numOfRooms', Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={hotel.rating || 0}
                  onChange={(e) => updateHotel(index, 'rating', Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotel.postalCode || ''}
                  onChange={(e) => updateHotel(index, 'postalCode', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotel.region || ''}
                  onChange={(e) => updateHotel(index, 'region', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotel.city || ''}
                  onChange={(e) => updateHotel(index, 'city', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotel.streetNumber || ''}
                  onChange={(e) => updateHotel(index, 'streetNumber', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotel.streetName || ''}
                  onChange={(e) => updateHotel(index, 'streetName', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => deleteHotel(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={saveHotels} id="save">Save</button>
    </div>
  );
};

export default EditHotels;
