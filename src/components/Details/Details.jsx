import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DogDetailsCard from './DogDetailsCard';
import '../../CSS/details/Details.css'; 

const Details = () => {
  const { chipNumber } = useParams(); 
  const [dogs, setDogs] = useState([]);

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
        setDogs(sortedDogs);
      })
      .catch((error) => console.error('Error fetching dog data:', error));
  }, []);

  return (
    <div className="details">
      <div className="dog-list">
        {dogs.map((dog) => (
          <DogDetailsCard
            key={dog.chipNumber}
            dog={dog}
            isTarget={dog.chipNumber === chipNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
