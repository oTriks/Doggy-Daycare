import React from 'react';
import '../../CSS/details/DogOwnerInfo.css'; 

const DogOwnerInfo = ({ owner }) => {
  return (
    <div className="dog-owner-info">
      <h4>Owner</h4>
      <p>
        Name: {owner.name} {owner.lastName}
      </p>
      <p>Phone Number: {owner.phoneNumber}</p>
    </div>
  );
};

export default DogOwnerInfo;
