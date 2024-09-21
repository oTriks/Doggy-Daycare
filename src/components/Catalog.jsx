import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Catalog.css';

const Catalog = () => {
  const [dogs, setDogs] = useState([]);

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

  return (
    <div className="catalog">
      <h2>Our Dogs</h2>
      <div className="dog-grid">
        {dogs.map((dog) => (
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
