import React, { useState } from "react";
import "./RoomBooking.css";
import ImgHero from "./assets/homebanner.jpg";
import { useNavigate } from "react-router";

const RoomBooking = () => {
  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(startDate);
    console.log(endDate);
    
    navigate(`/roomresults?startDate=${startDate}&endDate=${endDate}&maxPrice=${maxPrice}`);
  };

  return (
    <div className="background-image">
      <section
        className="hero"
        style={{ backgroundImage: `url(${ImgHero})` }}
      ></section>
      <div className="room-booking">
        <div className="heading">
          <h1>Book A Room</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="search-inputs">
            <input
              type="date"
              placeholder=" Check In Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              placeholder=" Check Out Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <input
              type="number"
              placeholder="Max Price"
              id="max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />

            <button type="submit" id="searchbutton">
              Search <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomBooking;
