// src/components/Details.jsx

import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/Details.css';

const Details = () => {
  const { chipNumber } = useParams(); // chipNumber might be undefined
  const [dogs, setDogs] = useState([]);
  const dogRefs = useRef({});

  useEffect(() => {
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

        // Sort the dogs by name alphabetically
        const sortedDogs = dogsArray.sort((a, b) => a.name.localeCompare(b.name));

        // Update state
        setDogs(sortedDogs);

        // Scroll to the selected dog after data is loaded
        if (chipNumber) {
          setTimeout(() => {
            if (dogRefs.current[chipNumber]) {
              dogRefs.current[chipNumber].scrollIntoView({ behavior: 'smooth' });
            }
          }, 0);
        }
      })
      .catch(error => console.error('Error fetching dog data:', error));
  }, [chipNumber]);

  return (
    <div className="details">
      <h2>Dog Details</h2>
      <div className="dog-list">
        {dogs.map((dog) => (
          <div
            key={dog.chipNumber}
            ref={(el) => (dogRefs.current[dog.chipNumber] = el)}
            className="dog-details-card"
          >
            <img src={dog.img} alt={dog.name} className="dog-image" />
            <div className="dog-info">
              <h3>{dog.name}</h3>
              <p>Sex: {dog.sex}</p>
              <p>Breed: {dog.breed}</p>
              <p>Size: {dog.size}</p>
              <p>Age: {dog.age}</p>
              <p>Present: {dog.present ? 'Yes' : 'No'}</p>
              <p>Chip Number: {dog.chipNumber}</p>
              <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
              <p>Phone Number: {dog.owner.phoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
