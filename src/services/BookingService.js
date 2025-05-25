export const saveBooking = (movieId, seats, userData) => {
  const bookings = JSON.parse(localStorage.getItem('bookings') || {};
  const movieBookings = bookings[movieId] || [];
  
  const newBooking = {
    id: Date.now(),
    movieId,
    seats,
    userData,
    bookingDate: new Date().toISOString()
  };
  
  bookings[movieId] = [...movieBookings, newBooking];
  localStorage.setItem('bookings', JSON.stringify(bookings));
  
  return newBooking;
};

export const getBookedSeats = (movieId) => {
  const bookings = JSON.parse(localStorage.getItem('bookings') || {});
  const movieBookings = bookings[movieId] || [];
  
  return movieBookings.flatMap(booking => booking.seats);
};