import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = ({ selectedSeats, movieId, onBookingSuccess }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!userData.name) newErrors.name = "Ім'я обов'язкове";
    if (!userData.phone) newErrors.phone = "Телефон обов'язковий";
    if (!userData.email) {
      newErrors.email = "Email обов'язковий";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      newErrors.email = "Невірний формат email";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    try {
      saveBooking(movieId, selectedSeats, userData);
      toast.success('Бронювання успішне!');
      onBookingSuccess();
    } catch (error) {
      toast.error('Помилка при бронюванні');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Форма бронювання</h3>
      <div className="form-group">
        <label>Ім'я:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Телефон:</label>
        <input
          type="tel"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div className="selected-seats">
        <p>Вибрані місця: {selectedSeats.join(', ')}</p>
      </div>
      <button type="submit" className="submit-button">
        Підтвердити бронювання
      </button>
    </form>
  );
};

BookingForm.propTypes = {
  selectedSeats: PropTypes.array.isRequired,
  movieId: PropTypes.string.isRequired,
  onBookingSuccess: PropTypes.func.isRequired
};

export default BookingForm;