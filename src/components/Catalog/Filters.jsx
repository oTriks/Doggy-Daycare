import React from 'react';
import SizeFilter from './SizeFilter';
import AgeFilter from './AgeFilter';
import BreedFilter from './BreedFilter';
import '../../CSS/catalog/Filters.css'; 

const Filters = ({
  selectedSize,
  setSelectedSize,
  ageRange,
  setAgeRange,
  selectedBreeds,
  setSelectedBreeds,
  breeds,
}) => {
  return (
    <div className="filter-section">
      <div className="filter-item">
        <SizeFilter selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      </div>
      <div className="filter-item">
        <AgeFilter ageRange={ageRange} setAgeRange={setAgeRange} />
      </div>
      <div className="filter-item">
        <BreedFilter
          selectedBreeds={selectedBreeds}
          setSelectedBreeds={setSelectedBreeds}
          breeds={breeds}
        />
      </div>
    </div>
  );
};

export default Filters;
