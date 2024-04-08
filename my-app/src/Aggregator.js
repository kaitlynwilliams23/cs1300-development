// Aggregator.js
import React from 'react';

function Aggregator({ items }) {
  return (
    <div>
      <h2>Favorites List:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Aggregator;
