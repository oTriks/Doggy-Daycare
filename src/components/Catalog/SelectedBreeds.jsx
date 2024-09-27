import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import '../../CSS/catalog/SelectedBreeds.css'; 

const SelectedBreeds = ({
  selectedBreeds,
  removeBreed,
  showAllFilters,
  setShowAllFilters,
}) => {
  const { t } = useTranslation(); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliceLimit = isMobile ? 5 : 8;

  return (
    <>
      {selectedBreeds.length > 0 && (
        <div className="selected-breeds-container">
          <div className="selected-breeds" onClick={() => setShowAllFilters(true)}>
            {selectedBreeds.slice(0, sliceLimit).map((breed, index) => (
              <span key={index} className="selected-breed" onClick={(e) => e.stopPropagation()}>
                {breed}{' '}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeBreed(breed);
                  }}
                >
                  x
                </button>
              </span>
            ))}
            {selectedBreeds.length > sliceLimit && <span className="ellipsis">...{t('catalog.more')}</span>}
          </div>
        </div>
      )}

      {showAllFilters && (
        <div className="expanded-filters" onClick={() => setShowAllFilters(false)}>
          <div className="expanded-filters-content" onClick={(e) => e.stopPropagation()}>
            <h3>{t('catalog.selectedBreeds')}</h3>
            <div className="selected-breeds expanded">
              {selectedBreeds.map((breed, index) => (
                <span key={index} className="selected-breed">
                  {breed} <button onClick={() => removeBreed(breed)}>x</button>
                </span>
              ))}
            </div>
            <button onClick={() => setShowAllFilters(false)}>{t('catalog.close')}</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedBreeds;
