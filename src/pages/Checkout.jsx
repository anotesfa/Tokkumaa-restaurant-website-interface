import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, subtotal, deliveryFee, tax, total, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    area: '',
    instructions: '',
    deliveryMethod: 'delivery',
    paymentMethod: 'cash'
  });

  const [errors, setErrors] = useState({});

  if (items.length === 0) {
    navigate('/menu');
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    
    if (formData.deliveryMethod === 'delivery') {
      if (!formData.address.trim()) newErrors.address = 'Address is required for delivery';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.area.trim()) newErrors.area = 'Area is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Simulate order placement
    const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Clear cart and redirect to success page
    clearCart();
    navigate('/order-success', { 
      state: { 
        orderNumber,
        orderData: {
          ...formData,
          items,
          total
        }
      }
    });
  };

  return (
    <div className="checkout-page py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="display-4 fw-bold">Checkout</h1>
            <p className="lead text-muted">Complete your order</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {/* Order Form */}
            <div className="col-lg-8">
              {/* Customer Information */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-transparent">
                  <h5 className="fw-bold mb-0">Customer Information</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                      {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                    <div className="col-12">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-transparent">
                  <h5 className="fw-bold mb-0">Delivery Method</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="deliveryMethod"
                          value="delivery"
                          checked={formData.deliveryMethod === 'delivery'}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">
                          <strong>Delivery</strong> - ${deliveryFee.toFixed(2)}
                          <small className="d-block text-muted">Delivered to your door</small>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="deliveryMethod"
                          value="pickup"
                          checked={formData.deliveryMethod === 'pickup'}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">
                          <strong>Pickup</strong> - Free
                          <small className="d-block text-muted">Collect from restaurant</small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address (only for delivery) */}
              {formData.deliveryMethod === 'delivery' && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-transparent">
                    <h5 className="fw-bold mb-0">Delivery Address</h5>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">City *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Area *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.area ? 'is-invalid' : ''}`}
                          name="area"
                          value={formData.area}
                          onChange={handleInputChange}
                        />
                        {errors.area && <div className="invalid-feedback">{errors.area}</div>}
                      </div>
                      <div className="col-12">
                        <label className="form-label">Street Address *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                      </div>
                      <div className="col-12">
                        <label className="form-label">Delivery Instructions</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          name="instructions"
                          value={formData.instructions}
                          onChange={handleInputChange}
                          placeholder="Any special instructions for delivery..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Method */}
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-transparent">
                  <h5 className="fw-bold mb-0">Payment Method</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">
                          <i className="bi bi-cash me-2"></i>Cash on Delivery
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">
                          <i className="bi bi-credit-card me-2"></i>Credit Card
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          value="mobile"
                          checked={formData.paymentMethod === 'mobile'}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">
                          <i className="bi bi-phone me-2"></i>Mobile Payment
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm sticky-top">
                <div className="card-header bg-transparent">
                  <h5 className="fw-bold mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  {/* Order Items */}
                  {items.map((item) => (
                    <div key={item.cartItemId} className="d-flex justify-content-between mb-2">
                      <div>
                        <span className="fw-bold">{item.name}</span>
                        <small className="d-block text-muted">Qty: {item.quantity}</small>
                        {item.selectedExtras && item.selectedExtras.length > 0 && (
                          <small className="d-block text-muted">
                            + {item.selectedExtras.map(e => e.name).join(', ')}
                          </small>
                        )}
                      </div>
                      <span>${(item.totalPrice * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  
                  <hr />
                  
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {formData.deliveryMethod === 'delivery' && (
                    <div className="d-flex justify-content-between mb-2">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="d-flex justify-content-between mb-3">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <hr />
                  
                  <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                    <span>Total</span>
                    <span>
                      ${formData.deliveryMethod === 'delivery' ? total.toFixed(2) : (total - deliveryFee).toFixed(2)}
                    </span>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    <i className="bi bi-credit-card me-2"></i>
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;