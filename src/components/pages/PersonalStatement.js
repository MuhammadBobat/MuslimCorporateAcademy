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
        <div className="container">
          <h1 className="hero-title animate-on-scroll">Personal Statement Support</h1>
          <p className="hero-subtitle animate-on-scroll">
            Craft compelling personal statements that showcase your unique journey and Islamic values
          </p>
        </div>
      </section>

      <section className="ps-services">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Our Services</h2>
          
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <div className="icon-placeholder">✍️</div>
              </div>
              <h3>Statement Review</h3>
              <p>
                Get expert feedback on your personal statement with detailed comments 
                on structure, content, and impact.
              </p>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <div className="icon-placeholder">🎯</div>
              </div>
              <h3>Content Development</h3>
              <p>
                Work with our mentors to develop compelling content that highlights 
                your achievements and Islamic values.
              </p>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <div className="icon-placeholder">📚</div>
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
        <div className="container">
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
