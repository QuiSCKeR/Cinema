import React, { useState } from 'react';
import './CinemaHall.css';

const TOTAL_ROWS = 5;
const TOTAL_COLUMNS = 8;

const CinemaHall = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const bookedSeats = [3, 4, 10];

  const handleSeatClick = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return;
    setSelectedSeats(
      selectedSeats.includes(seatNumber)
        ? selectedSeats.filter(seat => seat !== seatNumber)
        : [...selectedSeats, seatNumber]
    );
  };

  const renderSeats = () => {
    const seats = [];
    for (let row = 0; row < TOTAL_ROWS; row++) {
      for (let col = 0; col < TOTAL_COLUMNS; col++) {
        const seatNumber = row * TOTAL_COLUMNS + col + 1;
        const isBooked = bookedSeats.includes(seatNumber);
        const isSelected = selectedSeats.includes(seatNumber);
        seats.push(
          <div
            key={seatNumber}
            className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : 'available'}`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
    }
    return seats;
  };

  return (
    <div>
      <h2>Оберіть місця</h2>
      <div className="cinema-hall">
        {renderSeats()}
      </div>
      <div className="selected-info">
        <h3>Вибрані місця: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Немає'}</h3>
      </div>
    </div>
  );
};

export default CinemaHall;
