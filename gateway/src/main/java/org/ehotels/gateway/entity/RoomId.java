package org.ehotels.gateway.entity;

import jakarta.persistence.Column;
import lombok.*;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
public class RoomId implements Serializable {
    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;

    @Column(name = "hotel_p_number")
    private long hotelPNumber;

    @Column(name = "room_number")
    private int roomNumber;
}
