import React, { useState, useEffect } from 'react';
import Filters from './Filters.jsx';
import DogGrid from './Doggrid.jsx';
import { useTranslation } from 'react-i18next';  
import SelectedBreeds from './SelectedBreeds.jsx';
import SearchBar from './SearchBar.jsx'; 
import SelectedFilters from './SelectedFilters'; 
import "../../CSS/catalog/Catalog.css";

const Catalog = () => {
  const { t } = useTranslation();
  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSize, setSelectedSize] = useState([]);
  const [ageRange, setAgeRange] = useState([0, 16]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [showFilters, setShowFilters] = useState(false); 

  const [tempSelectedSize, setTempSelectedSize] = useState([]);
  const [tempAgeRange, setTempAgeRange] = useState([0, 16]);
  const [tempSelectedBreeds, setTempSelectedBreeds] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ed5c53ad19ca34f8a985cc')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const dogsArray = data.record;
        const sortedDogs = dogsArray.sort((a, b) => a.name.localeCompare(b.name));
        const breedsArray = [...new Set(sortedDogs.map((dog) => dog.breed))];
        setBreeds(breedsArray);
        setDogs(sortedDogs);
      })
      .catch((error) => console.error('Error fetching dog data:', error));
  }, []);

  const removeBreed = (breedToRemove) => {
    setSelectedBreeds(selectedBreeds.filter((breed) => breed !== breedToRemove));
  };

  const removeSize = (sizeToRemove) => {
    setSelectedSize(selectedSize.filter((size) => size !== sizeToRemove));
  };

  const isAnyFilterSelected = () => {
    return (
      searchQuery !== '' ||
      selectedSize.length > 0 ||
      ageRange[0] !== 0 ||
      ageRange[1] !== 16 ||
      selectedBreeds.length > 0
    );
  };

  const filteredDogs = dogs.filter((dog) => {
    const matchesSearch = dog.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize =
      selectedSize.length === 0 || selectedSize.includes(String(dog.size));
    const matchesAge = dog.age >= ageRange[0] && dog.age <= ageRange[1];
    const matchesBreed = selectedBreeds.length === 0 || selectedBreeds.includes(dog.breed);
    return matchesSearch && matchesSize && matchesAge && matchesBreed;
  });

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedSize([]);
    setAgeRange([0, 16]);
    setSelectedBreeds([]);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    if (!showFilters) {
      setTempSelectedSize([...selectedSize]);
      setTempAgeRange([...ageRange]);
      setTempSelectedBreeds([...selectedBreeds]);
    }
  };

  const handleSaveFilters = () => {
    setSelectedSize([...tempSelectedSize]);
    setAgeRange([...tempAgeRange]);
    setSelectedBreeds([...tempSelectedBreeds]);
    setShowFilters(false);
  };

  const handleCancelFilters = () => {
    setTempSelectedSize([]);
    setTempAgeRange([0, 16]);
    setTempSelectedBreeds([]);
    setShowFilters(false);
  };

  return (

    <div className="catalog">
      <div className="search-and-filter-container">
        <SelectedFilters 
          selectedSize={selectedSize} 
          ageRange={ageRange} 
          removeSize={removeSize} 
          removeAge={() => setAgeRange([0, 16])}
        />
        <div className="search-bar-position">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <button className="filter-button" onClick={toggleFilters}>
          Filter
        </button>
      </div>

      {isAnyFilterSelected() && (
        <div className="clear-filters-wrapper">
          <SelectedBreeds
            selectedBreeds={selectedBreeds}
            removeBreed={removeBreed}
            showAllFilters={showAllFilters}
            setShowAllFilters={setShowAllFilters}
          />
          <div className="clear-filters ">
            <button onClick={handleClearFilters}>{t('catalog.clearAllFilters')}</button>
          </div>
        </div>
      )}

      {showFilters && (
        <div className="filter-modal">
          <div className="filter-modal-content">
            <Filters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedSize={tempSelectedSize}
              setSelectedSize={setTempSelectedSize}
              ageRange={tempAgeRange}
              setAgeRange={setTempAgeRange}
              selectedBreeds={tempSelectedBreeds}
              setSelectedBreeds={setTempSelectedBreeds}
              breeds={breeds}
            />
            <div className="modal-actions">
            <button className="cancel-button" onClick={handleCancelFilters}>
                Cancel
              </button>
              <button className="save-button" onClick={handleSaveFilters}>
                Save
              </button>
            
            </div>
          </div>
        </div>
      )}

      <DogGrid dogs={filteredDogs} />
    </div>
  );
};

export default Catalog;
