import React, { useEffect, useState } from 'react';
import './HotelChains.css';
import hotelImage from './assets/thirdnavbar.jpg'; // Placeholder image for all hotels
import { Link } from 'react-router-dom';

const HotelChains = () => {

    const [hotelChains, setHotelChains] = useState([]);

    useEffect(() => {
        // TODO: Make the host a global variable? 
        fetch(`http://localhost:8080/chains`).then((res) => {
            return res.json();
        }).then((data) => {
            console.table(data);
            setHotelChains(data);
        });
    }, [])

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
            {hotelChains.map((hotelChain, i) => (
                <Link key={i} to={`/hotels/${i}`}>
                    <div className="hotel-card">
                        <img src={hotelImage} alt={hotelImage} className="hotel-image"/>
                        <div className="hotel-info">
                            <h3>{"Hotel Chain " + i}</h3>
                            <button className="rating-button">{"Number of Hotels: " + hotelChain.numOfHotels}</button>
                            {/* <div className="price-range">{hotelChain.chainContactEmail}</div> */}
                        </div>
                        <div className='hotelChain-description'>
                            {hotelChain.streetNumber + " " + hotelChain.streetName + ", " + hotelChain.city}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default HotelChains;
