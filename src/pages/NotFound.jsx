import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="error-content">
              <div className="error-code mb-4">
                <span className="display-1 fw-bold text-primary">4</span>
                <span className="display-1 fw-bold text-secondary">0</span>
                <span className="display-1 fw-bold text-primary">4</span>
              </div>
              
              <h2 className="display-5 fw-bold mb-3">Page Not Found</h2>
              
              <p className="lead text-muted mb-4">
                Oops! The page you're looking for seems to have gone missing. 
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
              
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/" className="btn btn-primary btn-lg">
                  <i className="bi bi-house me-2"></i>
                  Go Home
                </Link>
                <Link to="/menu" className="btn btn-outline-primary btn-lg">
                  <i className="bi bi-menu-button-wide me-2"></i>
                  Browse Menu
                </Link>
              </div>
              
              <div className="mt-5">
                <h5 className="fw-bold mb-3">Quick Links</h5>
                <div className="d-flex gap-4 justify-content-center flex-wrap">
                  <Link to="/about" className="text-decoration-none">
                    <i className="bi bi-info-circle me-2"></i>About Us
                  </Link>
                  <Link to="/contact" className="text-decoration-none">
                    <i className="bi bi-envelope me-2"></i>Contact
                  </Link>
                  <Link to="/favorites" className="text-decoration-none">
                    <i className="bi bi-heart me-2"></i>Favorites
                  </Link>
                  <Link to="/cart" className="text-decoration-none">
                    <i className="bi bi-bag me-2"></i>Cart
                  </Link>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-light rounded">
                <small className="text-muted">
                  <i className="bi bi-lightbulb me-2"></i>
                  <strong>Did you know?</strong> You can use our search feature to find your favorite dishes quickly!
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;