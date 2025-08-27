import React, { useEffect } from "react";
import "./CVSupport.css";

const CVSupport = () => {
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
    <div className="cv-support">
      <section className="cv-hero">
        <div className="container">
          <h1 className="hero-title animate-on-scroll">CV and Application Support</h1>
          <p className="hero-subtitle animate-on-scroll">
            Professional guidance for your career applications and development
          </p>
        </div>
      </section>

      <section className="cv-content">
        <div className="container">
          <div className="coming-soon">
            <div className="coming-soon-content animate-on-scroll">
              <h2>Coming Soon</h2>
              <p>
                We are currently developing our CV and Application Support services. 
                This comprehensive program will include:
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">📝</span>
                  <span>CV Review and Optimization</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span>Application Strategy</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💼</span>
                  <span>Interview Preparation</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📧</span>
                  <span>Cover Letter Support</span>
                </div>
              </div>
              
              <p className="update-note">
                Stay tuned for updates on this exciting new service!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVSupport;
