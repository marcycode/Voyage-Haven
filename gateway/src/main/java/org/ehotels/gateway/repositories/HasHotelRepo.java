package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.HasHotel;
import org.ehotels.gateway.entity.HasHotelId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HasHotelRepo extends JpaRepository<HasHotel, HasHotelId> {
}
