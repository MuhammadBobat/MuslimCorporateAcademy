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
          <h1 className="cv-hero-title animate-on-scroll">CV and Application Support</h1>
          <p className="cv-hero-subtitle animate-on-scroll">
            Professional guidance for your career applications and development
          </p>
        </div>
      </section>

      {/* Interview and Application Support Section */}
      <section className="interview-prep">
        <div className="container">
          <div className="interview-content">
            <div className="interview-text animate-on-scroll">
              <h2 className="section-title">Interview and Application Support</h2>
              <h4 className="interview-description">
                Stand out where it matters most.
              </h4>
              <p className="interview-description">
                Need help applying for that corporate internship? Want us to review your CV? We have you covered with our range of services.
              </p>
              <div className="interview-features">
                <div className="interview-feature">
                  <div className="feature-icon">
                    {/* Target Icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="5" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="2" fill="#2d5a2d"/>
                    </svg>
                  </div>
                  <span>CV Review</span>
                </div>
                <div className="interview-feature">
                  <div className="feature-icon">
                    {/* Document Icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="3" width="16" height="18" rx="2" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <line x1="8" y1="7" x2="16" y2="7" stroke="#2d5a2d" strokeWidth="1.5"/>
                      <line x1="8" y1="11" x2="16" y2="11" stroke="#2d5a2d" strokeWidth="1.5"/>
                      <line x1="8" y1="15" x2="13" y2="15" stroke="#2d5a2d" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span>Personal Statement Review</span>
                </div>
                <div className="interview-feature">
                  <div className="feature-icon">
                    {/* Briefcase Icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="7" width="18" height="13" rx="2" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <path d="M8 7V5a4 4 0 0 1 8 0v2" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <path d="M3 12h18" stroke="#2d5a2d" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span>Mock Interviews and Feedback (Coming Soon)</span>
                </div>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => window.open('https://tally.so/r/mKjq08', '_blank')}
              >
                Book a Session Now
              </button>
            </div>
            <div className="interview-visual animate-on-scroll">
              <div className="interview-icon">
                <img src="/interview.jpeg" alt="Interview and Application Support" className="interview-image" />
              </div>
            </div>
          </div>
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
