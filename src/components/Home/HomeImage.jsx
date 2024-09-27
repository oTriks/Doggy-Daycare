
import React from 'react';
import '../../CSS/home/HomeImage.css'; 

const HomeImage = () => {
  return (
    <div className="home-image-container">
      <img src={`${import.meta.env.BASE_URL}assets/dogHome.png`} alt="Home Dog" className="home-dog-image" />
      </div>
  );
};

export default HomeImage;
