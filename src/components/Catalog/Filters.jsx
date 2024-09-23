
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
      <SizeFilter selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      <AgeFilter ageRange={ageRange} setAgeRange={setAgeRange} />
      <BreedFilter
        selectedBreeds={selectedBreeds}
        setSelectedBreeds={setSelectedBreeds}
        breeds={breeds}
      />
    </div>
  );
};

export default Filters;
