import React from 'react';
import { useTranslation } from 'react-i18next'; 
import '../../CSS/details/DogOwnerInfo.css'; 

const DogOwnerInfo = ({ owner }) => {
  const { t } = useTranslation(); 

  return (
    <div className="dog-owner-info">
      <h4>{t('details.owner')} </h4>
      <p>{t('details.name')}: {owner.name} {owner.lastName}</p>
      <p>{t('details.phoneNumber')}: {owner.phoneNumber}</p>

     
    </div>
  );
};

export default DogOwnerInfo;
