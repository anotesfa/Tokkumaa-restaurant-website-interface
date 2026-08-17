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

  // Fallback image for when main image fails to load
  const fallbackImage = "data:image/svg+xml,%3Csvg width='240' height='240' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='240' height='240' fill='%23FF6B35'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3E🍽️%3C/text%3E%3C/svg%3E";

  return (
    <div className="food-card card h-100 position-relative hover-lift">
      {/* Badges */}
      {food.popular && <span className="badge-popular">Popular</span>}
      {food.featured && <span className="badge-featured">Chef's Choice</span>}

      {/* Food Image */}
      <div className="position-relative overflow-hidden image-container">
        {/* Loading Skeleton */}
        {imageLoading && (
          <div className="image-skeleton">
            <div className="skeleton-loader"></div>
            <div className="loading-spinner-small"></div>
          </div>
        )}
        
        {/* Main Image */}
        <img 
          src={imageError ? fallbackImage : food.image} 
          className={`card-img-top ${imageLoading ? 'image-loading' : 'image-loaded'}`}
          alt={food.name}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          style={{
            display: imageLoading ? 'none' : 'block'
          }}
        />
        
        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className={`btn btn-sm position-absolute favorite-btn ${
            isFavorite(food.id) ? 'btn-primary' : 'btn-outline-light'
          }`}
          style={{ 
            top: '12px', 
            right: '12px',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            padding: '0'
          }}
        >
          <i className={`bi ${isFavorite(food.id) ? 'bi-heart-fill' : 'bi-heart'}`}></i>
        </button>
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        {food.rating && (
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i}
                className={`bi ${i < Math.floor(food.rating) ? 'bi-star-fill' : 'bi-star'}`}
              ></i>
            ))}
            <span className="text-white-50 ms-2">({food.rating})</span>
          </div>
        )}
        
        <h5 className="food-name">{food.name}</h5>
        <p className="food-description flex-grow-1">{food.description}</p>
        
        <div className="d-flex align-items-center justify-content-between mt-auto">
          <div className="food-price">${food.price.toFixed(2)}</div>
          
          <div className="d-flex gap-2">
            <Link to={`/food/${food.id}`} className="btn btn-outline-light btn-sm">
              <i className="bi bi-eye"></i>
            </Link>
            
            <button onClick={handleAddToCart} className="btn btn-primary btn-sm">
              <i className="bi bi-cart-plus me-1"></i>Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;