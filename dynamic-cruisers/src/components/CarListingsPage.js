// src/components/CarListingsPage.js
import React from 'react';
import CarCard from './CarCard'; // Create CarCard component

const CarListingsPage = ({ cars }) => {
  return (
    <div>
      <h2>Our Cars</h2>
      <div className="car-list">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarListingsPage;
