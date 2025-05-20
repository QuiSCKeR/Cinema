import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__logo">Cinema</div>
    <ul className="navbar__list">
      <li className="navbar__item">
        <Link to="/" className="navbar__link">Головна</Link>
      </li>
      <li className="navbar__item">
        <Link to="/booking/1" className="navbar__link">Бронювання</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
