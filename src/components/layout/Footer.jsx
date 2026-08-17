import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3">Tokkumaa Restaurant</h5>
            <p className="mb-3">
              Experience the rich flavors of authentic Ethiopian cuisine. Our traditional dishes are
              prepared with care using time-honored recipes and the finest spices from Ethiopia.
            </p>
            <div className="social-links d-flex gap-3">
              <a href="#" className="text-decoration-none" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-decoration-none" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-decoration-none" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-decoration-none" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/menu" className="text-decoration-none">Menu</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none">Track Your Order</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none">Delivery Info</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none">Return Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none">Help & FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Contact Info</h5>
            <div className="mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Ashewameda Burayu<br />
              <span className="ms-4">Oromia, Ethiopia</span>
            </div>
            <div className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              +251 94 574 4342
            </div>
            <div className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              anamtesfa@gmail.com
            </div>
            <div className="mb-2">
              <i className="bi bi-clock-fill me-2"></i>
              Open: 8:00 AM - 10:00 PM
            </div>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-center text-md-start">
              &copy; 2026 Tokkumaa Restaurant. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end gap-4">
              <a href="#" className="text-decoration-none small">Privacy Policy</a>
              <a href="#" className="text-decoration-none small">Terms of Service</a>
              <a href="#" className="text-decoration-none small">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;