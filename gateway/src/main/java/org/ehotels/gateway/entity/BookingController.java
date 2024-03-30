package org.ehotels.gateway.entity;

import org.ehotels.gateway.repositories.BookingRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {
    private final BookingRepo bookingRepo;

    public BookingController(BookingRepo bookingRepo) {
        this.bookingRepo = bookingRepo;
    }

    @GetMapping("/bookings")
    ResponseEntity<List<Booking>> getAllBooking() {
        return new ResponseEntity<>(bookingRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping("/bookings")
    ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        return new ResponseEntity<>(bookingRepo.save(booking), HttpStatus.CREATED);
    }

    @PutMapping("/bookings")
    ResponseEntity<Booking> updateBooking(@RequestBody Booking booking) {
        return new ResponseEntity<>(bookingRepo.save(booking), HttpStatus.CREATED);
    }

    @DeleteMapping("/bookings")
    void deleteBooking(@RequestParam Integer bookingId) {
        bookingRepo.deleteById(bookingId);
    }
}
