
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../CSS/home/WelcomeText.css'; 

const WelcomeText = () => {
  const { t } = useTranslation();

  return (
    <div className="centered-text-container">
      <p className="centered-text">{t('home.welcome')}</p>
      <p className="smaller-centered-text">{t('home.care')}</p>
    </div>
  );
};

export default WelcomeText;
