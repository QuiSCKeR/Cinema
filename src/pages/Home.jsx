// src/pages/Home.jsx
import React from 'react';
import MovieList from '../components/MovieList';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movies</h1>
      <MovieList />
    </div>
  );
};

export default Home;
