import React from 'react';
import './RoomBooking.css';

const RoomBooking = () => {
  return (
    <div className="room-booking">
      <h1>Where To?</h1>
      <div className="search-fields">
        <input type="text" placeholder="Where to?" className="search-input" />
        <input type="text" placeholder="Dates" className="search-input" />
        <input type="text" placeholder="Location" className="search-input" />
        <button className="search-button">🔍</button>
      </div>

      <div className="filter-section">
        <h2>Filter By</h2>
        <label className="filter-label">
          <input type="checkbox" className="filter-checkbox" /> hotel chain
        </label>
        <label className="filter-label">
          <input type="checkbox" className="filter-checkbox" /> room capacity
        </label>
        <label className="filter-label">
          <input type="checkbox" className="filter-checkbox" /> hotel type
        </label>
        <div className="range-inputs">
          <input type="number" placeholder="Min" className="range-input" />
          <input type="number" placeholder="Max" className="range-input" />
        </div>
        <div className="range-inputs">
          <input type="number" placeholder="Min" className="range-input" />
          <input type="number" placeholder="Max" className="range-input" />
        </div>
      </div>

      <div className="hotel-results">
        <h2>Hotel Results</h2>
        {/* List of hotels will go here */}
      </div>
    </div>
  );
};

export default RoomBooking;
