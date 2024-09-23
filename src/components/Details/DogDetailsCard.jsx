import React, { useEffect, useRef } from 'react';
import DogImageCard from './DogImageCard';
import DogFactInfo from './DogFactInfo';
import DogOwnerInfo from './DogOwnerInfo';
import '../../CSS/details/DogDetailsCard.css'; 

const DogDetailsCard = ({ dog, isTarget }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (isTarget && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isTarget]);

  return (
    <div className="dog-details-card" ref={cardRef}>
      <DogImageCard dog={dog} />
      <DogFactInfo dog={dog} />
      <DogOwnerInfo owner={dog.owner} />
    </div>
  );
};

export default DogDetailsCard;
