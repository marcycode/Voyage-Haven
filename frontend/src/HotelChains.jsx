import React from 'react';
import './HotelChains.css';
import hotelImage from './assets/thirdnavbar.jpg'; // Placeholder image for all hotels
import { Link } from 'react-router-dom';

const HotelChains = () => {
    // Array of example hotel data
    const hotels = [
        {
            id: 1,
            name: 'Highway Inns',
            image: hotelImage, 
            rating: '5 stars',
            priceRange: '$100-$200',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...'
        },
        {
            id: 2,
            name: 'Gabby Gabby Exclusive Resort',
            image: hotelImage,
            rating: '5 stars',
            priceRange: '$100-$200',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...'
        },
        // ... more hotels
    ];

    return (
        <div className="hotel-chains">
            {hotels.map((hotel) => (
                <Link key={hotel.id} to={`/hotels/${hotel.id}`}>
                    <div className="hotel-card">
                        <img src={hotel.image} alt={hotel.name} className="hotel-image"/>
                        <div className="hotel-info">
                            <h3>{hotel.name}</h3>
                            <button className="rating-button">{hotel.rating}</button>
                            <div className="price-range">{hotel.priceRange}</div>
                        </div>
                        <div className='hotel-description'>
                            {hotel.description}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default HotelChains;
