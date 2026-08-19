import React from 'react';

const About = () => {
  return (
    <div className="about-page-modern">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="about-hero-title">About Tokkumaa Restaurant</h1>
              <p className="about-hero-subtitle">
                Authentic Ethiopian cuisine crafted with tradition and passion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="story-content">
                <h2 className="story-title">Our Story</h2>
                <p className="story-lead">
                  Tokkumaa Restaurant was born from a deep love for authentic Ethiopian cuisine and 
                  a desire to share the rich culinary traditions of our homeland.
                </p>
                <p className="story-text">
                  Founded in 2021 in Burayu, Oromia, we have been dedicated to preserving the 
                  authentic flavors and cooking methods passed down through generations. Our journey 
                  began with our founder's grandmother's recipes, carefully preserved and perfected 
                  over decades.
                </p>
                <p className="story-text">
                  Today, we're proud to serve the community with traditional dishes prepared using 
                  time-honored techniques, premium spices directly sourced from Ethiopian markets, 
                  and the freshest local ingredients. Every dish we serve tells a story of Ethiopian 
                  culture and heritage.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant interior"
                  className="story-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="values-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title-modern">Our Mission & Values</h2>
              <p className="section-subtitle-modern">
                The principles that guide everything we do
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <h5 className="value-title">Tradition</h5>
                <p className="value-description">
                  We honor the authentic preparation methods and recipes that have been 
                  cherished in Ethiopian culture for centuries.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className="bi bi-gem"></i>
                </div>
                <h5 className="value-title">Authenticity</h5>
                <p className="value-description">
                  From sourcing Ethiopian spices to using traditional cooking methods, 
                  authenticity is at the heart of everything we do.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h5 className="value-title">Community</h5>
                <p className="value-description">
                  We believe in building connections through food, creating a 
                  welcoming space for everyone to gather and enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Team */}
      <section className="chefs-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title-modern text-white">Meet Our Master Chefs</h2>
              <p className="section-subtitle-modern text-white-muted">
                The artisans behind our authentic Ethiopian cuisine
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="chef-card">
                <div className="chef-image-wrapper">
                  <img 
                    src="https://this-person-does-not-exist.com/img/avatar-gen117f8f58f63c4b418b7bb1dc6f427c34.jpg"
                    className="chef-image"
                    alt="Chef Almaz Tadesse"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                  <div className="chef-overlay">
                    <div className="chef-social">
                      <i className="bi bi-instagram"></i>
                      <i className="bi bi-facebook"></i>
                      <i className="bi bi-twitter"></i>
                    </div>
                  </div>
                </div>
                <div className="chef-info">
                  <h5 className="chef-name">Almaz Tadesse</h5>
                  <p className="chef-position">Head Chef & Owner</p>
                  <p className="chef-description">
                    Almaz learned traditional Ethiopian cooking from her grandmother. With 20 years 
                    of experience, she ensures every dish maintains authentic Ethiopian flavors.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="chef-card">
                <div className="chef-image-wrapper">
                  <img 
                    src="https://this-person-does-not-exist.com/img/avatar-gen11f5d4d89e244b6b9f43b2e2c5e8b7c1.jpg"
                    className="chef-image"
                    alt="Chef Meron Bekele"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                  <div className="chef-overlay">
                    <div className="chef-social">
                      <i className="bi bi-instagram"></i>
                      <i className="bi bi-facebook"></i>
                      <i className="bi bi-twitter"></i>
                    </div>
                  </div>
                </div>
                <div className="chef-info">
                  <h5 className="chef-name">Meron Bekele</h5>
                  <p className="chef-position">Injera Specialist</p>
                  <p className="chef-description">
                    Meron is our injera master, using traditional fermentation techniques 
                    to create the perfect sourdough flatbread that's the foundation of Ethiopian dining.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="chef-card">
                <div className="chef-image-wrapper">
                  <img 
                    src="https://this-person-does-not-exist.com/img/avatar-gen116c3f8b9f2c4e4e8a5f3c2d1e9a8b7.jpg"
                    className="chef-image"
                    alt="Chef Dawit Haile"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                  <div className="chef-overlay">
                    <div className="chef-social">
                      <i className="bi bi-instagram"></i>
                      <i className="bi bi-facebook"></i>
                      <i className="bi bi-twitter"></i>
                    </div>
                  </div>
                </div>
                <div className="chef-info">
                  <h5 className="chef-name">Dawit Haile</h5>
                  <p className="chef-position">Spice Master</p>
                  <p className="chef-description">
                    Dawit sources and blends our signature berbere and mitmita spice mixes, 
                    ensuring authentic Ethiopian flavors in every dish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="quality-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="quality-content">
                <h2 className="quality-title">Our Quality Promise</h2>
                <div className="quality-points">
                  <div className="quality-point">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Fresh ingredients sourced from local Ethiopian markets</span>
                  </div>
                  <div className="quality-point">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Authentic berbere and spice blends made fresh daily</span>
                  </div>
                  <div className="quality-point">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Traditional injera fermented for 3 days using teff flour</span>
                  </div>
                  <div className="quality-point">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Halal-certified meat prepared according to Islamic guidelines</span>
                  </div>
                  <div className="quality-point">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Traditional Ethiopian coffee ceremony experience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="quality-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Fresh ingredients"
                  className="quality-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-6">
              <div className="stat-card">
                <h3 className="stat-number">5K+</h3>
                <p className="stat-label">Happy Customers</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-card">
                <h3 className="stat-number">8+</h3>
                <p className="stat-label">Traditional Chefs</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-card">
                <h3 className="stat-number">20+</h3>
                <p className="stat-label">Traditional Dishes</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-card">
                <h3 className="stat-number">3+</h3>
                <p className="stat-label">Years Serving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="awards-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title-modern">Awards & Recognition</h2>
              <p className="section-subtitle-modern">
                Recognition for our commitment to culinary excellence
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="award-card">
                <div className="award-icon">
                  <i className="bi bi-trophy-fill"></i>
                </div>
                <h6 className="award-title">Best Ethiopian Restaurant</h6>
                <p className="award-subtitle">Burayu Dining Awards 2023</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="award-card">
                <div className="award-icon">
                  <i className="bi bi-star-fill"></i>
                </div>
                <h6 className="award-title">Authentic Cuisine</h6>
                <p className="award-subtitle">Ethiopian Community Award</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="award-card">
                <div className="award-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <h6 className="award-title">Community Favorite</h6>
                <p className="award-subtitle">Local Business Awards 2024</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="award-card">
                <div className="award-icon">
                  <i className="bi bi-shield-check-fill"></i>
                </div>
                <h6 className="award-title">Food Safety Excellence</h6>
                <p className="award-subtitle">Health Department 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;