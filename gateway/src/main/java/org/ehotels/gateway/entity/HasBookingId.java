package org.ehotels.gateway.entity;

import jakarta.persistence.Column;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class HasBookingId {
    @Column(name = "booking_id")
    private int bookingId;

    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;

    @Column(name = "hotel_p_number")
    private Long hotelPNumber;

    @Column(name = "room_number")
    private int roomNumber;
}
