// ItemList.js
import React from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';

function ItemList({ items, onAddToAggregator, onRemoveFromAggregator, aggregatorItems }) {
    return (
      <div className="ItemList">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onAddToAggregator={onAddToAggregator}
            onRemoveFromAggregator={onRemoveFromAggregator}
            isAddedToAggregator={aggregatorItems.includes(item)}
          />
        ))}
      </div>
    );
  }
  
  export default ItemList;
