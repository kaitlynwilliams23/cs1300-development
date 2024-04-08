// ItemList.js
import React from 'react';
import ItemCard from './ItemCard';

function ItemList({ items, onAddToAggregator, onRemoveFromAggregator, aggregatorItems }) {
  return (
    <div>
      <h2>Items:</h2>
      <div>
        {items.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            onAddToAggregator={onAddToAggregator}
            onRemoveFromAggregator={onRemoveFromAggregator}
            isAddedToAggregator={aggregatorItems.includes(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
