package org.ehotels.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hotel_chain")
public class HotelChain {
    public HotelChain(long chainPNumber, String chainContactEmail, int numOfHotels,
                      String postalCode, String region, String city, String streetNumber, String streetName) {
        this.chainPNumber = chainPNumber;
        this.chainContactEmail = chainContactEmail;
        this.numOfHotels = numOfHotels;
        this.postalCode = postalCode;
        this.region = region;
        this.city = city;
        this.streetNumber = streetNumber;
        this.streetName = streetName;
    }

    public HotelChain() {}

    @Id
    @Column(name = "chain_p_number")
    private long chainPNumber;

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
