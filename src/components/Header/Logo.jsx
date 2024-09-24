
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../CSS/header/Logo.css'; 


const Logo = () => {
  const { t } = useTranslation();

  return (
    <div className="logo">
      <img src="/assets/dogLogo.png" alt="Doggy Daycare Icon" className="logo-icon" />
      <h1 className="logo-title">{t('header.title')}</h1>
    </div>
  );
};

export default Logo;
