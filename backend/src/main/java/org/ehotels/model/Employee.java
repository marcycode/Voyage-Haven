package org.ehotels.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Employee {
    @Column(name = "employee_role")
    private String employeeRole;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String ssn;

    @Column(name = "postal_code")
    private String postalCode;

    private String region;

    private String city;

    @Column(name = "street_number")
    private String streetNumber;

    @Column(name = "street_name")
    private String streetName;

    @Column(name = "apartment_number")
    private String apartmentNumber;
}
