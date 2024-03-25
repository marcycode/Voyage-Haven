import React, { useState } from 'react';
import './RoomBooking.css';

const RoomBooking = () => {
  // State for each input field
  const [whereTo, setWhereTo] = useState('');
  const [dates, setDates] = useState('');
  const [location, setLocation] = useState('');
  const [hotelChain, setHotelChain] = useState('');
  const [roomCapacity, setRoomCapacity] = useState('');
  const [hotelType, setHotelType] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState({ min: '', max: '' });
  const [price, setPrice] = useState({ min: '', max: '' });

  // Example data for the dropdowns
  const hotelChains = ['Hilton', 'Marriott', 'Hyatt', 'InterContinental', 'Accor'];
  const hotelTypes = ['Budget', 'Boutique', 'Luxury', 'Resort', 'Extended Stay'];

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the search form
    // Construct a query and make an API call to fetch the results
  };

  return (
    <div className="room-booking">
      <h1>Where To?</h1>
      <form onSubmit={handleSubmit}>
        <div className="search-inputs">
          <input
            type="text"
            placeholder="Where to?"
            value={whereTo}
            onChange={(e) => setWhereTo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Dates"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit"><i className="fa fa-search"></i></button>
        </div>

        <div className="filters">
          <h2>Filter By</h2>
          <select
            value={hotelChain}
            onChange={(e) => setHotelChain(e.target.value)}
          >
            <option value="">Hotel Chain</option>
            {hotelChains.map((chain) => (
              <option key={chain} value={chain}>{chain}</option>
            ))}
          </select>
          <select
            value={hotelType}
            onChange={(e) => setHotelType(e.target.value)}
          >
            <option value="">Hotel Type</option>
            {hotelTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Room Capacity"
            value={roomCapacity}
            onChange={(e) => setRoomCapacity(e.target.value)}
          />
          <div>
            <input
              type="number"
              placeholder="Min"
              value={numberOfRooms.min}
              onChange={(e) => setNumberOfRooms({ ...numberOfRooms, min: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max"
              value={numberOfRooms.max}
              onChange={(e) => setNumberOfRooms({ ...numberOfRooms, max: e.target.value })}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Min Price"
              value={price.min}
              onChange={(e) => setPrice({ ...price, min: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max Price"
              value={price.max}
              onChange={(e) => setPrice({ ...price, max: e.target.value })}
            />
          </div>
        </div>
      </form>
      <div className="results">
        {/* render the search results here */}
        {/*<h2>Hotel Results</h2>*/}
      </div>
    </div>
  );
};

export default RoomBooking;