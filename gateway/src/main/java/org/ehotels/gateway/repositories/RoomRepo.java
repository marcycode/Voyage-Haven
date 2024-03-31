package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.Room;
import org.ehotels.gateway.entity.RoomId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface RoomRepo extends JpaRepository <Room, RoomId> {
    @Query(value = "select hotel_contact_email, hotel_p_number, room_number from " +
            "booking full outer join has_booking on booking.booking_id=has_booking.booking_id " +
            "where not (:startDate, :endDate) overlaps (booking.start_date, booking.end_date)",
            nativeQuery = true)
    List<String> filterByDate(@Param("startDate") Date startDate, @Param("endDate") Date endDate);
}
