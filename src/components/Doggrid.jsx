// src/components/DogGrid.jsx

import React from 'react';
import DogCard from './Dogcard';
import '../CSS/Doggrid.css'; // Create a separate CSS file for DogGrid

const DogGrid = ({ dogs }) => {
  return (
    <div className="dog-grid">
      {dogs.map((dog) => (
        <DogCard key={dog.chipNumber} dog={dog} />
      ))}
    </div>
  );
};

export default DogGrid;
