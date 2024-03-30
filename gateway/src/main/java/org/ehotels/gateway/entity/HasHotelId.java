package org.ehotels.gateway.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder
public class HasHotelId {
    @Column(name = "chain_p_number")
    private long chainPNumber;

    @Column(name = "chain_contact_email")
    private String chainContactEmail;

    @Column(name = "hotel_p_number")
    private long hotelPNumber;

    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;
}
