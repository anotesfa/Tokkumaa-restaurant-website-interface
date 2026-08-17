import React, { useState } from 'react';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  // Mock order statuses for demonstration
  const mockOrders = {
    'ABC123': {
      status: 'preparing',
      estimatedTime: '25 minutes',
      items: ['Doro Wat', 'Injera Bread', 'Ethiopian Coffee'],
      total: 18.99
    },
    'DEF456': {
      status: 'out-for-delivery',
      estimatedTime: '10 minutes',
      items: ['Margherita Pizza', 'Caesar Salad'],
      total: 29.98
    },
    'GHI789': {
      status: 'delivered',
      estimatedTime: 'Delivered',
      items: ['Grilled Salmon', 'Chocolate Lava Cake'],
      total: 33.98
    }
  };

  const handleTrackOrder = (e) => {
    e.preventDefault();
    
    if (mockOrders[orderNumber.toUpperCase()]) {
      setOrderStatus(mockOrders[orderNumber.toUpperCase()]);
    } else {
      setOrderStatus({ error: 'Order not found' });
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bi-check-circle-fill text-success';
      case 'preparing':
        return 'bi-clock-fill text-warning';
      case 'out-for-delivery':
        return 'bi-truck text-primary';
      case 'delivered':
        return 'bi-check-circle-fill text-success';
      default:
        return 'bi-circle text-muted';
    }
  };

  const orderSteps = [
    { key: 'confirmed', label: 'Order Confirmed', description: 'Your order has been received' },
    { key: 'preparing', label: 'Preparing', description: 'Our chefs are preparing your food' },
    { key: 'out-for-delivery', label: 'Out for Delivery', description: 'Your order is on its way' },
    { key: 'delivered', label: 'Delivered', description: 'Order has been delivered' }
  ];

  return (
    <div className="track-order-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-3">Track Your Order</h1>
              <p className="lead text-muted">
                Enter your order number to see real-time updates
              </p>
            </div>

            {/* Order Number Input */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <form onSubmit={handleTrackOrder}>
                  <div className="row g-3 align-items-end">
                    <div className="col-md-8">
                      <label className="form-label fw-bold">Order Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your order number (e.g., ABC123)"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <button type="submit" className="btn btn-primary btn-lg w-100">
                        <i className="bi bi-search me-2"></i>
                        Track Order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Demo Order Numbers */}
            <div className="alert alert-info mb-4">
              <h6 className="fw-bold mb-2">
                <i className="bi bi-info-circle me-2"></i>
                Demo Order Numbers
              </h6>
              <p className="mb-0 small">
                Try these demo order numbers: <strong>ABC123</strong> (Preparing), 
                <strong>DEF456</strong> (Out for Delivery), <strong>GHI789</strong> (Delivered)
              </p>
            </div>

            {/* Order Status */}
            {orderStatus && (
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  {orderStatus.error ? (
                    <div className="text-center">
                      <i className="bi bi-exclamation-circle text-danger mb-3" style={{ fontSize: '3rem' }}></i>
                      <h4 className="text-danger">Order Not Found</h4>
                      <p className="text-muted">
                        Please check your order number and try again. If you continue to have issues, 
                        please contact our customer service.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-4">
                        <h4 className="fw-bold mb-2">Order #{orderNumber.toUpperCase()}</h4>
                        <p className="text-muted">Estimated time: {orderStatus.estimatedTime}</p>
                      </div>

                      {/* Progress Timeline */}
                      <div className="order-timeline mb-4">
                        {orderSteps.map((step, index) => {
                          const isCompleted = ['confirmed', 'preparing'].includes(step.key) ||
                            (orderStatus.status === 'out-for-delivery' && ['confirmed', 'preparing'].includes(step.key)) ||
                            (orderStatus.status === 'delivered');
                          const isActive = step.key === orderStatus.status;
                          
                          return (
                            <div key={step.key} className="d-flex align-items-center mb-3">
                              <div className={`step-icon me-3 ${isCompleted || isActive ? 'active' : ''}`}>
                                <i className={`bi ${getStatusIcon(isCompleted || isActive ? step.key : 'pending')} fs-4`}></i>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className={`fw-bold mb-1 ${isCompleted || isActive ? 'text-success' : 'text-muted'}`}>
                                  {step.label}
                                </h6>
                                <p className={`mb-0 small ${isCompleted || isActive ? 'text-dark' : 'text-muted'}`}>
                                  {step.description}
                                </p>
                              </div>
                              {isActive && (
                                <div className="loading-spinner me-3"></div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Order Items */}
                      <div className="border-top pt-4">
                        <h6 className="fw-bold mb-3">Order Items</h6>
                        <ul className="list-unstyled">
                          {orderStatus.items.map((item, index) => (
                            <li key={index} className="mb-1">
                              <i className="bi bi-dot me-2"></i>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="text-end mt-3">
                          <strong>Total: ${orderStatus.total.toFixed(2)}</strong>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="border-top pt-4 mt-4">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <h6 className="fw-bold mb-2">Need Help?</h6>
                            <p className="small mb-1">
                              <i className="bi bi-telephone me-2"></i>
                              Call us: (555) 123-4567
                            </p>
                            <p className="small mb-0">
                              <i className="bi bi-envelope me-2"></i>
                              Email: anamtesfa@gmail.com
                            </p>
                          </div>
                          <div className="col-md-6 text-md-end">
                            <h6 className="fw-bold mb-2">Delivery Address</h6>
                            <p className="small mb-0 text-muted">
                              123 Main Street<br />
                              Downtown, City 12345
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;