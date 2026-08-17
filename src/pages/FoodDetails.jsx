import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getFoodById } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../components/common/Toast';

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const food = getFoodById(id);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);
  
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { showSuccess, showInfo } = useToast();

  if (!food) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Food Item Not Found</h2>
          <p>The requested menu item could not be found.</p>
          <Link to="/menu" className="btn btn-primary">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const handleExtraChange = (extra, checked) => {
    if (checked) {
      setSelectedExtras([...selectedExtras, extra]);
    } else {
      setSelectedExtras(selectedExtras.filter(e => e.name !== extra.name));
    }
  };

  const getTotalPrice = () => {
    const extrasTotal = selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
    return (food.price + extrasTotal) * quantity;
  };

  const handleAddToCart = () => {
    addToCart(food, quantity, selectedExtras);
    showSuccess(`${food.name} (${quantity}x) added to cart!`);
    // Optionally navigate to cart or stay on the page
    // navigate('/cart');
  };

  const handleToggleFavorite = () => {
    const wasInFavorites = isFavorite(food.id);
    toggleFavorite(food);
    
    const message = wasInFavorites 
      ? `${food.name} removed from favorites!`
      : `${food.name} added to favorites!`;
    showInfo(message);
  };

  return (
    <div className="food-details-page py-5">
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="breadcrumb-item active">{food.name}</li>
          </ol>
        </nav>

        <div className="row g-4">
          {/* Food Image */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src={food.image} 
                alt={food.name}
                className="img-fluid rounded-3 shadow-lg w-100"
                style={{ height: '500px', objectFit: 'cover' }}
              />
              {food.popular && (
                <span className="badge-popular">Popular</span>
              )}
              {food.featured && (
                <span className="badge-featured position-absolute" style={{ top: '15px', left: '15px' }}>
                  Chef's Choice
                </span>
              )}
            </div>
          </div>

          {/* Food Details */}
          <div className="col-lg-6">
            <div className="food-info">
              <h1 className="display-5 fw-bold mb-3">{food.name}</h1>
              
              {/* Rating */}
              <div className="rating mb-3">
                <div className="d-flex align-items-center">
                  {[...Array(5)].map((_, index) => (
                    <i 
                      key={index}
                      className={`bi bi-star${index < Math.floor(food.rating) ? '-fill' : ''} text-warning me-1`}
                    ></i>
                  ))}
                  <span className="ms-2 fw-bold">{food.rating}</span>
                  <span className="ms-1 text-muted">({food.reviews} reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="price mb-4">
                <span className="display-6 fw-bold text-primary">${food.price.toFixed(2)}</span>
              </div>

              {/* Description */}
              <p className="lead text-muted mb-4">{food.longDescription}</p>

              {/* Ingredients */}
              <div className="ingredients mb-4">
                <h5 className="fw-bold mb-3">Ingredients</h5>
                <div className="d-flex flex-wrap gap-2">
                  {food.ingredients.map((ingredient, index) => (
                    <span key={index} className="badge bg-light text-dark">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Extras */}
              {food.extras && food.extras.length > 0 && (
                <div className="extras mb-4">
                  <h5 className="fw-bold mb-3">Customize Your Order</h5>
                  {food.extras.map((extra) => (
                    <div key={extra.name} className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id={`extra-${extra.name}`}
                        onChange={(e) => handleExtraChange(extra, e.target.checked)}
                      />
                      <label className="form-check-label d-flex justify-content-between w-100" htmlFor={`extra-${extra.name}`}>
                        <span>{extra.name}</span>
                        <span className="text-primary fw-bold">+${extra.price.toFixed(2)}</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity and Actions */}
              <div className="actions">
                <div className="row g-3 align-items-center">
                  <div className="col-auto">
                    <label className="form-label fw-bold mb-0">Quantity:</label>
                  </div>
                  <div className="col-auto">
                    <div className="input-group" style={{ width: '120px' }}>
                      <button 
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="form-control text-center"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                      />
                      <button 
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span className="fw-bold fs-4 text-primary">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="d-flex gap-3 mt-4">
                  <button 
                    className="btn btn-primary btn-lg flex-grow-1"
                    onClick={handleAddToCart}
                  >
                    <i className="bi bi-bag-plus me-2"></i>
                    Add to Cart
                  </button>
                  <button 
                    className={`btn btn-outline-primary btn-lg ${isFavorite(food.id) ? 'active' : ''}`}
                    onClick={handleToggleFavorite}
                  >
                    <i className={`bi bi-heart${isFavorite(food.id) ? '-fill' : ''}`}></i>
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="additional-info mt-4 p-3 bg-light rounded-3">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-clock text-primary me-2"></i>
                      <span className="small">
                        <strong>Prep Time:</strong> {food.prepTime}
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-truck text-primary me-2"></i>
                      <span className="small">
                        <strong>Free delivery</strong> on orders over $25
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;