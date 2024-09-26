import React, { useEffect, useRef } from 'react';
import DogImageCard from './DogImageCard';
import DogFactInfo from './DogFactInfo';
import DogOwnerInfo from './DogOwnerInfo';
import '../../CSS/details/DogDetailsCard.css';

const DogDetailsCard = ({ dog, isTarget, onOpen, isModalOpen }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (isTarget && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [isTarget]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }

    return () => {
      document.body.classList.remove('modal-active');
    };
  }, [isModalOpen]);

  return (
    <div
      className="dog-details-card"
      ref={cardRef}
      onClick={() => onOpen(dog)}
    >
      <DogImageCard dog={dog} />
      <DogFactInfo dog={dog} />
      <DogOwnerInfo owner={dog.owner} />
    </div>
  );
};

export default DogDetailsCard;
