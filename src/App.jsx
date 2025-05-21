import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookingStandalone from './pages/BookingStandalone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingStandalone />} /> {/* ← нова сторінка */}
      </Routes>
    </Router>
  );
}

export default App;
