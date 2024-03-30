package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.HasBooking;
import org.ehotels.gateway.entity.HasBookingId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HasBookingRepo extends JpaRepository<HasBooking, HasBookingId> {
}
