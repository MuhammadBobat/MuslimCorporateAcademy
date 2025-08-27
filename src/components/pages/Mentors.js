import React, { useEffect } from "react";
import "./Mentors.css";

const Mentors = () => {
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
    <div className="mentors">
      {/* Hero Section */}
      <section className="mentors-hero">
        <div className="container">
          <h1 className="hero-title animate-on-scroll">Our Mentors</h1>
          <p className="hero-subtitle animate-on-scroll">
            Meet the experienced professionals guiding our students towards success
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="mentors-content">
        <div className="container">
          <div className="mentors-grid">
            {/* Placeholder for mentor cards */}
            <div className="mentor-card animate-on-scroll">
              <div className="mentor-image-placeholder">
                <div className="placeholder-text">Mentor Photo</div>
              </div>
              <div className="mentor-info">
                <h3>Mentor Name</h3>
                <p className="mentor-role">Professional Role</p>
                <p className="mentor-description">
                  Brief description of expertise and experience.
                </p>
              </div>
            </div>
            
            <div className="mentor-card animate-on-scroll">
              <div className="mentor-image-placeholder">
                <div className="placeholder-text">Mentor Photo</div>
              </div>
              <div className="mentor-info">
                <h3>Mentor Name</h3>
                <p className="mentor-role">Professional Role</p>
                <p className="mentor-description">
                  Brief description of expertise and experience.
                </p>
              </div>
            </div>
            
            <div className="mentor-card animate-on-scroll">
              <div className="mentor-image-placeholder">
                <div className="placeholder-text">Mentor Photo</div>
              </div>
              <div className="mentor-info">
                <h3>Mentor Name</h3>
                <p className="mentor-role">Professional Role</p>
                <p className="mentor-description">
                  Brief description of expertise and experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentors;
