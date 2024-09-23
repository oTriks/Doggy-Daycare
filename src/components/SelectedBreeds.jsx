// src/components/SelectedBreeds.jsx

import React from 'react';
import '../CSS/SelectedBreeds.css'; // Create a separate CSS file for SelectedBreeds

const SelectedBreeds = ({
  selectedBreeds,
  removeBreed,
  showAllFilters,
  setShowAllFilters,
}) => {
  return (
    <>
      {selectedBreeds.length > 0 && (
        <div className="selected-breeds-container">
          <div className="selected-breeds" onClick={() => setShowAllFilters(true)}>
            {selectedBreeds.slice(0, 5).map((breed, index) => (
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
            {selectedBreeds.length > 5 && <span className="ellipsis">...more</span>}
          </div>
        </div>
      )}

      {/* Expanded Filters Display */}
      {showAllFilters && (
        <div className="expanded-filters" onClick={() => setShowAllFilters(false)}>
          <div className="expanded-filters-content" onClick={(e) => e.stopPropagation()}>
            <h3>Selected Breeds</h3>
            <div className="selected-breeds expanded">
              {selectedBreeds.map((breed, index) => (
                <span key={index} className="selected-breed">
                  {breed} <button onClick={() => removeBreed(breed)}>x</button>
                </span>
              ))}
            </div>
            <button onClick={() => setShowAllFilters(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedBreeds;
