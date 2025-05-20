import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${movie.id}`);
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p><strong>Жанр:</strong> {movie.genre}</p>
        <p><strong>Сеанс:</strong> {movie.time}</p>
        <button onClick={handleBooking}>Забронювати</button>
      </div>
    </div>
  );
};

export default MovieCard;
