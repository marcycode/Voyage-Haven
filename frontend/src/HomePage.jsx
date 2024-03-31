import React from 'react'
import ImgHero from './assets/homebanner.jpg'
import './Homepage.css'

import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleEmployeeClick = () => {
    navigate('/room-booking');
  };
  return (
    <section className="hero" style={{ backgroundImage: `url(${ImgHero})` }}>
      <div className="content">
        <h1>Ensuring your next trip is your <br></br> best trip</h1>

        <p>
          {" "}
          
        </p>
        <button id="book" onClick={handleEmployeeClick}> Book a Room</button>
      </div>
    </section> 

  )
}

export default HomePage