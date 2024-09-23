// src/components/DogCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/DogCard.css'; // Create a separate CSS file for DogCard

const DogCard = ({ dog }) => {
  return (
    <div className="dog-card">
      <Link to={`/details/${dog.chipNumber}`}>
        <img src={dog.img} alt={dog.name} className="dog-image" />
        <h3>{dog.name}</h3>
      </Link>
    </div>
  );
};

export default DogCard;
