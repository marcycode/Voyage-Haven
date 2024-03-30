package org.ehotels.gateway.entity;

import jakarta.persistence.Column;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder
public class BookedId {
    @Column(name = "customer_id")
    private int customerId;

    @Column(name = "booking_id")
    private int bookingId;
}
