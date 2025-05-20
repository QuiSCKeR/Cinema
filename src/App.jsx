import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Booking from './components/Booking'; // ІМПОРТ Booking

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/booking/:id" element={<Booking />} /> {/* МАРШРУТ Booking */}
      </Routes>
    </Router>
  );
}

export default App;
