import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import FoodCard from '../components/food/FoodCard';

const Favorites = () => {
  const { favorites, clearFavorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="favorites-page py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h1 className="display-4 fw-bold">Your Favorites</h1>
              <p className="lead text-muted">Items you've saved for later</p>
            </div>
          </div>

          <div className="empty-state">
            <i className="bi bi-heart display-1 text-muted"></i>
            <h3>No favorites yet</h3>
            <p>Start browsing our menu and add items to your favorites!</p>
            <Link to="/menu" className="btn btn-primary btn-lg">
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div>
              <h1 className="display-4 fw-bold">Your Favorites</h1>
              <p className="lead text-muted">
                {favorites.length} item{favorites.length !== 1 ? 's' : ''} saved
              </p>
            </div>
            <button 
              className="btn btn-outline-danger"
              onClick={clearFavorites}
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="row g-4">
          {favorites.map((food) => (
            <div key={food.id} className="col-lg-4 col-md-6">
              <FoodCard food={food} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;