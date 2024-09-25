
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../CSS/header/LanguageSwitcher.css'; 

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="language-switcher">
      <img 
        src="/assets/SWE.png" 
        alt="Swedish Flag" 
        className="flag" 
        onClick={() => changeLanguage('sv')} 
        style={{ cursor: 'pointer' }}
      />
      <img 
        src="/assets/US.png" 
        alt="American Flag" 
        className="flag" 
        onClick={() => changeLanguage('en')} 
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default LanguageSwitcher;
