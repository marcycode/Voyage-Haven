package org.ehotels.gateway.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "has_booking")
@IdClass(HasBookingId.class)
public class HasBooking {
    @Id
    @Column(name = "booking_id")
    private int bookingId;

    @Id
    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;

    @Id
    @Column(name = "hotel_p_number")
    private Long hotelPNumber;

    @Id
    @Column(name = "room_number")
    private int roomNumber;
}
