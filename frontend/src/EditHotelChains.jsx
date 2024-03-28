import React, { useState } from 'react';
import './EditHotelChains.css';

const EditHotelChains = () => {
  const initialChains = [
    {
      chainPNumber: 5653990059, // Stored as integer
      chainContactEmail: 'christopherlee@young.com',
      num_of_hotels: 26,
      postal_code: '80811',
      region: 'Arizona',
      city: 'West Jennifer',
      streetNumber: 714,
      streetName: 'Jessica Well'
    },
    {
      chainPNumber: 13374339000, // Stored as integer
      chainContactEmail: 'kevinmorales@harris.com',
      num_of_hotels: 20,
      postal_code: '82310',
      region: 'Montana',
      city: 'New Ericfort',
      streetNumber: 9221,
      streetName: 'Michael Spurs'
    },
  ];

  const [hotelchains, setHotelChains] = useState(initialChains);

  const addBooking = () => {
    const newHotelChain = {
      chainPNumber: 0, // Default to 0 as an integer
      chainContactEmail: '',
      num_of_hotels: 0,
      postal_code: '',
      region: '',
      city: '',
      streetNumber: 0,
      streetName: '',
    };
    setHotelChains([...hotelchains, newHotelChain]);
  };

  const deleteBooking = (index) => {
    const newBookings = hotelchains.filter((_, i) => i !== index);
    setHotelChains(newBookings);
  };

  const updateBooking = (index, column, value) => {
    const updatedBookings = [...hotelchains];
    // Convert to number for specific fields, including chainPNumber
    if (['chainPNumber', 'num_of_hotels', 'streetNumber'].includes(column)) {
      updatedBookings[index][column] = parseInt(value, 10) || 0;
    } else {
      updatedBookings[index][column] = value;
    }
    setHotelChains(updatedBookings);
  };

  const saveChains = () => {
    const chainsJson = JSON.stringify(hotelchains);
    console.log(chainsJson);
  };

  return (
    <div className='everything'>
      <h1>Edit Hotel Chains</h1>
      <button onClick={addBooking} id="add"><i className="fa-solid fa-add"></i></button>
      <table className="bookingsTable">
        <thead>
          <tr>
            <th>Contact Phone</th>
            <th>Contact Email</th>
            <th>Number of Hotels</th>
            <th>Postal Code</th>
            <th>Region</th>
            <th>City</th>
            <th>Street Number</th>
            <th>Street Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotelchains.map((hotelchain, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  value={hotelchain.chainPNumber}
                  onChange={(e) => updateBooking(index, 'chainPNumber', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="email"
                  value={hotelchain.chainContactEmail}
                  onChange={(e) => updateBooking(index, 'chainContactEmail', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={hotelchain.num_of_hotels}
                  onChange={(e) => updateBooking(index, 'num_of_hotels', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotelchain.postal_code}
                  onChange={(e) => updateBooking(index, 'postal_code', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotelchain.region}
                  onChange={(e) => updateBooking(index, 'region', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotelchain.city}
                  onChange={(e) => updateBooking(index, 'city', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={hotelchain.streetNumber}
                  onChange={(e) => updateBooking(index, 'streetNumber', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotelchain.streetName}
                  onChange={(e) => updateBooking(index, 'streetName', e.target.value)}
                />
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

export default EditHotelChains;
