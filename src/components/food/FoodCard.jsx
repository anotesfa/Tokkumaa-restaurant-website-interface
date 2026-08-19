import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { useToast } from '../common/Toast';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { showSuccess, showInfo } = useToast();
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(food, 1);
    showSuccess(`${food.name} added to cart!`);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const wasInFavorites = isFavorite(food.id);
    toggleFavorite(food);
    
    const message = wasInFavorites 
      ? `${food.name} removed from favorites!`
      : `${food.name} added to favorites!`;
    showInfo(message);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const fallbackImage = "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23FF6B35'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3E🍽️%3C/text%3E%3C/svg%3E";

  return (
    <div className="professional-food-card hover-lift micro-bounce">
      {/* Image Container */}
      <div className="card-image-container">
        {imageLoading && (
          <div className="image-loading-skeleton">
            <div className="skeleton-animation"></div>
          </div>
        )}
        
        <img 
          src={imageError ? fallbackImage : food.image} 
          className={`card-image ${imageLoading ? 'loading' : 'loaded'}`}
          alt={food.name}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        
        {/* Badges */}
        {food.popular && <span className="popularity-badge hover-wiggle">🔥 Popular</span>}
        {food.featured && <span className="featured-badge">⭐ Chef's Special</span>}
        
        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className={`favorite-button ${isFavorite(food.id) ? 'active' : ''}`}
        >
          <i className={`bi ${isFavorite(food.id) ? 'bi-heart-fill' : 'bi-heart'}`}></i>
        </button>
      </div>

      {/* Card Content */}
      <div className="card-content">
        {/* Rating */}
        <div className="rating-section">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i}
                className={`bi ${i < Math.floor(food.rating) ? 'bi-star-fill' : 'bi-star'}`}
              ></i>
            ))}
          </div>
          <span className="rating-number">{food.rating}</span>
        </div>
        
        {/* Food Details */}
        <h3 className="food-title">{food.name}</h3>
        <p className="food-description">{food.description}</p>
        
        {/* Footer */}
        <div className="card-footer">
          <div className="price-section">
            <span className="price">${food.price.toFixed(2)}</span>
            {food.prepTime && (
              <span className="prep-time">
                <i className="bi bi-clock"></i>
                {food.prepTime}
              </span>
            )}
          </div>
          
          <div className="action-buttons">
            <Link to={`/food/${food.id}`} className="view-btn" data-tooltip="View Details">
              <i className="bi bi-eye"></i>
            </Link>
            
            <button onClick={handleAddToCart} className="add-btn ripple-effect">
              <i className="bi bi-cart-plus"></i>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;