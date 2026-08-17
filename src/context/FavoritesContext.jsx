import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Favorites Context
const FavoritesContext = createContext();

// Favorites Actions
const FAVORITES_ACTIONS = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  LOAD_FAVORITES: 'LOAD_FAVORITES'
};

// Initial state
const initialState = {
  favorites: []
};

// Favorites reducer
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case FAVORITES_ACTIONS.ADD_FAVORITE:
      // Check if item is already in favorites
      if (state.favorites.find(fav => fav.id === action.payload.id)) {
        return state; // Already exists, no change
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    case FAVORITES_ACTIONS.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload.id)
      };

    case FAVORITES_ACTIONS.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };

    default:
      return state;
  }
};

// Favorites Provider Component
export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('tokkumaa-favorites');
    if (savedFavorites) {
      try {
        const favoritesData = JSON.parse(savedFavorites);
        dispatch({ 
          type: FAVORITES_ACTIONS.LOAD_FAVORITES, 
          payload: favoritesData 
        });
      } catch (error) {
        console.error('Error loading favorites from localStorage:', error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('tokkumaa-favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  // Action creators
  const addToFavorites = (food) => {
    dispatch({
      type: FAVORITES_ACTIONS.ADD_FAVORITE,
      payload: {
        id: food.id,
        name: food.name,
        price: food.price,
        image: food.image,
        category: food.category,
        rating: food.rating,
        description: food.description,
        addedAt: new Date().toISOString()
      }
    });
  };

  const removeFromFavorites = (foodId) => {
    dispatch({
      type: FAVORITES_ACTIONS.REMOVE_FAVORITE,
      payload: { id: foodId }
    });
  };

  const toggleFavorite = (food) => {
    const isCurrentlyFavorite = isFavorite(food.id);
    if (isCurrentlyFavorite) {
      removeFromFavorites(food.id);
    } else {
      addToFavorites(food);
    }
  };

  const isFavorite = (foodId) => {
    return state.favorites.some(fav => fav.id === foodId);
  };

  const getFavoriteById = (foodId) => {
    return state.favorites.find(fav => fav.id === foodId);
  };

  const getFavoritesByCategory = (category) => {
    if (category === 'all' || !category) {
      return state.favorites;
    }
    return state.favorites.filter(fav => 
      fav.category.toLowerCase() === category.toLowerCase()
    );
  };

  const clearFavorites = () => {
    state.favorites.forEach(favorite => {
      dispatch({
        type: FAVORITES_ACTIONS.REMOVE_FAVORITE,
        payload: { id: favorite.id }
      });
    });
  };

  const value = {
    favorites: state.favorites,
    favoriteCount: state.favorites.length,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    getFavoriteById,
    getFavoritesByCategory,
    clearFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use favorites context
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export default FavoritesContext;