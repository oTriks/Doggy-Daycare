import React from 'react';
import '../../CSS/details/DogFactInfo.css'; 

const DogFactInfo = ({ dog }) => {
  return (
    <div className="dog-fact-info">
      <h4>Fact</h4>
      <p>Sex: {dog.sex}</p>
      <p>Breed: {dog.breed}</p>
      <p>Size: {dog.size}</p>
      <p>Age: {dog.age}</p>
      <p>Present: {dog.present ? 'Yes' : 'No'}</p>
      <p>Chip Number: {dog.chipNumber}</p>
    </div>
  );
};

export default DogFactInfo;
