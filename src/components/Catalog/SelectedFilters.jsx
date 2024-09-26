import React from 'react';
import { useTranslation } from 'react-i18next';  
import '../../CSS/catalog/SelectedFilters.css';

const SelectedFilters = ({ selectedSize, ageRange, removeSize, removeAge }) => {
  const { t } = useTranslation();  

  const sizeLabels = {
    1: t('catalog.small'),
    2: t('catalog.smallMedium'), 
    3: t('catalog.medium'),
    4: t('catalog.mediumLarge'), 
    5: t('catalog.large'),
  };

  return (
    <div className="selected-filters">
      {selectedSize.length > 0 && (
        <div className="selected-size-filters">
          {selectedSize
            .sort((a, b) => a - b) 
            .map((size) => (
              <span key={size} className="selected-filter">
                {sizeLabels[size]} 
                <button onClick={() => removeSize(size)}>x</button>
              </span>
            ))}
        </div>
      )}

      {(ageRange[0] !== 0 || ageRange[1] !== 16) && (
        <span className="selected-filter">
          {t('catalog.age')}: {ageRange[0]} - {ageRange[1]}
          <button onClick={removeAge}>x</button>
        </span>
      )}
    </div>
  );
};

export default SelectedFilters;
