
import React from 'react';
import { useTranslation } from 'react-i18next'; 
import '../../CSS/catalog/SizeFilter.css';

const SizeFilter = ({ selectedSize, setSelectedSize }) => {
  const { t } = useTranslation(); 
  return (
    <div className="filter-size">
      <label className="filter-label">{t('catalog.size')}</label>
      <div className="size-options-container">
        <span className="size-label">{t('catalog.small')}</span>
        <div className="size-options">
          {[1, 2, 3, 4, 5].map((size) => (
            <button
              key={size}
              className={`size-box ${selectedSize.includes(String(size)) ? 'active' : ''}`}
              onClick={() =>
                setSelectedSize((prev) =>
                  prev.includes(String(size))
                    ? prev.filter((s) => s !== String(size))
                    : [...prev, String(size)]
                )
              }
            >
              {size}
            </button>
          ))}
        </div>
        <span className="size-label">{t('catalog.large')}</span>
      </div>
    </div>
  );
};

export default SizeFilter;
