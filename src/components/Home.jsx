import React from 'react';
import '../CSS/Home.css';

const Home = () => {
  return (
    <>
      <div className="content">
        <img src="./assets/dogHome.png" alt="Home Dog" className="homeDogImage" />
      </div>

      <div className="map">
        <img src="./assets/hbgMap.png" alt="Map" className="hbgMapImage" />
      </div>

      <div className="centered-text-container">
        <p className="centered-text">Welcome to Doggy Daycare!</p>
        <p className="smaller-centered-text">We care for your pets.</p>
      </div>

      <div className="address">
        123 Doggy Daycare St., City, Country
      </div>
    </>
  );
};

export default Home;
