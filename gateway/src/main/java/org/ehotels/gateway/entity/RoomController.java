package org.ehotels.gateway.entity;

import org.ehotels.gateway.repositories.RoomRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;

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

    @GetMapping("/filter")
    ResponseEntity<List<Room>> filterByDate(@RequestParam String startDate, @RequestParam String endDate, @RequestParam Float maxPrice)  throws ParseException {
        List<Room> result = new LinkedList<>();

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);

        Date startFormatted = formatter.parse(startDate);
        Date endFormatted = formatter.parse(endDate);

        List<String> raw = roomRepo.filterByDate(startFormatted, endFormatted);
        for (String line : raw) {
            String[] row = line.split(",");
            if (!row[0].equals("null") &&
                    !row[1].equals("null") &&
                    !row[2].equals("null")) {
                RoomId roomId = RoomId.builder()
                        .hotelContactEmail(row[0])
                        .hotelPNumber(Long.parseLong(row[1]))
                        .roomNumber(Integer.parseInt(row[2]))
                        .build();
                if (roomRepo.findById(roomId).isPresent()) {
                    Room room = roomRepo.findById(roomId).get();
                    if (room.getPrice() <= maxPrice) {
                        result.add(room);
                    }
                }
            }
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
