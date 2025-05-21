import React from 'react';
import MovieList from '../components/MovieList';
import movies from '../data/movies';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
  );
};
<Link to="/booking">
  <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md">
    Перейти до сторінки бронювання
  </button>
</Link>
export default Home;
