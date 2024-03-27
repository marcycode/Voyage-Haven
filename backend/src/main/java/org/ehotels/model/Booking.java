package org.ehotels.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import java.sql.Date;

@Entity
public class Booking {
    @Column(name = "booking_id")
    private int bookingId;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "is_rent")
    private boolean isRent;
}
