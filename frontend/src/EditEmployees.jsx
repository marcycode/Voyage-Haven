import React, { useState, useEffect } from 'react';
import './EditHotelBookings.css';

const EditEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const addEmployee = () => {
    const newEmployee = {
      firstName: '',
      lastName: '',
      employeeRole: '',
      ssn: '',
      postalCode: '',
      region: '',
      city: '',
      streetNumber: '',
      streetName: '',
      apartmentNumber: ''
    };
    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (employeeId, index) => {
    const url = `http://localhost:8080/employees?ssn=${employeeId}`; 
  
    fetch(url, {
      method: 'DELETE',
    
    })
    .then(response => {
      if (!response.ok) {
       
        throw new Error(`Network response was not ok, status ${response.status}`);
      }
     
      setEmployees(currentEmployees => currentEmployees.filter((_, i) => i !== index));
    })
    .catch(error => {
      console.error('There was a problem with the deletion operation:', error);
    });
  };
  

  const updateEmployee = (index, key, value) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index][key] = value;
    setEmployees(updatedEmployees);
  };

  const saveEmployees = () => {
    
    Promise.all(employees.map(employee => {
      const url = `http://localhost:8080/employees`; 
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(employee),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
    }))
    .then(() => {
    
      console.log('All employees updated');
     
    });
  };
  

  return (
    <div className='everything'>
      <h1>Edit Employees</h1>
      <button onClick={addEmployee} id="add">+</button>
      <table className="employeesTable">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>SSN</th>
            <th>Postal Code</th>
            <th>Region</th>
            <th>City</th>
            <th>Street Number</th>
            <th>Street Name</th>
            <th>Apartment Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={employee.firstName || ''}
                  onChange={(e) => updateEmployee(index, 'firstName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={employee.lastName || ''}
                  onChange={(e) => updateEmployee(index, 'lastName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={employee.employeeRole || ''}
                  onChange={(e) => updateEmployee(index, 'employeeRole', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="ssn"
                  value={employee.ssn || ''}
                  onChange={(e) => updateEmployee(index, 'ssn', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={employee.postalCode || ''}
                  onChange={(e) => updateEmployee(index, 'postalCode', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="region"
                  value={employee.region || ''}
                  onChange={(e) => updateEmployee(index, 'region', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={employee.city || ''}
                  onChange={(e) => updateEmployee(index, 'city', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={employee.streetNumber || ''}
                  onChange={(e) => updateEmployee(index, 'streetNumber', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="streetName"
                  value={employee.streetName || ''}
                  onChange={(e) => updateEmployee(index, 'streetName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={employee.apartmentNumber || ''}
                  onChange={(e) => updateEmployee(index, 'apartmentNumber', e.target.value)}
                />
              </td>
              <td><button onClick={() => deleteEmployee(employee.ssn, index)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={saveEmployees} id="save">Save</button>
    </div>
  );
};

export default EditEmployees;
