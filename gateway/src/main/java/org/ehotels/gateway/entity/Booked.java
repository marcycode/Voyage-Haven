package org.ehotels.gateway.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@IdClass(BookedId.class)
@Table(name = "booked")
public class Booked {
    @Id
    @Column(name = "customer_id")
    private int customerId;

    @Id
    @Column(name = "booking_id")
    private int bookingId;
}
