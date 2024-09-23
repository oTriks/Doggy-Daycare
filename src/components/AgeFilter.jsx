// src/components/AgeFilter.jsx

import React from 'react';
import ReactSlider from 'react-slider';
import '../CSS/AgeFilter.css';

const AgeFilter = ({ ageRange, setAgeRange }) => {
  return (
    <div className="filter-age">
      <label>Age: {ageRange[0]} - {ageRange[1]} years</label>
      <ReactSlider
        className="age-slider"
        min={0}
        max={16}
        value={ageRange}
        onChange={(value) => setAgeRange(value)}
        withTracks
        pearling
        minDistance={1}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
};

export default AgeFilter;
