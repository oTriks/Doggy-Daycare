import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'; 
import '../../CSS/header/MobileMenu.css'; 

const MobileMenu = ({ isOpen, closeMenu }) => {
  const { t } = useTranslation();

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <Link to="/details" className="mobile-nav-link" onClick={closeMenu}>
        {t('header.specificInformation')}
      </Link>
      <Link to="/catalog" className="mobile-nav-link" onClick={closeMenu}>
        {t('header.catalog')}
      </Link>
      <LanguageSwitcher />  
    </div>
  );
};

export default MobileMenu;
