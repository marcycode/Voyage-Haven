import React, { useState, useEffect } from 'react';
import './EditHotelBookings.css'; // Assuming we use the same styling

const EditRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/rooms')
      .then(response => response.json())
      .then(data => setRooms(data))
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  const addRoom = () => {
    const newRoom = {
      hotelContactEmail: '',
      hotelPNumber: 0,
      roomNumber: 0,
      hasView: false,
      roomCapacity: 0,
      description: '',
      price: 0.0,
      hasProblems: false,
      amenities: '',
      canBeExtended: false
    };
    setRooms([...rooms, newRoom]);
  };

  const deleteRoom = (email,pNumber, rNumber,index) => {
    const url = ` http://localhost:8080/rooms?roomNum=${rNumber}&email=${email}&phone=${pNumber}`;

    fetch(url, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      setRooms(currentRooms => currentRooms.filter((_, i) => i !== index));
    })
    .catch(error => {
      console.error('There was a problem with the deletion operation:', error);
    });
  };

  const updateRoom = (index, key, value) => {
    const updatedRooms = [...rooms];
    const newValue = (key === 'hotelPNumber' || key === 'roomNumber' || key === 'roomCapacity' || key === 'price')
      ? Number(value) : (key === 'hasView' || key === 'hasProblems' || key === 'canBeExtended')
      ? value === 'true' : value;
    updatedRooms[index][key] = newValue;
    setRooms(updatedRooms);
  };

  const saveRooms = () => {
    Promise.all(rooms.map(room => {
      const url = 'http://localhost:8080/rooms'; // Endpoint for updating rooms
      return fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(room)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      });
    }))
    .then(() => {
      console.log('All rooms updated');
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  };

  return (
    <div className='everything'>
      <h1>Edit Rooms</h1>
      <button onClick={addRoom} id="add">+</button>
      <table className="employeesTable ">
        <thead>
          <tr>
            <th>Contact Email</th>
            <th>Phone Number</th>
            <th>Room Number</th>
            <th>Has View</th>
            <th>Room Capacity</th>
            <th>Description</th>
            <th>Price</th>
            <th>Has Problems</th>
            <th>Amenities</th>
            <th>Can Be Extended</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>
                <input
                  type="email"
                  value={room.hotelContactEmail || ''}
                  onChange={(e) => updateRoom(index, 'hotelContactEmail', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={room.hotelPNumber || 0}
                  onChange={(e) => updateRoom(index, 'hotelPNumber', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={room.roomNumber || 0}
                  onChange={(e) => updateRoom(index, 'roomNumber', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={room.hasView}
                  onChange={(e) => updateRoom(index, 'hasView', e.target.value)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </td>
              <td>
                <input
                  type="number"
                  value={room.roomCapacity || 0}
                  onChange={(e) => updateRoom(index, 'roomCapacity', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={room.description || ''}
                  onChange={(e) => updateRoom(index, 'description', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  value={room.price || 0.0}
                  onChange={(e) => updateRoom(index, 'price', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={room.hasProblems}
                  onChange={(e) => updateRoom(index, 'hasProblems', e.target.value)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={room.amenities || ''}
                  onChange={(e) => updateRoom(index, 'amenities', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={room.canBeExtended}
                  onChange={(e) => updateRoom(index, 'canBeExtended', e.target.value)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </td>
              <td>
                <button onClick={() => deleteRoom(room.hotelContactEmail, room.hotelPNumber, room.roomNumber, index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={saveRooms} id="save">Save Rooms</button>
    </div>
  );
};

export default EditRooms;
