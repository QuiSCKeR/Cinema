// src/components/MovieCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${movie.id}`);
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p>{movie.description}</p>
        <p><strong>Session Time:</strong> {movie.time}</p>
        <button className="btn-book" onClick={handleBooking}>Book</button>
      </div>
    </div>
  );
};

export default MovieCard;
