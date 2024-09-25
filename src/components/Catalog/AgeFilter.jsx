
import React from 'react';
import ReactSlider from 'react-slider';
import { useTranslation } from 'react-i18next'; 
import '../../CSS/catalog/AgeFilter.css';

const AgeFilter = ({ ageRange, setAgeRange }) => {
  const { t } = useTranslation(); 

  return (
    <div className="filter-age">
      <label>{t('catalog.age')}: {ageRange[0]} - {ageRange[1]} {t('catalog.years')}</label>

      <ReactSlider
        className="age-slider"
        min={0}
        max={16}
        value={ageRange}
        onChange={(value) => setAgeRange(value)}
        withTracks
        pearling
        minDistance={1}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
};

export default AgeFilter;
