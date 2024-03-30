package org.ehotels.gateway.entity;

import org.ehotels.gateway.repositories.EmployeeRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {
    private final EmployeeRepo employeeRepo;

    public EmployeeController(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @GetMapping("/employees")
    ResponseEntity<List<Employee>> getAllEmployees() {
        return new ResponseEntity<>(employeeRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/employees",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        return new ResponseEntity<>(employeeRepo.save(employee), HttpStatus.CREATED);
    }

    @DeleteMapping("employees")
    void deleteEmployee(@RequestParam String ssn) {
        employeeRepo.deleteById(ssn);
    }
}
