import React from 'react';
import '../../CSS/catalog/SelectedFilters.css';

const sizeLabels = {
  1: 'Small',
  2: 'Lite större',
  3: 'Medium',
  4: 'Medelstor',
  5: 'Stor',
};

const SelectedFilters = ({ selectedSize, ageRange, removeSize, removeAge }) => {
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
          Age: {ageRange[0]} - {ageRange[1]}
          <button onClick={removeAge}>x</button>
        </span>
      )}
    </div>
  );
};

export default SelectedFilters;
