package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking, Integer> {
}
