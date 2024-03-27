import React, { useState } from 'react';
import './EditHotelBookings.css'; // Change the CSS file name as needed

const initialEmployees = [
    {
      first_name: 'John',
      last_name: 'Doe',
      hotel_p_number: 101,
      ssn: 12346789,
      role: 'Manager',
      address: '123 Main St, Anytown, AN',
    },
    {
      first_name: 'Jane',
      last_name: 'Smith',
      hotel_p_number: 102,
      ssn: 98765321,
      role: 'Receptionist',
      address: '456 Elm St, Othertown, OT',
    },
    {
      first_name: 'Alice',
      last_name: 'Johnson',
      hotel_p_number: 103,
      ssn: 555555555,
      role: 'Housekeeper',
      address: '789 Oak St, Sometown, ST',
    },
    {
      first_name: 'Bob',
      last_name: 'Brown',
      hotel_p_number: 104,
      ssn: 222,
      role: 'Chef',
      address: '321 Pine St, Anothertown, AT',
    }
  ];
  
const EditEmployees = () => {
  const [employees, setEmployees] = useState(initialEmployees);

  const addEmployee = () => {
    const newEmployee = {
      first_name: '',
      last_name: '',  
      hotel_p_number: '',
      ssn: '',
      role: '',
      address: '',
    };
    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (index) => {
    const newEmployees = employees.filter((_, i) => i !== index);
    setEmployees(newEmployees);
  };

  const updateEmployee = (index, column, value) => {
    const updatedEmployees = [...employees];
    if (column === 'hotel_p_number' || column === 'ssn') {
      updatedEmployees[index][column] = value.trim(); // Assuming you want to keep these as strings
    } else {
      updatedEmployees[index][column] = value;
    }
    setEmployees(updatedEmployees);
  };

  const saveEmployees = () => {
    const employeesJson = JSON.stringify(employees);
    console.log(employeesJson);
  };

  return (
    <div className='everything'>
        <h1>Edit Employees</h1>
        <button onClick={addEmployee} id="add"><i className="fa-solid fa-add"></i></button>
        <table className="employeesTable">
            <thead>
                <tr> 
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Hotel P Number</th>
                    <th>SSN</th>
                    <th>Role</th>
                   
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="text"
                                value={employee.first_name}
                                onChange={(e) => updateEmployee(index, 'first_name', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={employee.last_name}
                                onChange={(e) => updateEmployee(index, 'last_name', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                value={employee.hotel_p_number}
                                onChange={(e) => updateEmployee(index, 'hotel_p_number', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                value={employee.ssn}
                                onChange={(e) => updateEmployee(index, 'ssn', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={employee.role}
                                onChange={(e) => updateEmployee(index, 'role', e.target.value)}
                            />
                        </td>
                        
                        <td>
                            <input
                                type="text"
                                id="addressemployees"
                                value={employee.address}
                                onChange={(e) => updateEmployee(index, 'address', e.target.value)}
                            />
                        </td>
                        <td>
                            <button onClick={() => deleteEmployee(index)} id="delete"><i className="fa-solid fa-trash"></i></button>
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
