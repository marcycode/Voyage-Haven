package org.ehotels.gateway.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@IdClass(RoomId.class)
public class Room {
    @Id
    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;

    @Id
    @Column(name = "hotel_p_number")
    private long hotelPNumber;

    @Id
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
