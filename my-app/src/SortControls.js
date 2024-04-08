import React from 'react';

function SortControls({ sortBy, onSortChange }) {
  const handleSortChange = (event) => {
    const value = event.target.value;
    onSortChange(value);
  };

  return (
    <div>
      <h2>Sort by:</h2>
      <label>
        <input
          type="radio"
          name="sort"
          value="price"
          checked={sortBy === 'price'}
          onChange={handleSortChange}
        />
        Price
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="name"
          checked={sortBy === 'name'}
          onChange={handleSortChange}
        />
        Alphabetial 
      </label>
    </div>
  );
}

export default SortControls;
