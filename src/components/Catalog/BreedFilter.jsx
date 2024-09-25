
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; 
import '../../CSS/catalog/BreedFilter.css';

const BreedFilter = ({ selectedBreeds, setSelectedBreeds, breeds }) => {
  const [breedDropdownOpen, setBreedDropdownOpen] = useState(false);
  const breedDropdownRef = useRef(null);
  const { t } = useTranslation(); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (breedDropdownRef.current && !breedDropdownRef.current.contains(event.target)) {
        setBreedDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBreedToggle = (breed) => {
    if (selectedBreeds.includes(breed)) {
      setSelectedBreeds(selectedBreeds.filter((b) => b !== breed));
    } else {
      setSelectedBreeds([...selectedBreeds, breed]);
    }
  };

  return (
    <div className="filter-breed" ref={breedDropdownRef}>
      <label>{t('catalog.breed')}:</label>
      <div className="breed-dropdown">
        <button
          className="breed-dropdown-button"
          onClick={() => setBreedDropdownOpen(!breedDropdownOpen)}
        >
      {selectedBreeds.length > 0 ? `${selectedBreeds.length} selected` : t('catalog.selectBreeds')}
      </button>
        {breedDropdownOpen && (
          <div className="breed-dropdown-menu">
            {breeds.map((breed) => (
              <div
                key={breed}
                className="breed-option"
                onClick={() => handleBreedToggle(breed)}
              >
                <input type="checkbox" checked={selectedBreeds.includes(breed)} readOnly />
                <span>{breed}</span>
                {selectedBreeds.includes(breed) && <span className="checkmark">✔</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BreedFilter;
