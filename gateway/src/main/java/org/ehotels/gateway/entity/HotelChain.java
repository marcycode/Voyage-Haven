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
@Table(name = "hotel_chain")
@IdClass(HotelChainId.class)
public class HotelChain {
    @Id
    @Column(name = "chain_p_number")
    private Long chainPNumber;

    @Id
    @Column(name = "chain_contact_email")
    private String chainContactEmail;

    @Column(name = "num_of_hotels")
    private int numOfHotels;

    @Column(name = "postal_code")
    private String postalCode;

    @Column
    private String region;

    @Column
    private String city;

    @Column(name = "street_number")
    private String streetNumber;

    @Column(name = "street_name")
    private String streetName;
}
