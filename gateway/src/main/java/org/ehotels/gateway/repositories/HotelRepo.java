package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.Hotel;
import org.ehotels.gateway.entity.HotelId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepo extends JpaRepository<Hotel, HotelId> {
}
