import React, { useEffect } from "react";
import "./PersonalStatement.css";

const PersonalStatement = () => {
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
    <div className="personal-statement">
      <section className="ps-hero">
        <div className="ps-container">
          <h1 className="ps-hero-title animate-on-scroll">Personal Statement Support</h1>
          <p className="ps-hero-subtitle animate-on-scroll">
            Craft compelling personal statements that showcase your unique journey and Islamic values
          </p>
        </div>
      </section>

      <section className="ps-services">
        <div className="ps-container">
          <h2 className="section-title animate-on-scroll">Our Services</h2>
          
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#2d5a2d"/>
                </svg>
              </div>
              <h3>Statement Review</h3>
              <p>
                Get expert feedback on your personal statement with detailed comments 
                on structure, content, and impact.
              </p>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#2d5a2d"/>
                </svg>
              </div>
              <h3>Content Development</h3>
              <p>
                Work with our mentors to develop compelling content that highlights 
                your achievements and Islamic values.
              </p>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#2d5a2d"/>
                </svg>
              </div>
              <h3>Subject-Specific Guidance</h3>
              <p>
                Receive tailored advice for your chosen field of study, 
                ensuring your statement aligns with course requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ps-process">
        <div className="ps-container">
          <div className="process-content">
            <div className="process-text animate-on-scroll">
              <h2>Our Process</h2>
              <div className="process-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <div className="step-content">
                    <h4>Initial Consultation</h4>
                    <p>Discuss your goals and review your current statement</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <div className="step-content">
                    <h4>Content Development</h4>
                    <p>Work together to enhance your narrative and achievements</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <div className="step-content">
                    <h4>Final Review</h4>
                    <p>Polish your statement for maximum impact</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-visual animate-on-scroll">
              <div className="visual-placeholder">
                <div className="placeholder-text">Process Visual</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalStatement;
