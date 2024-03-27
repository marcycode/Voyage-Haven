package org.ehotels.gateway.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "hotel")
@IdClass(HotelId.class)
public class Hotel {
    @Id
    @Column(name = "hotel_p_number")
    private long hotelPNumber;

    @Id
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
