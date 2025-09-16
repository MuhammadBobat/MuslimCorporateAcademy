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
    <div className="socials-page">
      <section className="socials-hero">
        <div className="socials-container">
          <h1 className="socials-hero-title animate-on-scroll">Our Social Media</h1>
          <p className="socials-hero-subtitle animate-on-scroll">
            Stay connected with us across all platforms for the latest updates and insights
          </p>
        </div>
      </section>

      <section className="social-media-section">
        <div className="socials-container socials-split">
          <div className="socials-left">
            <h2 className="section-title animate-on-scroll">Connect With Us</h2>
            <div className="social-grid">
              <a href="https://www.tiktok.com/@mca_uk?_t=ZN-8zmFc1nELHa&_r=1" target="_blank" rel="noopener noreferrer" className="social-platform-card animate-on-scroll">
                <div className="platform-icon">
                  <svg className="tiktok-icon" width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fill="#2d5a2d" d="M9.4 3h3.2c.2 1.8 1.6 3.3 3.4 3.5v3.1c-1.3 0-2.5-.4-3.4-1v5.6c0 2.9-2.3 5.3-5.2 5.3S2 17.1 2 14.2s2.3-5.3 5.2-5.3c.4 0 .8 0 1.2.1v3.2c-.4-.1-.8-.1-1.2-.1-1.2 0-2.1 1-2.1 2.1s.9 2.1 2.1 2.1 2.1-1 2.1-2.1V3z"/>
                  </svg>
                </div>
                <h3>TikTok</h3>
                <p>Follow us for Islamic educational tips and career advice</p>
                <div className="username-display">
                  <span>@mca_uk</span>
                </div>
              </a>

              <a href="https://www.instagram.com/mca.uk?igsh=aHExeGQwajdoYWUw" target="_blank" rel="noopener noreferrer" className="social-platform-card animate-on-scroll">
                <div className="platform-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#2d5a2d"/>
                  </svg>
                </div>
                <h3>Instagram</h3>
                <p>Visual content and behind-the-scenes insights</p>
                <div className="username-display">
                  <span>@mca.uk</span>
                </div>
              </a>

              <div className="social-platform-card animate-on-scroll">
                <div className="platform-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#2d5a2d"/>
                  </svg>
                </div>
                <h3>LinkedIn</h3>
                <p>Professional networking and industry insights</p>
                <div className="username-display">
                  <span>Muslim Corporate Academy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="socials-right">
            <h2 className="section-title animate-on-scroll">Latest TikTok Content</h2>
            <div className="tiktok-container animate-on-scroll">
              <video 
                className="tiktok-video"
                autoPlay 
                muted 
                loop 
                playsInline
                controls
              >
                <source src="/tiktok.MOV" type="video/quicktime" />
                <source src="/tiktok.MOV" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Socials;
