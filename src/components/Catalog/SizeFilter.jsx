
import React from 'react';
import '../../CSS/catalog/SizeFilter.css';

const SizeFilter = ({ selectedSize, setSelectedSize }) => {
  return (
    <div className="filter-size">
      <label className="filter-label">Size</label>
      <div className="size-options-container">
        <span className="size-label">Small</span>
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
        <span className="size-label">Large</span>
      </div>
    </div>
  );
};

export default SizeFilter;
