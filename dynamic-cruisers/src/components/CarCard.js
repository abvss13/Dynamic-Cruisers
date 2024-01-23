// src/components/CarCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={`/images/${car.brand}/${car.image}`} alt={car.name} />
      <h3>{car.name}</h3>
      <p>Price: Ksh {car.price.toLocaleString()}</p>
      <Link to={`/cars/${car.id}`}>View Details</Link>
    </div>
  );
};

export default CarCard;
