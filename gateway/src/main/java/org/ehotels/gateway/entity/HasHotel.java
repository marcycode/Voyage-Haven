package org.ehotels.gateway.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "has_hotel")
@IdClass(HasHotelId.class)
public class HasHotel {
    @Id
    @Column(name = "chain_p_number")
    private long chainPNumber;

    @Id
    @Column(name = "chain_contact_email")
    private String chainContactEmail;

    @Id
    @Column(name = "hotel_p_number")
    private long hotelPNumber;

    @Id
    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;
}
