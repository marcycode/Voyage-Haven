package org.ehotels.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Room {
    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;

    @Column(name = "hotel_p_number")
    private long hotelPNumber;

    @Column(name = "room_number")
    private int roomNumber;

    @Column(name = "has_view")
    private boolean hasView;

    @Column(name = "room_capacity")
    private int roomCapacity;

    private String description;

    private float price;

    @Column(name = "has_problems")
    private boolean hasProblems;

    private String amenities;

    @Column(name = "can_be_extended")
    private boolean canBeExtended;
}
