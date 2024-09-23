// src/components/Catalog.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactSlider from 'react-slider';
import '../CSS/Catalog.css';

const Catalog = () => {
  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSize, setSelectedSize] = useState([]); // State for size filter
  const [ageRange, setAgeRange] = useState([0, 16]); // State for dual age range filter
  const [selectedBreeds, setSelectedBreeds] = useState([]); // State for multiple breed filters
  const [breeds, setBreeds] = useState([]); // State to hold all breeds
  const [breedDropdownOpen, setBreedDropdownOpen] = useState(false); // State for breed dropdown open/closed
  const [showAllFilters, setShowAllFilters] = useState(false); // State to show all selected filters
  const breedDropdownRef = useRef(null);

  useEffect(() => {
    // Fetch the dog data from the API
    fetch('https://api.jsonbin.io/v3/b/66ed5c53ad19ca34f8a985cc')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Access the array of dogs under 'record'
        const dogsArray = data.record;

        // Sort the dogs by name alphabetically
        const sortedDogs = dogsArray.sort((a, b) => a.name.localeCompare(b.name));

        // Extract breeds for the dropdown filter
        const breedsArray = [...new Set(sortedDogs.map(dog => dog.breed))];

        setBreeds(breedsArray); // Set the list of unique breeds
        setDogs(sortedDogs);
      })
      .catch(error => console.error('Error fetching dog data:', error));
  }, []);

  // Handler for search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle breed selection/deselection
  const handleBreedToggle = (breed) => {
    if (selectedBreeds.includes(breed)) {
      // Deselect breed
      setSelectedBreeds(selectedBreeds.filter(b => b !== breed));
    } else {
      // Select breed
      setSelectedBreeds([...selectedBreeds, breed]);
    }
  };

  // Remove breed from selected filters (from chips)
  const removeBreed = (breedToRemove) => {
    setSelectedBreeds(selectedBreeds.filter(breed => breed !== breedToRemove));
  };

  // Close breed dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (breedDropdownRef.current && !breedDropdownRef.current.contains(event.target)) {
        setBreedDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [breedDropdownRef]);

  // Function to check if any filter is selected
  const isAnyFilterSelected = () => {
    return (
      searchQuery !== '' ||
      selectedSize.length > 0 ||
      ageRange[0] !== 0 ||
      ageRange[1] !== 16 ||
      selectedBreeds.length > 0
    );
  };

  // Filter the dogs based on the search query, size, age range, and selected breeds
  const filteredDogs = dogs.filter(dog => {
    const matchesSearch = dog.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize = selectedSize.length === 0 || selectedSize.includes(String(dog.size)); // Ensure size comparison is a string
    const matchesAge = dog.age >= ageRange[0] && dog.age <= ageRange[1]; // Ensure the dog is within the selected age range
    const matchesBreed = selectedBreeds.length === 0 || selectedBreeds.includes(dog.breed);
    return matchesSearch && matchesSize && matchesAge && matchesBreed;
  });

  // Handle clearing all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedSize([]);
    setAgeRange([0, 16]);
    setSelectedBreeds([]);
  };

  return (
    <div className="catalog">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Skriv hundens namn" // Swedish for "Write the dog's name"
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')}>Reset</button>
        )}
      </div>

      {/* Clear All Filters Button */}
      {isAnyFilterSelected() && (
        <div className="clear-filters">
          <button onClick={handleClearFilters}>Clear All Filters</button>
        </div>
      )}

      {/* Filter Section */}
      <div className="filter-section">
        {/* Size Filter */}
        <div className="filter-size">
          <label className="filter-label">Size</label>
          <div className="size-options-container">
            <span className="size-label">Small</span>
            <div className="size-options">
              {[1, 2, 3, 4, 5].map(size => (
              <button
                key={size}
                className={`size-box ${selectedSize.includes(String(size)) ? 'active' : ''}`}
                onClick={() =>
                  setSelectedSize(prev =>
                    prev.includes(String(size))
                      ? prev.filter(s => s !== String(size))
                      : [...prev, String(size)]
                  )
                }
              >
                {size}
              </button>
            ))}
          </div>
          <span>Large</span>
          </div>
        </div>

        {/* Age Filter */}
        <div className="filter-age">
          <label>Age: {ageRange[0]} - {ageRange[1]} years</label>
          <ReactSlider
            className="age-slider"
            min={0}
            max={16}
            value={ageRange}
            onChange={(value) => setAgeRange(value)} // Update age range state on slider change
            withTracks={true}
            pearling={true}
            minDistance={1} // Ensure minimum distance between handles
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>} // Show the value on the thumb
          />
        </div>

        {/* Breed Filter */}
        <div className="filter-breed" ref={breedDropdownRef}>
          <label>Breed:</label>
          <div className="breed-dropdown">
            <button
              className="breed-dropdown-button"
              onClick={() => setBreedDropdownOpen(!breedDropdownOpen)}
            >
              {selectedBreeds.length > 0 ? `${selectedBreeds.length} selected` : 'Select Breeds'}
            </button>
            {breedDropdownOpen && (
              <div className="breed-dropdown-menu">
                {breeds.map((breed) => (
                  <div
                    key={breed}
                    className="breed-option"
                    onClick={() => handleBreedToggle(breed)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedBreeds.includes(breed)}
                      readOnly
                    />
                    <span>{breed}</span>
                    {selectedBreeds.includes(breed) && <span className="checkmark">✔</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Selected Breeds Container */}
      {selectedBreeds.length > 0 && (
        <div className="selected-breeds-container">
          <div className="selected-breeds" onClick={() => setShowAllFilters(true)}>
            {selectedBreeds.slice(0, 5).map((breed, index) => (
              <span key={index} className="selected-breed" onClick={(e) => e.stopPropagation()}>
                {breed} <button onClick={(e) => { e.stopPropagation(); removeBreed(breed); }}>x</button>
              </span>
            ))}
            {selectedBreeds.length > 5 && <span className="ellipsis">...more</span>}
          </div>
        </div>
      )}

      {/* Expanded Selected Breeds Display */}
      {showAllFilters && (
        <div className="expanded-filters" onClick={() => setShowAllFilters(false)}>
          <div className="expanded-filters-content" onClick={(e) => e.stopPropagation()}>
            <h3>Selected Breeds</h3>
            <div className="selected-breeds expanded">
              {selectedBreeds.map((breed, index) => (
                <span key={index} className="selected-breed">
                  {breed} <button onClick={() => removeBreed(breed)}>x</button>
                </span>
              ))}
            </div>
            <button onClick={() => setShowAllFilters(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Filtered Dogs */}
      <div className="dog-grid">
        {filteredDogs.map((dog) => (
          <div key={dog.chipNumber} className="dog-card">
            <Link to={`/details/${dog.chipNumber}`}>
              <img src={dog.img} alt={dog.name} className="dog-image" />
              <h3>{dog.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
