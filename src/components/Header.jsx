// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the hook
import '../CSS/Header.css';

const Header = () => {
  const { t, i18n } = useTranslation(); // Destructure translation function and i18n instance
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src="/assets/dogLogo.png" alt="Doggy Daycare Icon" className="icon" />
        <h1 className="title">{t('header.title')}</h1>
      </div>

      <div className="header-right">
        <Link to="/details" className="headerText">
          {t('header.specificInformation')}
        </Link>        
        <span className="divider"></span>

        <Link to="/catalog" className="headerText" onClick={() => setIsMenuOpen(false)}>
          {t('header.catalog')}
        </Link>

        <div className="flags">
          {/* Swedish Flag */}
          <img 
            src="/assets/SWE.png" 
            alt="Swedish Flag" 
            className="flag" 
            onClick={() => changeLanguage('sv')} 
            style={{ cursor: 'pointer' }}
          />
          {/* American Flag */}
          <img 
            src="/assets/US.png" 
            alt="American Flag" 
            className="flag" 
            onClick={() => changeLanguage('en')} 
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/details" onClick={() => setIsMenuOpen(false)}>
          {t('header.specificInformation')}
        </Link>
        <Link to="/catalog" className="headerText" onClick={() => setIsMenuOpen(false)}>
          {t('header.catalog')}
        </Link>
        <a href="#">
          <img 
            src="/assets/SWE.png" 
            alt="Swedish Flag" 
            className="flag" 
            onClick={() => changeLanguage('sv')} 
            style={{ cursor: 'pointer' }}
          />
        </a>
        <a href="#">
          <img 
            src="/assets/US.png" 
            alt="American Flag" 
            className="flag" 
            onClick={() => changeLanguage('en')} 
            style={{ cursor: 'pointer' }}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
