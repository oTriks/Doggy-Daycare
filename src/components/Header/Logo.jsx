
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 
import '../../CSS/header/Logo.css'; 

const Logo = () => {
  const { t } = useTranslation();

  return (
    <div className="logo">
      <Link to="/" className="logo-link">
        <img src="/Doggy-Daycare/assets/dogLogo.png" alt="Doggy Daycare Icon" className="logo-icon" />
        <h1 className="logo-title">{t('header.title')}</h1>
      </Link>
    </div>
  );
};

export default Logo;
