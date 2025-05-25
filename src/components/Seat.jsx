import React from 'react';
import PropTypes from 'prop-types';

const Seat = ({ seatId, isSelected, onClick }) => {
  return (
    <div
      className={`seat ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {seatId}
    </div>
  );
};

Seat.propTypes = {
  seatId: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Seat;