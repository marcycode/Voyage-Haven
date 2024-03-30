package org.ehotels.gateway.entity;

import org.ehotels.gateway.repositories.CustomerRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

@RestController
public class CustomerController {
    private final CustomerRepo customerRepo;

    public CustomerController(CustomerRepo customerRepo) {
        this.customerRepo = customerRepo;
    }

    @GetMapping("/customers")
    ResponseEntity<List<Customer>> getAllCustomers() {
        return new ResponseEntity<>(customerRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping("/customers")
    ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        Iterator<CustomerIdType> typeIterator = Arrays.stream(CustomerIdType.values()).iterator();

        if (customer.getTypeOfId() != null) {
            while (typeIterator.hasNext()) {
                if (typeIterator.next().getStrMapping().equals(customer.getTypeOfId())) {
                    return new ResponseEntity<>(customerRepo.save(customer), HttpStatus.CREATED);
                }
            }
            return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
        } else {
            return new ResponseEntity<>(customerRepo.save(customer), HttpStatus.CREATED);
        }
    }

    @PutMapping("/customers")
    ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
        return createCustomer(customer);
    }

    @DeleteMapping("/customers")
    void deleteCustomer(@RequestParam Integer id) {
        customerRepo.deleteById(id);
    }
}
