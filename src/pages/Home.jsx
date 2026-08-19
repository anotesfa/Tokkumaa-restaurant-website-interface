import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuData, popularItems, featuredItems } from '../data/menuData';
import FoodCard from '../components/food/FoodCard';
import AnimateOnScroll from '../components/common/AnimateOnScroll';
import ImagePreloader from '../components/common/ImagePreloader';

const Home = () => {
  const popularFoods = popularItems.slice(0, 6);
  const featuredFoods = featuredItems.slice(0, 3);
  const newArrivals = menuData.filter(item => item.id > 15).slice(0, 4); // Latest items

  // Get top rated items for the hero carousel
  const getTopRatedItems = () => {
    const topItems = menuData
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8); // Top 8 best rated items
    
    // Debug logging
    console.log('Top rated items for carousel:', topItems.map(item => ({
      name: item.name,
      rating: item.rating,
      image: item.image
    })));
    
    return topItems;
  };

  // Carousel functionality
  let currentSlide = 0;
  const totalSlides = getTopRatedItems().length;

  const navigateCarousel = (direction) => {
    const carousel = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.carousel-card');
    const indicators = document.querySelectorAll('.indicator');

    if (direction === 'next') {
      currentSlide = (currentSlide + 1) % totalSlides;
    } else {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }

    // Update active states
    cards.forEach((card, index) => {
      card.classList.toggle('active', index === currentSlide);
    });

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });

    // Transform carousel
    const translateX = -currentSlide * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
  };

  const goToSlide = (index) => {
    currentSlide = index;
    const carousel = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.carousel-card');
    const indicators = document.querySelectorAll('.indicator');

    // Update active states
    cards.forEach((card, idx) => {
      card.classList.toggle('active', idx === index);
    });

    indicators.forEach((indicator, idx) => {
      indicator.classList.toggle('active', idx === index);
    });

    // Transform carousel
    const translateX = -index * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
  };

  // Auto-advance carousel
  useEffect(() => {
    const autoAdvance = setInterval(() => {
      navigateCarousel('next');
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(autoAdvance);
  }, []);

  // Collect all images for preloading
  const allImages = [
    ...popularFoods.map(food => food.image),
    ...featuredFoods.map(food => food.image),
    ...newArrivals.map(food => food.image),
    ...getTopRatedItems().map(item => item.image)
  ].filter(Boolean);

  // Expose functions to global scope for onclick handlers
  window.navigateCarousel = navigateCarousel;
  window.goToSlide = goToSlide;

  return (
    <div className="home-page">
      {/* Preload Images */}
      <ImagePreloader images={allImages} />
      
      {/* Hero Section - Split Layout */}
      <section className="hero-section-split">
        <div className="hero-background-overlay"></div>
        
        {/* Floating Particles */}
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        <div className="container-fluid h-100">\n          <div className="row h-100 align-items-center">
            {/* Left Side - Savor Every Moment */}
            <div className="col-lg-6 col-md-12 hero-left-section">
              <div className="hero-content-left">
                <div className="hero-tagline fade-in">
                  <span className="tagline-accent">🇪🇹 Authentic Ethiopian Cuisine</span>
                </div>
                <h1 className="hero-title-split fade-in stagger-1">
                  Taste the
                  <span className="hero-title-accent"> Tradition</span>
                </h1>
                <p className="hero-subtitle-split fade-in stagger-2">
                  Experience authentic Ethiopian flavors with our traditional dishes prepared using time-honored recipes 
                  and the finest Ethiopian spices. Every meal is a journey through Ethiopia's rich culinary heritage.
                </p>
                <div className="hero-stats fade-in stagger-3">
                  <div className="stat-item">
                    <div className="stat-number">20+</div>
                    <div className="stat-label">Traditional Dishes</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <div className="stat-number">4.9★</div>
                    <div className="stat-label">Customer Rating</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <div className="stat-number">25min</div>
                    <div className="stat-label">Fast Delivery</div>
                  </div>
                </div>
                <div className="hero-buttons-split fade-in stagger-4">
                  <Link to="/menu" className="btn btn-primary-gradient btn-lg hover-lift-hero">
                    <i className="bi bi-bag-heart me-2"></i>
                    Order Now
                    <div className="btn-shine"></div>
                  </Link>
                  <Link to="/menu" className="btn btn-outline-light-premium btn-lg hover-lift-hero">
                    <i className="bi bi-menu-button-wide me-2"></i>
                    Explore Menu
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Best Rated Foods & Drinks Carousel */}
            <div className="col-lg-6 col-md-12 hero-right-section">
              <div className="hero-carousel-container fade-in stagger-2">
                <div className="carousel-header">
                  <h3 className="carousel-title">
                    <i className="bi bi-star-fill me-2"></i>
                    Best Rated Favorites
                  </h3>
                  <div className="carousel-subtitle">Customer's Top Choices</div>
                </div>
                
                <div className="hero-food-carousel" id="heroFoodCarousel">
                  <div className="carousel-track">
                    {/* Best Rated Foods */}
                    {getTopRatedItems().map((item, index) => (
                      <div key={item.id} className={`carousel-card ${index === 0 ? 'active' : ''}`}>
                        <div className="food-card-hero">
                          <div className="card-image-container">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="card-image"
                              loading="eager"
                              onError={(e) => {
                                e.target.src = "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23FF6B35'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3E🍽️%3C/text%3E%3C/svg%3E";
                              }}
                            />
                            <div className="rating-badge">
                              <i className="bi bi-star-fill"></i>
                              <span>{item.rating}</span>
                            </div>
                            {item.popular && (
                              <div className="popular-badge">
                                <i className="bi bi-fire"></i>
                                Popular
                              </div>
                            )}
                          </div>
                          <div className="card-content">
                            <h5 className="food-name-hero">{item.name}</h5>
                            <p className="food-category">{item.category}</p>
                            <p className="food-description-hero">{item.description}</p>
                            <div className="card-footer">
                              <div className="price-section">
                                <span className="price-hero">${item.price}</span>
                              </div>
                              <Link 
                                to={`/food/${item.id}`} 
                                className="btn btn-sm btn-hero-card"
                              >
                                <i className="bi bi-plus-circle me-1"></i>
                                Add
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Carousel Navigation */}
                  <div className="carousel-navigation">
                    <button className="carousel-btn prev-btn" onClick={() => navigateCarousel('prev')}>
                      <i className="bi bi-chevron-left"></i>
                    </button>
                    <div className="carousel-indicators">
                      {getTopRatedItems().map((_, index) => (
                        <button 
                          key={index}
                          className={`indicator ${index === 0 ? 'active' : ''}`}
                          onClick={() => goToSlide(index)}
                        ></button>
                      ))}
                    </div>
                    <button className="carousel-btn next-btn" onClick={() => navigateCarousel('next')}>
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
                
                {/* Floating Action */}
                <div className="floating-action">
                  <Link to="/menu" className="btn btn-floating">
                    <i className="bi bi-grid-3x3-gap"></i>
                    <span>View All {menuData.length} Items</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-5 section-navy-primary navy-section">
        <div className="section-overlay"></div>
        <div className="container position-relative" style={{ zIndex: 10 }}>
          <AnimateOnScroll animation="slide-up">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 className="display-5 fw-bold mb-4 text-white">Customer Favorites</h2>
                <p className="lead text-white-muted">
                  Our most-loved dishes that keep customers coming back for more
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          
          <div className="row g-4">
            {popularFoods.map((food, index) => (
              <div key={food.id} className="col-lg-4 col-md-6">
                <AnimateOnScroll 
                  animation="card-entrance" 
                  delay={index * 100}
                >
                  <FoodCard food={food} />
                </AnimateOnScroll>
              </div>
            ))}
          </div>

          <AnimateOnScroll animation="zoom-in">
            <div className="text-center mt-5 pt-4">
              <Link to="/menu" className="btn btn-outline-light btn-lg hover-lift">
                <i className="bi bi-grid me-2"></i>
                View All {menuData.length}+ Items
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section Separator */}
      <div className="section-separator"></div>

      {/* Why Choose Us Section */}
      <section className="py-5 section-navy-blur navy-section">
        <div className="container position-relative" style={{ zIndex: 10 }}>
          <AnimateOnScroll animation="slide-up">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <div className="section-badge mb-4">
                  <i className="bi bi-award me-2"></i>
                  Our Promise
                </div>
                <h2 className="display-4 fw-bold mb-4 text-white section-title">
                  Why Choose <span className="text-gradient">Tokkumaa</span>?
                </h2>
                <p className="lead text-white-muted section-description">
                  Experience authentic Ethiopian hospitality and traditional flavors, prepared with 
                  genuine Ethiopian spices and cooking methods that have been perfected over generations
                </p>
                <div className="section-divider mx-auto mt-4"></div>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6 text-center">
              <AnimateOnScroll animation="fade-in" delay={100}>
                <div className="feature-card-modern p-4 hover-lift h-100">
                  <div className="feature-icon-modern mb-4">
                    <i className="bi bi-clock-history"></i>
                  </div>
                  <h5 className="fw-bold mb-3 text-white">Lightning Fast Delivery</h5>
                  <p className="text-white-muted">
                    Hot, fresh meals delivered to your doorstep in 30 minutes or less with 
                    real-time GPS tracking and temperature-controlled packaging
                  </p>
                  <div className="feature-highlight">
                    <span className="highlight-text">30min guarantee</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <AnimateOnScroll animation="fade-in" delay={200}>
                <div className="feature-card-modern p-4 hover-lift h-100">
                  <div className="feature-icon-modern mb-4">
                    <i className="bi bi-gem"></i>
                  </div>
                  <h5 className="fw-bold mb-3 text-white">Premium Ingredients</h5>
                  <p className="text-white-muted">
                    Exclusively sourced from certified local farms and international suppliers, 
                    ensuring every dish meets our exceptional quality standards
                  </p>
                  <div className="feature-highlight">
                    <span className="highlight-text">Farm to table</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <AnimateOnScroll animation="fade-in" delay={300}>
                <div className="feature-card-modern p-4 hover-lift h-100">
                  <div className="feature-icon-modern mb-4">
                    <i className="bi bi-person-badge"></i>
                  </div>
                  <h5 className="fw-bold mb-3 text-white">Master Chefs</h5>
                  <p className="text-white-muted">
                    Award-winning culinary artists with decades of experience, 
                    crafting each dish with precision, passion, and innovative techniques
                  </p>
                  <div className="feature-highlight">
                    <span className="highlight-text">Award winning</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <AnimateOnScroll animation="fade-in" delay={400}>
                <div className="feature-card-modern p-4 hover-lift h-100">
                  <div className="feature-icon-modern mb-4">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <h5 className="fw-bold mb-3 text-white">Safety Certified</h5>
                  <p className="text-white-muted">
                    Rigorous food safety protocols, contactless delivery options, 
                    and certified kitchen practices ensuring your health and peace of mind
                  </p>
                  <div className="feature-highlight">
                    <span className="highlight-text">100% safe</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="section-separator"></div>

      {/* Featured Dishes Section */}
      {featuredFoods.length > 0 && (
        <section className="py-5 section-navy-primary navy-section">
          <div className="section-overlay"></div>
          <div className="container position-relative" style={{ zIndex: 10 }}>
            <AnimateOnScroll animation="slide-up">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <div className="section-badge mb-4">
                    <i className="bi bi-star me-2"></i>
                    Chef's Selection
                  </div>
                  <h2 className="display-4 fw-bold mb-4 text-white section-title">
                    <span className="text-gradient">Signature</span> Collection
                  </h2>
                  <p className="lead text-white-muted section-description">
                    Handpicked by our executive chef - exceptional dishes that showcase 
                    culinary artistry and premium ingredients in perfect harmony
                  </p>
                  <div className="section-divider mx-auto mt-4"></div>
                </div>
              </div>
            </AnimateOnScroll>
            
            <div className="row g-4">
              {featuredFoods.map((food, index) => (
                <div key={food.id} className="col-lg-4 col-md-6">
                  <AnimateOnScroll 
                    animation="slide-in-right" 
                    delay={index * 150}
                  >
                    <div className="premium-food-card">
                      <FoodCard food={food} />
                      <div className="chef-signature">
                        <i className="bi bi-award-fill me-2"></i>
                        Chef's Choice
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section Separator */}
      <div className="section-separator"></div>

      {/* New Arrivals Section */}
      {newArrivals.length > 0 && (
        <section className="py-5 section-navy-secondary navy-section">
          <div className="section-overlay-light"></div>
          <div className="container position-relative" style={{ zIndex: 10 }}>
            <AnimateOnScroll animation="slide-up">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <div className="section-badge mb-4 new-badge-special">
                    <i className="bi bi-sparkles me-2"></i>
                    New Arrivals
                  </div>
                  <h2 className="display-4 fw-bold mb-4 text-white section-title">
                    Fresh & <span className="text-gradient">Exciting</span>
                  </h2>
                  <p className="lead text-white-muted section-description">
                    Be among the first to experience our latest culinary innovations - 
                    bold flavors and creative combinations that push culinary boundaries
                  </p>
                  <div className="section-divider mx-auto mt-4"></div>
                </div>
              </div>
            </AnimateOnScroll>
            
            <div className="row g-4">
              {newArrivals.map((food, index) => (
                <div key={food.id} className="col-lg-3 col-md-6">
                  <AnimateOnScroll 
                    animation="zoom-in" 
                    delay={index * 100}
                  >
                    <div className="new-arrival-card-modern position-relative">
                      <FoodCard food={food} />
                      <div className="new-item-badge">
                        <span className="new-pulse"></span>
                        <i className="bi bi-star-fill me-1"></i>
                        NEW
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section Separator */}
      <div className="section-separator"></div>

      {/* Call to Action Section */}
      <section className="py-5 section-navy-blur navy-section">
        <div className="container position-relative" style={{ zIndex: 10 }}>
          <div className="row">
            <div className="col-12 text-center">
              <AnimateOnScroll animation="fade-in">
                <div className="cta-card text-white rounded-3 p-5 shadow-modern hover-glow position-relative">
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient opacity-75 rounded-3"></div>
                  <div className="position-relative" style={{ zIndex: 2 }}>
                    <h3 className="display-6 fw-bold mb-3">Ready to Order?</h3>
                    <p className="lead mb-4">
                      Join thousands of satisfied customers and experience authentic Ethiopian cuisine today.
                      <br />Over 20 traditional Ethiopian dishes waiting for you!
                    </p>
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                      <Link to="/menu" className="btn btn-outline-light btn-lg px-5 py-3 hover-lift btn-ripple">
                        <i className="bi bi-bag me-2"></i>
                        Start Ordering Now
                      </Link>
                      <Link to="/menu?category=featured" className="btn btn-light btn-lg px-5 py-3 hover-lift">
                        <i className="bi bi-star me-2"></i>
                        View Chef's Specials
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;