package org.ehotels.gateway.entity;

import org.ehotels.gateway.repositories.CustomerRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {
    CustomerRepo customerRepo;

    public CustomerController(CustomerRepo customerRepo) {
        this.customerRepo = customerRepo;
    }

    @GetMapping("/customers")
    ResponseEntity<List<Customer>> getAllCustomers() {
        return new ResponseEntity<>(customerRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping("/customers")
    ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        return new ResponseEntity<>(customerRepo.save(customer), HttpStatus.CREATED);
    }

    @DeleteMapping("/customers")
    void deleteCustomer(@RequestParam Integer id) {
        customerRepo.deleteById(id);
    }
}