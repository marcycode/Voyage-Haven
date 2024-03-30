package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.Booked;
import org.ehotels.gateway.entity.BookedId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookedRepo extends JpaRepository<Booked, BookedId> {
}
