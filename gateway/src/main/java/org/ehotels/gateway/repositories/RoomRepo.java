package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.Room;
import org.ehotels.gateway.entity.RoomId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepo extends JpaRepository <Room, RoomId> {

}
