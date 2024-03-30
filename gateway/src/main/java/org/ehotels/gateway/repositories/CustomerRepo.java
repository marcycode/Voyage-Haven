package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {
}
