import React, { useEffect } from "react";
import "./Socials.css";

const Socials = () => {
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
    <div className="socials">
      <section className="socials-hero">
        <div className="container">
          <h1 className="hero-title animate-on-scroll">Our Social Media</h1>
          <p className="hero-subtitle animate-on-scroll">
            Stay connected with us across all platforms for the latest updates and insights
          </p>
        </div>
      </section>

      <section className="social-links">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Connect With Us</h2>
          
          <div className="social-grid">
            <div className="social-card animate-on-scroll">
              <div className="social-icon">
                <div className="icon-placeholder">📱</div>
              </div>
              <h3>TikTok</h3>
              <p>Follow us for daily Islamic finance tips and career advice</p>
              <div className="social-placeholder">
                <span>@mca_tiktok</span>
              </div>
            </div>

            <div className="social-card animate-on-scroll">
              <div className="social-icon">
                <div className="icon-placeholder">📷</div>
              </div>
              <h3>Instagram</h3>
              <p>Visual content and behind-the-scenes insights</p>
              <div className="social-placeholder">
                <span>@muslimcorporateacademy</span>
              </div>
            </div>

            <div className="social-card animate-on-scroll">
              <div className="social-icon">
                <div className="icon-placeholder">💼</div>
              </div>
              <h3>LinkedIn</h3>
              <p>Professional networking and industry insights</p>
              <div className="social-placeholder">
                <span>Muslim Corporate Academy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tiktok-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Latest TikTok Content</h2>
          <div className="tiktok-container animate-on-scroll">
            <div className="tiktok-placeholder">
              <div className="placeholder-text">
                TikTok Video Integration
                <br />
                <small>Video will be embedded here</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Socials;
