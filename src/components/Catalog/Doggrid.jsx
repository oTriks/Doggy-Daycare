import React from 'react';
import DogCard from './Dogcard';
import '../../CSS/catalog/Doggrid.css';

const DogGrid = ({ dogs, isFilterActive }) => {
  return (
    <div className={`dog-grid ${isFilterActive ? 'filtered' : ''}`}>
      {dogs.map((dog, index) => (
        <DogCard key={dog.chipNumber} dog={dog} index={index} />
      ))}
    </div>
  );
};

export default DogGrid;
