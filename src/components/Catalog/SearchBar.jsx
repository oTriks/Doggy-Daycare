import React from 'react';
import '../../CSS/catalog/SearchBar.css'; 

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Skriv hundens namn" 
        value={searchQuery}
        onChange={handleSearch}
      />
      {searchQuery && (
        <button onClick={() => setSearchQuery('')}>Reset</button>
      )}
    </div>
  );
};

export default SearchBar;
