package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.Booking;
import org.ehotels.gateway.entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookingRepo extends JpaRepository<Booking, Integer> {
}
