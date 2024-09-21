import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src="./assets/dogLogo.png" alt="Doggy Daycare Icon" className="icon" />
        <h1 className="title">Doggy Daycare</h1>
      </div>

      <div className="header-right">
      <Link to="/details" className="headerText">
          Specific Information
        </Link>        
        <span className="divider"></span>

        {/* Use RouterLink instead of Link */}
        <Link to="/catalog" className="headerText" onClick={() => setIsMenuOpen(false)}>

          Catalog
          </Link>

        <div className="flags">
          <img src="/assets/SWE.png" alt="Swedish Flag" className="flag" />
          <img src="./assets/US.png" alt="American Flag" className="flag" />
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
      <Link to="/details" onClick={() => setIsMenuOpen(false)}>
          Specific Information
        </Link>
                <Link to="/catalog" className="headerText" onClick={() => setIsMenuOpen(false)}>
        Catalog
          </Link>
          <a href="#">
          <img src="/assets/SWE.png" alt="Swedish Flag" className="flag" />
        </a>
        <a href="#">
          <img src="./assets/US.png" alt="American Flag" className="flag" />
        </a>
      </div>
    </header>
  );
};

export default Header;
