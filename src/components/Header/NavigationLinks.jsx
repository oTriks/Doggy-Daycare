
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../CSS/header/NavigationLinks.css'; 

const NavigationLinks = ({ closeMenu }) => {
  const { t } = useTranslation();

  return (
    <div className="navigation-links">
      <Link to="/details" className="nav-link" onClick={closeMenu}>
        {t('header.specificInformation')}
      </Link>
      <span className="divider"></span>
      <Link to="/catalog" className="nav-link" onClick={closeMenu}>
        {t('header.catalog')}
      </Link>
    </div>
  );
};

export default NavigationLinks;
