// src/pages/BookingStandalone.jsx
import React, { useState } from 'react';
import CinemaHall from '../components/CinemaHall';

const movie = {
  title: 'Інтерстеллар',
  description: 'Космічна подорож задля порятунку людства.',
  genre: 'Наукова фантастика',
  poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
  sessionTime: '2025-05-24 19:00',
};

export default function BookingStandalone() {
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    setIsBooked(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Бронювання квитків</h1>
      <div className="flex gap-6 bg-white shadow-md rounded-xl p-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-48 h-auto rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold">{movie.title}</h2>
          <p className="text-gray-600">{movie.description}</p>
          <p><strong>Жанр:</strong> {movie.genre}</p>
          <p><strong>Сеанс:</strong> {movie.sessionTime}</p>
          {!isBooked ? (
            <>
              <CinemaHall />
              <button
                onClick={handleBooking}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Підтвердити бронювання
              </button>
            </>
          ) : (
            <div className="mt-4 text-green-700 font-semibold">
              Бронювання підтверджено! Дякуємо.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
