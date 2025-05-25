import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import CinemaHall from '../components/CinemaHall';
import BookingForm from '../components/BookingForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = ({ movies }) => {
  const { movieId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingStep, setBookingStep] = useState('select-seats');
  
  const movie = movies.find(m => m.id === parseInt(movieId));

  if (!movie) {
    return <div>Фільм не знайдено</div>;
  }

  const handleSeatsSelection = (seats) => {
    setSelectedSeats(seats);
  };

  const handleBookingSuccess = () => {
    setSelectedSeats([]);
    setBookingStep('select-seats');
  };

  return (
    <div className="booking-page">
      <h1>Бронювання квитків на "{movie.title}"</h1>
      
      {bookingStep === 'select-seats' && (
        <>
          <CinemaHall 
            rows={5} 
            seatsPerRow={10} 
            movieId={movieId}
            onSeatsChange={handleSeatsSelection}
          />
          {selectedSeats.length > 0 && (
            <button 
              onClick={() => setBookingStep('fill-form')}
              className="proceed-button"
            >
              Продовжити бронювання
            </button>
          )}
        </>
      )}
      
      {bookingStep === 'fill-form' && (
        <BookingForm
          selectedSeats={selectedSeats}
          movieId={movieId}
          onBookingSuccess={handleBookingSuccess}
        />
      )}
      
      <ToastContainer />
    </div>
  );
};

Booking.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Booking;