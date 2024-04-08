import './App.css';
import React, { useState } from 'react';
import FilterControls from './FilterControls';
import SortControls from './SortControls.js';
import ItemList from './ItemList';
import Aggregator from './Aggregator';
import ItemCard from './ItemCard'; 
import data from './data';

function App() {

  const [items, setItems] = useState(data); // Store all items
  const [filters, setFilters] = useState({ price: '', color: '' });
  const [sortBy, setSortBy] = useState('');
  const [aggregator, setAggregator] = useState([]);

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleAddToAggregator = (item) => {
    setAggregator([...aggregator, item]);
  };

  const handleRemoveFromAggregator = (item) => {
    const updatedAggregator = aggregator.filter((aggregatedItem) => aggregatedItem !== item);
    setAggregator(updatedAggregator);
  };

  const handleReset = () => {
    setFilters({ price: '', color: '' });
    setSortBy('');
    setAggregator([]);
    // Reset item list to display all items
    setItems(data);
  };

  // Apply filters
  let filteredItems = items;
  if (filters.type) {
    filteredItems = filteredItems.filter(item => item.type === filters.type);
  }
  if (filters.color) {
    filteredItems = filteredItems.filter(item => item.color === filters.color);
  }

  // Apply sorting
  if (sortBy === 'price') {
    filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'name') {
    filteredItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div>
      <h1>Clothing Store</h1>
      <FilterControls
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <SortControls
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />
      <button onClick={handleReset}>Reset</button>
      <ItemList
        items={filteredItems}
        onAddToAggregator={handleAddToAggregator}
        onRemoveFromAggregator={handleRemoveFromAggregator}
        aggregatorItems={aggregator}
      />
      <Aggregator items={aggregator} />
    </div>
  );
}

export default App;
