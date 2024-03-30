package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee, String> {
}
