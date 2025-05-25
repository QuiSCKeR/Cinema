import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Seat from './Seat';
import { getBookedSeats } from '../services/BookingService';

const CinemaHall = ({ rows, seatsPerRow, movieId }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const booked = getBookedSeats(movieId);
    setBookedSeats(booked);
  }, [movieId]);

  const handleSeatClick = (seatId) => {
    if (bookedSeats.includes(seatId)) return;
    
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  return (
    <div className="cinema-hall">
      <h2>Екран</h2>
      <div className="screen"></div>
      <div className="seats-grid">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
              const seatId = `${rowIndex + 1}-${seatIndex + 1}`;
              return (
                <Seat
                  key={seatId}
                  seatId={seatId}
                  isSelected={selectedSeats.includes(seatId)}
                  isBooked={bookedSeats.includes(seatId)}
                  onClick={() => handleSeatClick(seatId)}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="selected-seats">
        <h3>Вибрані місця: {selectedSeats.join(', ')}</h3>
      </div>
    </div>
  );
};

CinemaHall.propTypes = {
  rows: PropTypes.number.isRequired,
  seatsPerRow: PropTypes.number.isRequired,
  movieId: PropTypes.string.isRequired
};

export default CinemaHall;