import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie, onBook }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p><strong>Жанр:</strong> {movie.genre}</p>
        <p><strong>Сеанс:</strong> {movie.sessionTime}</p>
        {onBook ? (
          <button className="booking-button" onClick={onBook}>
            Підтвердити бронювання
          </button>
        ) : (
          <Link to={`/booking/${movie.id}`}>
            <button className="booking-button">Забронювати</button>
          </Link>
        )}
      </div>
    </div>
  );
};


export default MovieCard;
