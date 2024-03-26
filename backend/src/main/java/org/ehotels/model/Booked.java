package org.ehotels.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Booked {
    @Column(name = "customer_id")
    private int customerId;

    @Column(name = "booking_id")
    private int bookingId;
}
