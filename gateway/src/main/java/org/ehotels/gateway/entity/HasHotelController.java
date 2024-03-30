package org.ehotels.gateway.entity;

import org.ehotels.gateway.repositories.HasHotelRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HasHotelController {
    HasHotelRepo hasHotelRepo;

    public HasHotelController(HasHotelRepo hasHotelRepo) {
        this.hasHotelRepo = hasHotelRepo;
    }

    @GetMapping("/hashotel")
    ResponseEntity<List<HasHotel>> allHasHotel() {
        return new ResponseEntity<>(hasHotelRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/hashotel",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<HasHotel> createHasHotel(@RequestBody HasHotel hasHotel) {
        return new ResponseEntity<>(hasHotelRepo.save(hasHotel), HttpStatus.CREATED);
    }

}
