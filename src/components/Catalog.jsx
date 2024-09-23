// src/components/Catalog.jsx

import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import DogGrid from './Doggrid';
import SelectedBreeds from './SelectedBreeds.jsx';
import '../CSS/Catalog.css'; 

const Catalog = () => {
  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSize, setSelectedSize] = useState([]);
  const [ageRange, setAgeRange] = useState([0, 16]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [showAllFilters, setShowAllFilters] = useState(false);

  useEffect(() => {
    // Fetch the dog data from the API
    fetch('https://api.jsonbin.io/v3/b/66ed5c53ad19ca34f8a985cc')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const dogsArray = data.record;
        const sortedDogs = dogsArray.sort((a, b) => a.name.localeCompare(b.name));
        const breedsArray = [...new Set(sortedDogs.map((dog) => dog.breed))];
        setBreeds(breedsArray);
        setDogs(sortedDogs);
      })
      .catch((error) => console.error('Error fetching dog data:', error));
  }, []);

  // Remove breed from selected filters
  const removeBreed = (breedToRemove) => {
    setSelectedBreeds(selectedBreeds.filter((breed) => breed !== breedToRemove));
  };

  // Check if any filter is selected
  const isAnyFilterSelected = () => {
    return (
      searchQuery !== '' ||
      selectedSize.length > 0 ||
      ageRange[0] !== 0 ||
      ageRange[1] !== 16 ||
      selectedBreeds.length > 0
    );
  };

  // Filter the dogs
  const filteredDogs = dogs.filter((dog) => {
    const matchesSearch = dog.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize =
      selectedSize.length === 0 || selectedSize.includes(String(dog.size));
    const matchesAge = dog.age >= ageRange[0] && dog.age <= ageRange[1];
    const matchesBreed = selectedBreeds.length === 0 || selectedBreeds.includes(dog.breed);
    return matchesSearch && matchesSize && matchesAge && matchesBreed;
  });

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedSize([]);
    setAgeRange([0, 16]);
    setSelectedBreeds([]);
  };

  return (
    <div className="catalog">
      {/* Clear All Filters Button */}
      {isAnyFilterSelected() && (
        <div className="clear-filters">
          <button onClick={handleClearFilters}>Clear All Filters</button>
        </div>
      )}

      {/* Filters */}
      <Filters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        ageRange={ageRange}
        setAgeRange={setAgeRange}
        selectedBreeds={selectedBreeds}
        setSelectedBreeds={setSelectedBreeds}
        breeds={breeds}
      />

      {/* Selected Breeds */}
      <SelectedBreeds
        selectedBreeds={selectedBreeds}
        removeBreed={removeBreed}
        showAllFilters={showAllFilters}
        setShowAllFilters={setShowAllFilters}
      />

      {/* Dog Grid */}
      <DogGrid dogs={filteredDogs} />
    </div>
  );
};

export default Catalog;
