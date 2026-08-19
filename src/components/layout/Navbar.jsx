import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { favoriteCount } = useFavorites();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-custom sticky-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          <img 
            src="/Tokkuma-logo.png" 
            alt="Tokkumaa Restaurant" 
            height="40" 
            className="d-inline-block align-top me-2 floating"
          />
          Tokkumaa
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
        >
          <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} fs-4`}></i>
        </button>

        {/* Navigation items */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActiveLink('/') ? 'active' : ''}`} 
                to="/"
              >
                <i className="bi bi-house me-1 d-lg-none"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActiveLink('/menu') ? 'active' : ''}`} 
                to="/menu"
              >
                <i className="bi bi-grid me-1 d-lg-none"></i>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`} 
                to="/about"
              >
                <i className="bi bi-info-circle me-1 d-lg-none"></i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`} 
                to="/contact"
              >
                <i className="bi bi-envelope me-1 d-lg-none"></i>
                Contact
              </Link>
            </li>
          </ul>

          {/* Right side items */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className={`nav-link position-relative ${isActiveLink('/favorites') ? 'active' : ''}`} 
                to="/favorites"
                title="Favorites"
              >
                <i className="bi bi-heart"></i>
                {favoriteCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {favoriteCount}
                  </span>
                )}
                <span className="d-lg-none ms-2">Favorites</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link position-relative ${isActiveLink('/cart') ? 'active' : ''}`} 
                to="/cart"
                title="Shopping Cart"
              >
                <i className="bi bi-bag"></i>
                {itemCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    {itemCount}
                  </span>
                )}
                <span className="d-lg-none ms-2">Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;