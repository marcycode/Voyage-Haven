package org.ehotels.model;

import jakarta.persistence.*;

@Entity
@Table(name = "works_at")
public class WorksAt {
    private String ssn;

    @Column(name = "hotel_p_number")
    private long hotelPNumber;

    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;
}
