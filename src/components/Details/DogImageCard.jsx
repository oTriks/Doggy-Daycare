import React from 'react';
import '../../CSS/details/DogImageCard.css'; 

const DogImageCard = ({ dog }) => {
  return (
    <div className="dog-image-card">
      <img src={dog.img} alt={dog.name} className="dog-image" />
      <h3 className="dog-name">{dog.name}</h3>
    </div>
  );
};

export default DogImageCard;
