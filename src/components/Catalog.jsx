// src/components/Catalog.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Catalog.css';

const Catalog = () => {
  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for the search input

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
        console.log('Fetched data:', data);

        // Access the array of dogs under 'record'
        const dogsArray = data.record;

        // Check if dogsArray is an array
        if (!Array.isArray(dogsArray)) {
          throw new Error('Data fetched is not an array');
        }

        // Sort the dogs by name alphabetically
        const sortedDogs = dogsArray.sort((a, b) => a.name.localeCompare(b.name));

        // Update state
        setDogs(sortedDogs);
      })
      .catch(error => console.error('Error fetching dog data:', error));
  }, []);

  // Handler for search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the dogs based on the search query
  const filteredDogs = dogs.filter(dog =>
    dog.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
