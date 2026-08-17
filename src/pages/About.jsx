import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="hero-title">About Tokkumaa Restaurant</h1>
              <p className="hero-subtitle">
                Authentic Ethiopian cuisine in the heart of Burayu
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
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="lead mb-4">
                Tokkumaa Restaurant was born from a deep love for authentic Ethiopian cuisine and 
                a desire to share the rich culinary traditions of our homeland. Founded in 2021 
                in Burayu, Oromia, we have been dedicated to preserving the authentic flavors 
                and cooking methods passed down through generations.
              </p>
              <p className="mb-4">
                Our journey began with our founder's grandmother's recipes, carefully preserved 
                and perfected over decades. Today, we're proud to serve the community with 
                traditional dishes prepared using time-honored techniques, premium spices 
                directly sourced from Ethiopian markets, and the freshest local ingredients.
              </p>
              <p>
                Every dish we serve tells a story of Ethiopian culture, from our signature 
                Doro Wat to our hand-fermented injera. We believe that food is not just 
                nourishment, but a way to connect with our heritage and share it with the world.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant interior"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-5 bg-light-gray">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Our Mission & Values</h2>
              <p className="lead text-muted">
                The principles that guide everything we do
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-heart-fill display-4 text-primary"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Tradition</h5>
                  <p className="text-muted">
                    We honor the authentic preparation methods and recipes that have been 
                    cherished in Ethiopian culture for centuries.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-gem display-4 text-primary"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Authenticity</h5>
                  <p className="text-muted">
                    From sourcing Ethiopian spices to using traditional cooking methods, 
                    authenticity is at the heart of everything we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-people-fill display-4 text-primary"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Community</h5>
                  <p className="text-muted">
                    We believe in building connections through food, creating a 
                    welcoming space for everyone to gather and enjoy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Team */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Meet Our Chefs</h2>
              <p className="lead text-muted">
                The masters of traditional Ethiopian cuisine
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  className="card-img-top"
                  alt="Chef Marcus Rodriguez"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-2">Almaz Tadesse</h5>
                  <p className="text-primary mb-2">Head Chef & Owner</p>
                  <p className="small text-muted">
                    Almaz learned traditional Ethiopian cooking from her grandmother. With 20 years 
                    of experience, she ensures every dish maintains authentic Ethiopian flavors.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  className="card-img-top"
                  alt="Chef Sarah Chen"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-2">Meron Bekele</h5>
                  <p className="text-primary mb-2">Injera Specialist</p>
                  <p className="small text-muted">
                    Meron is our injera master, using traditional fermentation techniques 
                    to create the perfect sourdough flatbread that's the foundation of Ethiopian dining.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  className="card-img-top"
                  alt="Chef David Thompson"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-2">Dawit Haile</h5>
                  <p className="text-primary mb-2">Spice Master</p>
                  <p className="small text-muted">
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
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Our Quality Promise</h2>
              <div className="mb-3">
                <i className="bi bi-check-circle-fill me-3 fs-5"></i>
                <span>Fresh ingredients sourced from local Ethiopian markets</span>
              </div>
              <div className="mb-3">
                <i className="bi bi-check-circle-fill me-3 fs-5"></i>
                <span>Authentic berbere and spice blends made fresh daily</span>
              </div>
              <div className="mb-3">
                <i className="bi bi-check-circle-fill me-3 fs-5"></i>
                <span>Traditional injera fermented for 3 days using teff flour</span>
              </div>
              <div className="mb-3">
                <i className="bi bi-check-circle-fill me-3 fs-5"></i>
                <span>Halal-certified meat prepared according to Islamic guidelines</span>
              </div>
              <div className="mb-4">
                <i className="bi bi-check-circle-fill me-3 fs-5"></i>
                <span>Traditional Ethiopian coffee ceremony experience</span>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Fresh ingredients"
                className="img-fluid rounded-3"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-primary mb-2">5K+</h3>
                <p className="text-muted mb-0">Happy Customers</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-primary mb-2">8+</h3>
                <p className="text-muted mb-0">Traditional Chefs</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-primary mb-2">20+</h3>
                <p className="text-muted mb-0">Traditional Dishes</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-primary mb-2">3</h3>
                <p className="text-muted mb-0">Years Serving Burayu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-5 bg-light-gray">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Awards & Recognition</h2>
              <p className="lead text-muted">
                Recognition for our commitment to culinary excellence
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-md-4 col-6 text-center">
              <div className="award-item p-3">
                <i className="bi bi-trophy-fill display-4 text-warning mb-3"></i>
                <h6 className="fw-bold">Best Ethiopian Restaurant</h6>
                <p className="small text-muted mb-0">Burayu Dining Awards 2023</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6 text-center">
              <div className="award-item p-3">
                <i className="bi bi-star-fill display-4 text-warning mb-3"></i>
                <h6 className="fw-bold">Authentic Cuisine</h6>
                <p className="small text-muted mb-0">Ethiopian Community Award</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6 text-center">
              <div className="award-item p-3">
                <i className="bi bi-heart-fill display-4 text-danger mb-3"></i>
                <h6 className="fw-bold">Community Favorite</h6>
                <p className="small text-muted mb-0">Local Business Awards 2024</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6 text-center">
              <div className="award-item p-3">
                <i className="bi bi-shield-check-fill display-4 text-success mb-3"></i>
                <h6 className="fw-bold">Food Safety Excellence</h6>
                <p className="small text-muted mb-0">Health Department 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;