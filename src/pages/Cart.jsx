import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    items, 
    itemCount, 
    subtotal, 
    deliveryFee, 
    tax, 
    total, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity,
    clearCart 
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h1 className="display-4 fw-bold">Your Cart</h1>
            </div>
          </div>

          <div className="empty-state">
            <i className="bi bi-bag display-1 text-muted"></i>
            <h3>Your cart is empty</h3>
            <p>Discover something delicious from our menu.</p>
            <Link to="/menu" className="btn btn-primary btn-lg">
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div>
              <h1 className="display-4 fw-bold">Your Cart</h1>
              <p className="lead text-muted">{itemCount} item{itemCount !== 1 ? 's' : ''}</p>
            </div>
            <button 
              className="btn btn-outline-danger"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="row g-4">
          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                {items.map((item) => (
                  <div key={item.cartItemId} className="cart-item py-3 border-bottom">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="img-fluid rounded"
                          style={{ height: '80px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-md-4">
                        <h6 className="fw-bold mb-1">{item.name}</h6>
                        <p className="small text-muted mb-1">{item.category}</p>
                        {item.selectedExtras && item.selectedExtras.length > 0 && (
                          <div className="small text-muted">
                            Extras: {item.selectedExtras.map(extra => extra.name).join(', ')}
                          </div>
                        )}
                      </div>
                      <div className="col-md-2">
                        <span className="fw-bold">${item.price.toFixed(2)}</span>
                      </div>
                      <div className="col-md-2">
                        <div className="input-group input-group-sm">
                          <button 
                            className="btn btn-outline-secondary"
                            onClick={() => decreaseQuantity(item.cartItemId)}
                          >
                            -
                          </button>
                          <input 
                            type="text" 
                            className="form-control text-center"
                            value={item.quantity}
                            readOnly
                          />
                          <button 
                            className="btn btn-outline-secondary"
                            onClick={() => increaseQuantity(item.cartItemId)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <span className="fw-bold">${(item.totalPrice * item.quantity).toFixed(2)}</span>
                      </div>
                      <div className="col-md-1 text-end">
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeFromCart(item.cartItemId)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm sticky-top">
              <div className="card-header bg-transparent border-0">
                <h5 className="fw-bold mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <div className="d-grid gap-2">
                  <Link to="/checkout" className="btn btn-primary btn-lg">
                    Proceed to Checkout
                  </Link>
                  <Link to="/menu" className="btn btn-outline-primary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;