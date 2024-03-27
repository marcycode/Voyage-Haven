import React, { useState } from 'react';
import './EditHotelChains.css';

const initialChains = [
    {
      hotelName: 'Hotel Sunrise',
      hotel_p_number: 1001,
      chain_p_number: 5001,
      contact_email: 'contact@sunrise.com',
      num_of_hotels: 10,
      city: 'Sun City',
      street: 'Sunset Boulevard',
      postal_code: '12345',
    },
    {
      hotelName: 'Mountain View Retreat',
      hotel_p_number: 1002,
      chain_p_number: 5002,
      contact_email: 'info@mountainview.com',
      num_of_hotels: 5,
      city: 'Highland',
      street: 'Peak Street',
      postal_code: '54321',
    },
  ];
  

const EditHotelChains = () => {
  const [hotelchains, setHotelBookings] = useState(initialChains);

  const addBooking = () => {
    const newHotelChain = {
      hotelName: '',
      hotel_p_number: '',
      chain_p_number: '',
      contact_email: '',
      num_of_hotels: '',
      city: '',
      street: '',
      postal_code: '',
      
    };
    setHotelBookings([...hotelchains, newHotelChain]);
  };

  const deleteBooking = (index) => {
    const newBookings = hotelchains.filter((_, i) => i !== index);
    setHotelBookings(newBookings);
  };

  const updateBooking = (index, column, value) => {
    const updatedBookings = [...hotelchains];
    if (column === 'hotel_p_number' || column === 'chain_p_number') {
      updatedBookings[index][column] = parseInt(value, 10);
    } else {
      updatedBookings[index][column] = value;
    }
    setHotelBookings(updatedBookings);
  };
  
  
  const saveChains = () => {
    const chainsJson = JSON.stringify(hotelchains);
    console.log(chainsJson);
  
  };


  return (
    <div className='everything'>
        <h1> Edit Hotel Chains</h1>
      <button onClick={addBooking} id="add"><i className="fa-solid fa-add"></i></button>
      <table className="bookingsTable">
        <thead>
          <tr>
            <th>Hotel Chain Name</th>
            <th>hotel_p_number</th>
            <th>chain_p_number</th>
            <th>Contact Email</th>
            <th>Number of Hotels</th>
            <th>City</th>
            <th>Street</th>
            <th>Postal Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotelchains.map((hotelchain, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  id="hotelchain"
                  value={hotelchain.hotelName}
                  onChange={(e) => updateBooking(index, 'Hotel Chain name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={hotelchain.hotel_p_number}
                  onChange={(e) => updateBooking(index, 'hotel_p_number', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={hotelchain.chain_p_number}
                  onChange={(e) => updateBooking(index, 'chain_p_number', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="email"
                  value={hotelchain.contact_email}
                  onChange={(e) => updateBooking(index, 'Contact Email', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={hotelchain.num_of_hotels}
                  onChange={(e) => updateBooking(index, 'Number of Hotels', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotelchain.city}
                  onChange={(e) => updateBooking(index, 'City', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotelchain.street}
                  onChange={(e) => updateBooking(index, 'Street', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hotelchain.postal_code}
                  onChange={(e) => updateBooking(index, 'Postal Code', e.target.value)}
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
