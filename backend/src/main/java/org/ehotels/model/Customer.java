package org.ehotels.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Customer {
    @Column(name = "customer_id")
    private int customerId;

    @Column(name = "type_of_id")
    private CustomerIdType typeOfId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

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
