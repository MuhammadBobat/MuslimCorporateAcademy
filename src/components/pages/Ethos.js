import React, { useEffect } from "react";
import "./Ethos.css";

const Ethos = () => {
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
    <div className="ethos">
      <section className="ethos-hero">
        <div className="container">
          <h1 className="hero-title animate-on-scroll">Our Islamic Ethos</h1>
          <p className="hero-subtitle animate-on-scroll">
            Grounding our educational approach in timeless Islamic principles
          </p>
        </div>
      </section>

      <section className="core-values">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Core Islamic Values</h2>
          
          <div className="values-grid">
            <div className="value-card animate-on-scroll">
              <div className="value-icon">
                <div className="icon-placeholder">🕌</div>
              </div>
              <h3>Tawakkul (Trust in Allah)</h3>
              <p>
                We believe in putting our trust in Allah while taking the necessary steps 
                to achieve our goals. This principle guides our approach to education.
              </p>
            </div>

            <div className="value-card animate-on-scroll">
              <div className="value-icon">
                <div className="icon-placeholder">💎</div>
              </div>
              <h3>Ikhlas (Sincerity)</h3>
              <p>
                Every action we take is done with pure intention and sincerity. 
                Our educational services are about genuinely helping students grow.
              </p>
            </div>

            <div className="value-card animate-on-scroll">
              <div className="value-icon">
                <div className="icon-placeholder">🤝</div>
              </div>
              <h3>Adl (Justice)</h3>
              <p>
                We believe in providing equal opportunities and fair treatment to all students, 
                regardless of their background.
              </p>
            </div>

            <div className="value-card animate-on-scroll">
              <div className="value-icon">
                <div className="icon-placeholder">📚</div>
              </div>
              <h3>Ilm (Knowledge)</h3>
              <p>
                The pursuit of knowledge is a sacred duty in Islam. We encourage our students 
                to seek knowledge as a means of drawing closer to Allah.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-integration">
        <div className="container">
          <div className="integration-content">
            <div className="integration-text animate-on-scroll">
              <h2>How Our Values Shape Education</h2>
              <p>
                Our Islamic ethos is not just a set of principles we talk about - 
                it is the foundation of everything we do. From our teaching methods 
                to our student interactions, every aspect of our academy reflects 
                these timeless values.
              </p>
            </div>
            <div className="integration-visual animate-on-scroll">
              <div className="visual-placeholder">
                <div className="placeholder-text">Islamic Values Visual</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ethos;
