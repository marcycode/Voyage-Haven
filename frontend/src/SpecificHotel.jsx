import React from 'react';
import { useParams } from 'react-router-dom';
import './SpecificHotel.css';

const SpecificHotel = () => {
  let { hotelId } = useParams();
  
  
  
  const hotelData = {
    id: hotelId,
    name: 'Highway Inns',
    
  };

  return (
    <div className="specific-hotel-container">
      <h1>HELLO</h1>
     
     
      <div className="specific-hotel-banner">
        
      </div>
      <div className="specific-hotel-info">
        <h1 className="specific-hotel-name">{hotelData.name}</h1>
       
        <div className="specific-hotel-actions">
          <button className="specific-hotel-button">Reserve a room</button>
          <button className="specific-hotel-button">Rent a Room</button>
        </div>
       
        <p className="specific-hotel-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>
    </div>
  );
};

export default SpecificHotel;
