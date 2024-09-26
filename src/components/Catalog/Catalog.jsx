<div className="catalog">
  <div className="search-and-filter-container">
    <button className="filter-button" onClick={toggleFilters}>
      Filter
    </button>
    <div className="search-bar-position">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  </div>

  {isAnyFilterSelected() && (
    <div className="clear-filters-wrapper">
      <SelectedBreeds
        selectedBreeds={selectedBreeds}
        removeBreed={removeBreed}
        showAllFilters={showAllFilters}
        setShowAllFilters={setShowAllFilters}
      />
      <div className="clear-filters">
        <button onClick={handleClearFilters}>Clear All Filters</button>
      </div>
    </div>
  )}

  {/* New Container for Mobile Filters */}
  <div className="mobile-filters-container">
    <SelectedFilters
      selectedSize={selectedSize}
      ageRange={ageRange}
      removeSize={removeSize}
      removeAge={() => setAgeRange([0, 16])}
    />
    <SelectedBreeds
      selectedBreeds={selectedBreeds}
      removeBreed={removeBreed}
      showAllFilters={showAllFilters}
      setShowAllFilters={setShowAllFilters}
    />
  </div>

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
