import React, { useState } from 'react';
import './CinemaHall.css';

const CinemaHall = () => {
  const rows = 5;
  const seatsPerRow = 10;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div className="cinema-hall">
      {[...Array(rows)].map((_, rowIdx) => (
        <div key={rowIdx} className="row">
          {[...Array(seatsPerRow)].map((_, seatIdx) => {
            const seatNumber = `${rowIdx + 1}-${seatIdx + 1}`;
            const isSelected = selectedSeats.includes(seatNumber);
            return (
              <div
                key={seatNumber}
                className={`seat ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleSeat(seatNumber)}
              >
                {seatIdx + 1}
              </div>
            );
          })}
        </div>
      ))}
      <p>Вибрані місця: {selectedSeats.join(', ')}</p>
    </div>
  );
};

export default CinemaHall;
