// ItemCardWithFavorites.js
import React from 'react';
import './ItemCard.css'; // Import CSS for styling

function ItemCard({ item, onAddToCart, onRemoveFromCart, isAddedToCart }) {
    const handleAddRemoveClick = () => {
        if (isAddedToCart) {
          onRemoveFromCart(item);
        } else {
          onAddToCart(item);
        }
      };
    
      return (
        <div className="ItemCard">
          <div className="ItemImageContainer">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="ItemInfo">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={handleAddRemoveClick}>
              {isAddedToCart ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      );
}

export default ItemCard;
