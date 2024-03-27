package org.ehotels.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Hotel {
    @Column(name = "hotel_p_number")
    private long hotelPNumber;

    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;

    @Column(name = "num_of_rooms")
    private int numOfRooms;

    private int rating;

    @Column(name = "postal_code")
    private String postalCode;

    private String region;

    private String city;

    @Column(name = "street_number")
    private String streetNumber;

    @Column(name = "street_name")
    private String streetName;
}

