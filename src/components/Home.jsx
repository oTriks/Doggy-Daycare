import React, { useState } from 'react';
import '../CSS/Home.css'; 

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src="./assets/dogLogo.png" alt="Doggy Daycare Icon" className="icon" />
          <h1 className="title">Doggy Daycare</h1>
        </div>

        <div className="header-right">
          <span className="headerText">Specific Information</span>
          <span className="divider"></span>
          <span className="headerText">Catalog</span>

          <div className="flags">
            <img src="/assets/SWE.png" alt="Swedish Flag" className="flag" />
            <img src="./assets/US.png" alt="American Flag" className="flag" />
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
      </header>

      {/* Small Dropdown Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="#">Specific Information</a>
        <a href="#">Catalog</a>
        <a href="#"><img src="/assets/SWE.png" alt="Swedish Flag" className="flag" /></a>
        <a href="#"><img src="./assets/US.png" alt="American Flag" className="flag" /></a>
      </div>

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
}

export default Home;
