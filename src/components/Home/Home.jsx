
import React from 'react';
import HomeImage from './HomeImage';
import Map from './Map';
import WelcomeText from './WelcomeText';
import Address from './Address';
import '../../CSS/home/Home.css'; 

const Home = () => {
  return (
    <div className="full-screen-container">
    <div className="home-container">
      <HomeImage />
      <Map />
      <WelcomeText />
      <Address />
    </div>
    </div>
  );
};

export default Home;
