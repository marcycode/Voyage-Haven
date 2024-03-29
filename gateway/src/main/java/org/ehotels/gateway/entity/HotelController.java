package org.ehotels.gateway.entity;

import org.ehotels.gateway.repositories.HotelRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HotelController {
    private final HotelRepo hotelRepo;

    public HotelController(HotelRepo hotelRepo) {
        this.hotelRepo = hotelRepo;
    }

    @GetMapping("/hotels")
    ResponseEntity<List<Hotel>> allHotels() {
        return new ResponseEntity<>(hotelRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/hotels",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Hotel> addHotel(@RequestBody Hotel hotel) {
        return new ResponseEntity<>(hotelRepo.save(hotel), HttpStatus.CREATED);
    }

    @PutMapping(value = "/hotels",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Hotel> updateHotel(@RequestBody Hotel hotel) {
        return new ResponseEntity<>(hotelRepo.save(hotel), HttpStatus.OK);
    }

    @DeleteMapping(value = "/hotels")
    void deleteHotel(@RequestParam Long phone, @RequestParam String email) {
        HotelId hotelId = HotelId.builder().hotelPNumber(phone).hotelContactEmail(email).build();
        hotelRepo.deleteById(hotelId);
    }
}
