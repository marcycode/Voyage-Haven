package org.ehotels.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "has_booking")
public class HasBooking {
    @Column(name = "booking_id")
    private int bookingId;

    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;

    @Column(name = "hotel_p_number")
    private int hotelPNumber;

    @Column(name = "room_number")
    private int roomNumber;
}
