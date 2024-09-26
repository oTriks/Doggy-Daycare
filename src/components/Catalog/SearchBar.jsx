import React from 'react';
import { useTranslation } from 'react-i18next';  
import '../../CSS/catalog/SearchBar.css'; 

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const { t } = useTranslation();
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={t('catalog.writeName')}
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
