import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="contact-page py-5">
      <div className="container">
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
            <p className="lead text-muted">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-transparent border-0 pb-0">
                <h4 className="fw-bold mb-0">Send us a Message</h4>
              </div>
              <div className="card-body p-4">
                {submitMessage && (
                  <div className="alert alert-success" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Subject *</label>
                      <select
                        className="form-select"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="order">Order Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                        <option value="catering">Catering Services</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info">
              {/* Contact Details */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">Get in Touch</h5>
                  
                  <div className="contact-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="contact-icon me-3">
                        <i className="bi bi-geo-alt-fill fs-4 text-primary"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Address</h6>
                        <p className="text-muted mb-0">
                          Ashewameda Burayu<br />
                          Oromia, Ethiopia
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="contact-icon me-3">
                        <i className="bi bi-telephone-fill fs-4 text-primary"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Phone</h6>
                        <p className="text-muted mb-0">
                          <a href="tel:+251945744342" className="text-decoration-none">
                            +251 94 574 4342
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="contact-icon me-3">
                        <i className="bi bi-envelope-fill fs-4 text-primary"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Email</h6>
                        <p className="text-muted mb-0">
                          <a href="mailto:anamtesfa@gmail.com" className="text-decoration-none">
                            anamtesfa@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="d-flex align-items-center">
                      <div className="contact-icon me-3">
                        <i className="bi bi-clock-fill fs-4 text-primary"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Hours</h6>
                        <p className="text-muted mb-0">
                          Mon - Sun: 8:00 AM - 10:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">Follow Us</h5>
                  <div className="d-flex gap-3">
                    <a href="#" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <div 
                    className="map-placeholder bg-light rounded d-flex align-items-center justify-content-center"
                    style={{ height: '250px' }}
                  >
                    <div className="text-center">
                      <i className="bi bi-map display-4 text-muted mb-2"></i>
                      <p className="text-muted mb-0">Interactive Map</p>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h4 className="fw-bold mb-0">Frequently Asked Questions</h4>
              </div>
              <div className="card-body">
                <div className="accordion accordion-flush" id="faqAccordion">
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                      <button 
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                      >
                        What are your delivery hours?
                      </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        We deliver from 8:00 AM to 10:00 PM, seven days a week. Orders placed after 9:30 PM will be delivered the next day.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                      <button 
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                      >
                        Do you offer catering services?
                      </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Yes! We offer traditional Ethiopian catering for events of all sizes. Contact us at least 48 hours in advance to discuss your requirements for authentic Ethiopian dining experiences.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                      <button 
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                      >
                        What payment methods do you accept?
                      </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        We accept cash on delivery, mobile money transfers (M-Birr, HelloCash), and bank transfers. Credit card payments are also available for advance orders.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                      <button 
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                      >
                        Do you have vegetarian and vegan options?
                      </button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Yes! Ethiopian cuisine has many naturally vegetarian dishes including our vegetarian combo platter with shiro, gomen, misir wat, and atakilt wat. All dishes are prepared without animal products except where specified.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;