import React from 'react';
import { useParams } from 'react-router-dom';
import './SpecificHotel.css';

const SpecificHotel = () => {
  let { hotelId } = useParams();
  
  // Here you would fetch the hotel data based on the hotelId or pass it via state
  // For this example, I'll just use static data
  const hotelData = {
    id: hotelId,
    name: 'Highway Inns',
    // Add the rest of the hotel details you need to display
  };

  return (
    <div className="specific-hotel-container">
      <h1>HELLO</h1>
     
      {/* Replace src with your dynamic hotel image path */}
      <div className="specific-hotel-banner">
        {/* Image gallery or carousel could go here */}
      </div>
      <div className="specific-hotel-info">
        <h1 className="specific-hotel-name">{hotelData.name}</h1>
        {/* Action buttons */}
        <div className="specific-hotel-actions">
          <button className="specific-hotel-button">Reserve a room</button>
          <button className="specific-hotel-button">Rent a Room</button>
        </div>
        {/* Hotel details */}
        <p className="specific-hotel-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>
    </div>
  );
};

export default SpecificHotel;
