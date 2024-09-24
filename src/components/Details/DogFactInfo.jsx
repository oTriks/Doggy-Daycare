import React from 'react';
import { useTranslation } from 'react-i18next'; 
import '../../CSS/details/DogFactInfo.css'; 

const DogFactInfo = ({ dog }) => {
  const { t } = useTranslation(); 

  return (
    <div className="dog-fact-info">
      <h4>{t('details.fact')}</h4>
      <p>{t('details.sex')}: {dog.sex}</p>
      <p>{t('details.breed')}: {dog.breed}</p>
      <p>{t('details.size')}: {dog.size}</p>
      <p>{t('details.age')}: {dog.age}</p>
      <p>{t('details.present')}: {dog.present ? t('yes') : t('no')}</p>
      <p>{t('details.chipNumber')}: {dog.chipNumber}</p>
    </div>
  );
};

export default DogFactInfo;
