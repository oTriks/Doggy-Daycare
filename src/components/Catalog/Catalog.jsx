import React, { useState, useEffect } from 'react';
import Filters from './Filters.jsx';
import DogGrid from './Doggrid.jsx';
import SelectedBreeds from './SelectedBreeds.jsx';
import SearchBar from './SearchBar.jsx'; 
import "../../CSS/catalog/Catalog.css";

const Catalog = () => {
  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSize, setSelectedSize] = useState([]);
  const [ageRange, setAgeRange] = useState([0, 16]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [showFilters, setShowFilters] = useState(false); 

  useEffect(() => {
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

  const removeBreed = (breedToRemove) => {
    setSelectedBreeds(selectedBreeds.filter((breed) => breed !== breedToRemove));
  };

  const isAnyFilterSelected = () => {
    return (
      searchQuery !== '' ||
      selectedSize.length > 0 ||
      ageRange[0] !== 0 ||
      ageRange[1] !== 16 ||
      selectedBreeds.length > 0
    );
  };

  const filteredDogs = dogs.filter((dog) => {
    const matchesSearch = dog.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize =
      selectedSize.length === 0 || selectedSize.includes(String(dog.size));
    const matchesAge = dog.age >= ageRange[0] && dog.age <= ageRange[1];
    const matchesBreed = selectedBreeds.length === 0 || selectedBreeds.includes(dog.breed);
    return matchesSearch && matchesSize && matchesAge && matchesBreed;
  });

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedSize([]);
    setAgeRange([0, 16]);
    setSelectedBreeds([]);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters); // Toggle the filter pop-up
  };

  return (
    <div className="catalog">
  <div className="search-and-filter-container"> 
  <div className="search-bar-position">
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
    <button className="filter-button" onClick={toggleFilters}>
      Filter
    </button>
  </div>

  {isAnyFilterSelected() && (
    <div className="clear-filters">
      <button onClick={handleClearFilters}>Clear All Filters</button>
    </div>
  )}

  {/* Modal for Filters */}
  {showFilters && (
    <div className="filter-modal">
      <div className="filter-modal-content">
        
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
      </div>
    </div>
  )}

      <SelectedBreeds
        selectedBreeds={selectedBreeds}
        removeBreed={removeBreed}
        showAllFilters={showAllFilters}
        setShowAllFilters={setShowAllFilters}
      />

      <DogGrid dogs={filteredDogs} />
    </div>
  );
};

export default Catalog;
