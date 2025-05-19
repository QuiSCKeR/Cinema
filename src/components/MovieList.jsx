// src/components/MovieList.jsx
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { movies } from '../data/movies';
import './MovieList.css';

const MovieList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="movie-list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="movie-list">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
