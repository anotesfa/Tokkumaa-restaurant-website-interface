import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart Context
const CartContext = createContext();

// Cart Actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART'
};

// Initial cart state
const initialState = {
  items: [],
  itemCount: 0,
  subtotal: 0,
  deliveryFee: 3.99,
  tax: 0,
  total: 0
};

// Cart reducer
const cartReducer = (state, action) => {
  let newItems;
  let newState;

  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && 
        JSON.stringify(item.selectedExtras) === JSON.stringify(action.payload.selectedExtras)
      );

      if (existingItemIndex >= 0) {
        // Item already exists, update quantity
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        // Add new item
        newItems = [...state.items, { ...action.payload, cartItemId: Date.now() }];
      }

      newState = {
        ...state,
        items: newItems
      };
      break;

    case CART_ACTIONS.REMOVE_ITEM:
      newItems = state.items.filter(item => item.cartItemId !== action.payload.cartItemId);
      newState = {
        ...state,
        items: newItems
      };
      break;

    case CART_ACTIONS.UPDATE_QUANTITY:
      if (action.payload.quantity <= 0) {
        // Remove item if quantity is 0 or less
        newItems = state.items.filter(item => item.cartItemId !== action.payload.cartItemId);
      } else {
        newItems = state.items.map(item =>
          item.cartItemId === action.payload.cartItemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }

      newState = {
        ...state,
        items: newItems
      };
      break;

    case CART_ACTIONS.CLEAR_CART:
      newState = { ...initialState };
      break;

    case CART_ACTIONS.LOAD_CART:
      newState = { ...state, ...action.payload };
      break;

    default:
      return state;
  }

  // Calculate totals
  const subtotal = newState.items.reduce((sum, item) => {
    const extrasTotal = item.selectedExtras?.reduce((extraSum, extra) => extraSum + extra.price, 0) || 0;
    return sum + ((item.price + extrasTotal) * item.quantity);
  }, 0);

  const itemCount = newState.items.reduce((count, item) => count + item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + (itemCount > 0 ? newState.deliveryFee : 0) + tax;

  return {
    ...newState,
    itemCount,
    subtotal,
    tax,
    total
  };
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('tokkumaa-cart');
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: cartData });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('tokkumaa-cart', JSON.stringify(state));
  }, [state]);

  // Action creators
  const addToCart = (food, quantity = 1, selectedExtras = []) => {
    const extrasTotal = selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
    const totalPrice = food.price + extrasTotal;

    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: {
        id: food.id,
        name: food.name,
        price: food.price,
        image: food.image,
        quantity,
        selectedExtras,
        totalPrice,
        category: food.category
      }
    });
  };

  const removeFromCart = (cartItemId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: { cartItemId }
    });
  };

  const updateQuantity = (cartItemId, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { cartItemId, quantity }
    });
  };

  const increaseQuantity = (cartItemId) => {
    const item = state.items.find(item => item.cartItemId === cartItemId);
    if (item) {
      updateQuantity(cartItemId, item.quantity + 1);
    }
  };

  const decreaseQuantity = (cartItemId) => {
    const item = state.items.find(item => item.cartItemId === cartItemId);
    if (item && item.quantity > 1) {
      updateQuantity(cartItemId, item.quantity - 1);
    }
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const isInCart = (foodId) => {
    return state.items.some(item => item.id === foodId);
  };

  const getCartItemCount = (foodId) => {
    return state.items
      .filter(item => item.id === foodId)
      .reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isInCart,
    getCartItemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;