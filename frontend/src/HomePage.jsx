import React from 'react'
import ImgHero from './assets/homebanner.jpg'
import './Homepage.css'

const HomePage = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${ImgHero})` }}>
      <div className="content">
        <h1>Ensuring your next trip is your <br></br> best trip</h1>
        <p>
          {" "}
          
        </p>
      </div>
    </section>

  )
}

export default HomePage