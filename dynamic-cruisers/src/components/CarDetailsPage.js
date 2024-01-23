// src/components/CarDetailsPage.js
import React from 'react';

const CarDetailsPage = ({ car }) => {
  return (
    <div>
      <h2>{car.name}</h2>
      <img src={`/images/${car.brand}/${car.image}`} alt={car.name} />
      <p>Price: Ksh {car.price.toLocaleString()}</p>
      <p>{car.description}</p>
    </div>
  );
};

export default CarDetailsPage;
