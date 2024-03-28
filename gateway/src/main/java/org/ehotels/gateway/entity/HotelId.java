package org.ehotels.gateway.entity;

import jakarta.persistence.Column;
import lombok.*;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder
public class HotelId implements Serializable {
    @Column(name = "hotel_p_number")
    private Long hotelPNumber;

    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;
}

