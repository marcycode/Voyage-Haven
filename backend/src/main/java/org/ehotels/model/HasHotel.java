package org.ehotels.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "has_hotel")
public class HasHotel {
    @Column(name = "chain_p_number")
    private long chainPNumber;

    @Column(name = "chain_contact_email")
    private String chainContactEmail;

    @Column(name = "hotel_p_number")
    private long hotelPNumber;

    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;
}
