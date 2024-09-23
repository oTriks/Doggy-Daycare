
import React from 'react';
import DogCard from './Dogcard';
import '../../CSS/catalog/Doggrid.css';

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
