import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./HotelChains.css";
import hotelImage from "./assets/thirdnavbar.jpg"; // Placeholder image for all hotels
import { Link } from "react-router-dom";

const RoomResults = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const startDate  = searchParams.get("startDate");
    const endDate  = searchParams.get("endDate");
    const maxPrice  = searchParams.get("maxPrice");
    const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/filter?startDate=${startDate}&endDate=${endDate}&maxPrice=${maxPrice}`)
      .then((response) => response.json())
      .then((data) => { 
        console.log(data);
        setRooms(data); 
    })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, [startDate, endDate, maxPrice]);

  return (
    <div className="hotel-chains">
      {rooms.map((room, i) => (
        <Link key={i} to={`/hotels/${i}`}>
          <div className="hotel-card">
            <img src={hotelImage} alt="Room Image" className="hotel-image" />
            <div className="hotel-info">
              <h3>{"Room Option #" + (i+1)}</h3>
              {/* <button className="rating-button">{room.rating}</button> */}
              <div className="price-range">{"$" + room.price}</div>
            </div>
            <div className="hotel-description">{room.description}</div>
            <div className="hotel-description">{room.amenities}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RoomResults;
