import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const { orderNumber, orderData } = location.state || {};

  if (!orderNumber) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Order Not Found</h2>
          <p>No order information available.</p>
          <Link to="/menu" className="btn btn-primary">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const estimatedDeliveryTime = new Date(Date.now() + 45 * 60000); // 45 minutes from now

  return (
    <div className="order-success-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <div className="success-icon mb-4">
                <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '4rem' }}></i>
              </div>
              <h1 className="display-4 fw-bold text-success mb-3">Order Confirmed!</h1>
              <p className="lead text-muted">
                Thank you for choosing Tokkumaa Restaurant. Your order has been received and is being prepared.
              </p>
            </div>

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <div className="row g-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Order Details</h5>
                    <div className="mb-2">
                      <strong>Order Number:</strong> #{orderNumber}
                    </div>
                    <div className="mb-2">
                      <strong>Estimated {orderData?.deliveryMethod === 'delivery' ? 'Delivery' : 'Pickup'} Time:</strong>
                      <br />
                      {estimatedDeliveryTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="mb-2">
                      <strong>Payment Method:</strong> {orderData?.paymentMethod === 'cash' ? 'Cash on Delivery' : 
                        orderData?.paymentMethod === 'card' ? 'Credit Card' : 'Mobile Payment'}
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Customer Information</h5>
                    <div className="mb-2">
                      <strong>Name:</strong> {orderData?.fullName}
                    </div>
                    <div className="mb-2">
                      <strong>Phone:</strong> {orderData?.phone}
                    </div>
                    <div className="mb-2">
                      <strong>Email:</strong> {orderData?.email}
                    </div>
                  </div>
                </div>

                {orderData?.deliveryMethod === 'delivery' && (
                  <div className="mt-4">
                    <h5 className="fw-bold mb-3">Delivery Address</h5>
                    <p className="mb-0">
                      {orderData.address}<br />
                      {orderData.area}, {orderData.city}
                      {orderData.instructions && (
                        <>
                          <br />
                          <small className="text-muted">Instructions: {orderData.instructions}</small>
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-transparent">
                <h5 className="fw-bold mb-0">Order Items</h5>
              </div>
              <div className="card-body">
                {orderData?.items?.map((item) => (
                  <div key={item.cartItemId} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <div>
                      <span className="fw-bold">{item.name}</span>
                      <small className="d-block text-muted">Quantity: {item.quantity}</small>
                      {item.selectedExtras && item.selectedExtras.length > 0 && (
                        <small className="d-block text-muted">
                          Extras: {item.selectedExtras.map(e => e.name).join(', ')}
                        </small>
                      )}
                    </div>
                    <span className="fw-bold">${(item.totalPrice * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                
                <div className="d-flex justify-content-between fw-bold fs-5 mt-3 pt-2">
                  <span>Total</span>
                  <span>${orderData?.total?.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/track-order" className="btn btn-primary btn-lg">
                  <i className="bi bi-truck me-2"></i>
                  Track Order
                </Link>
                <Link to="/" className="btn btn-outline-primary btn-lg">
                  <i className="bi bi-house me-2"></i>
                  Back to Home
                </Link>
                <Link to="/menu" className="btn btn-outline-primary btn-lg">
                  <i className="bi bi-menu-button-wide me-2"></i>
                  View Menu
                </Link>
              </div>
            </div>

            <div className="alert alert-info mt-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-info-circle-fill me-3 fs-5"></i>
                <div>
                  <strong>What's Next?</strong>
                  <p className="mb-0">
                    You'll receive SMS and email updates about your order status. 
                    Our team will contact you if there are any changes to the estimated time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;