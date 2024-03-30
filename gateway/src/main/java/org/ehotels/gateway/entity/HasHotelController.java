package org.ehotels.gateway.entity;

import org.ehotels.gateway.repositories.HasHotelRepo;
import org.ehotels.gateway.repositories.HotelChainRepo;
import org.ehotels.gateway.repositories.HotelRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HasHotelController {
    private final HasHotelRepo hasHotelRepo;
    private final HotelRepo hotelRepo;
    private final HotelChainRepo hotelChainRepo;

    public HasHotelController(HasHotelRepo hasHotelRepo, HotelRepo hotelRepo, HotelChainRepo hotelChainRepo) {
        this.hasHotelRepo = hasHotelRepo;
        this.hotelRepo = hotelRepo;
        this.hotelChainRepo = hotelChainRepo;
    }

    @GetMapping("/hashotel")
    ResponseEntity<List<HasHotel>> allHasHotel() {
        return new ResponseEntity<>(hasHotelRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/hashotel",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<HasHotel> createHasHotel(@RequestBody HasHotel hasHotel) {
        HotelId hotelId = HotelId.builder()
                .hotelPNumber(hasHotel.getHotelPNumber())
                .hotelContactEmail(hasHotel.getHotelContactEmail())
                .build();
        HotelChainId hotelChainId = HotelChainId.builder()
                .chainPNumber(hasHotel.getChainPNumber())
                .chainContactEmail(hasHotel.getChainContactEmail())
                .build();
        if (!hotelRepo.existsById(hotelId) || !hotelChainRepo.existsById(hotelChainId)) {
            return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
        }

        return new ResponseEntity<>(hasHotelRepo.save(hasHotel), HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/hashotel")
    void deleteHasHotel(@RequestParam Long hotelphone,
                        @RequestParam String hotelemail,
                        @RequestParam Long chainphone,
                        @RequestParam String chainemail) {
        HasHotelId hasHotelId = HasHotelId.builder()
                .hotelPNumber(hotelphone)
                .hotelContactEmail(hotelemail)
                .chainPNumber(chainphone)
                .chainContactEmail(chainemail)
                .build();
        hasHotelRepo.deleteById(hasHotelId);
    }

}
