import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DogDetailsCard from './DogDetailsCard';
import '../../CSS/details/Details.css'; 

const Details = ({ dogs }) => {
  const { chipNumber } = useParams();
  const [selectedDog, setSelectedDog] = useState(null);

  useEffect(() => {
    if (dogs.length > 0) {
      const targetDog = dogs.find((dog) => dog.chipNumber === chipNumber);
      setSelectedDog(targetDog);
    }
  }, [chipNumber, dogs]);

  const handleOpenModal = (dog) => {
    setSelectedDog(dog);
  };

  const handleCloseModal = () => {
    setSelectedDog(null);
  };

  return (
    <div className="details">
      <div className="dog-list">
        {dogs.map((dog) => (
          <DogDetailsCard
            key={dog.chipNumber}
            dog={dog}
            isTarget={dog.chipNumber === chipNumber}
            onOpen={handleOpenModal}
          />
        ))}
      </div>

      {selectedDog && (
        <div className="modal-background" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <DogDetailsCard dog={selectedDog} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
