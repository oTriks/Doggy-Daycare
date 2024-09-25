
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../CSS/home/Address.css'; 

const Address = () => {
  const { t } = useTranslation();

  return (
    <div className="address-container">
      {t('home.address')}
    </div>
  );
};

export default Address;
