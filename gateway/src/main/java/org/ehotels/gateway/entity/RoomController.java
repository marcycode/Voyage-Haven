package org.ehotels.gateway.entity;

import org.ehotels.gateway.repositories.RoomRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RoomController {
    private final RoomRepo roomRepo;

    public RoomController(RoomRepo roomRepo) {
        this.roomRepo = roomRepo;
    }

    @GetMapping("/rooms")
    ResponseEntity<List<Room>> getAllRooms() {
        return new ResponseEntity<>(roomRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/rooms",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Room> addRoom(@RequestBody Room room) {
        return new ResponseEntity<>(roomRepo.save(room), HttpStatus.OK);
    }

    @PutMapping(value = "/rooms",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Room> updateHotel(@RequestBody Room room) {
        return new ResponseEntity<>(roomRepo.save(room), HttpStatus.OK);
    }

    @DeleteMapping(value = "/rooms")
    void deleteRoom(@RequestParam Long phone, @RequestParam String email, @RequestParam int roomNum) {
        RoomId roomId = RoomId.builder()
                .hotelPNumber(phone)
                .hotelContactEmail(email)
                .roomNumber(roomNum)
                .build();
        roomRepo.deleteById(roomId);
    }
}
