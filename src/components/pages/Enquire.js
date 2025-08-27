import React, { useEffect } from "react";
import "./Enquire.css";

const Enquire = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="enquire">
      <section className="enquire-hero">
        <div className="container">
          <h1 className="hero-title animate-on-scroll">Get In Touch</h1>
          <p className="hero-subtitle animate-on-scroll">
            Have questions? We are here to help you on your journey
          </p>
        </div>
      </section>

      <section className="enquiry-forms">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Enquiry Forms</h2>
          
          <div className="forms-grid">
            <div className="form-card animate-on-scroll">
              <h3>General Enquiry</h3>
              <p>Have a general question about our services or academy?</p>
              <div className="form-placeholder">
                <div className="placeholder-text">General Enquiry Form</div>
                <small>Form will be implemented here</small>
              </div>
            </div>

            <div className="form-card animate-on-scroll">
              <h3>Tuition Enquiry</h3>
              <p>Interested in our tuition services?</p>
              <div className="form-placeholder">
                <div className="placeholder-text">Tuition Enquiry Form</div>
                <small>Form will be implemented here</small>
              </div>
            </div>

            <div className="form-card animate-on-scroll">
              <h3>Partnership Enquiry</h3>
              <p>Want to partner with us or get involved?</p>
              <div className="form-placeholder">
                <div className="placeholder-text">Partnership Form</div>
                <small>Form will be implemented here</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text animate-on-scroll">
              <h2>Contact Information</h2>
              <p>
                For immediate assistance or to discuss your specific needs, 
                please reach out to us directly.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong>
                  <a href="mailto:info@muslimcorporateacademy.org">
                    info@muslimcorporateacademy.org
                  </a>
                </div>
                <div className="contact-item">
                  <strong>Response Time:</strong>
                  <span>Within 24 hours</span>
                </div>
              </div>
            </div>
            <div className="contact-visual animate-on-scroll">
              <div className="visual-placeholder">
                <div className="placeholder-text">Contact Visual</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquire;
