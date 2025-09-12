import React, { useEffect } from "react";
import "./GetInvolved.css";

const GetInvolved = () => {
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
    <div className="get-involved">
      <section className="involved-hero">
        <div className="container">
          <h1 className="involved-hero-title animate-on-scroll">Get Involved</h1>
          <p className="involved-hero-subtitle animate-on-scroll">
            Join our mission to empower Muslim students in the corporate world
          </p>
        </div>
      </section>

      <section className="involvement-options">
        <div className="container">
          <h2 className="section-title animate-on-scroll">How You Can Help</h2>
          
          <div className="options-grid">
            <div 
              className="option-card animate-on-scroll"
              style={{
                backgroundImage: `url('/GI1.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="option-card-overlay">
                <h3>Join Our Team</h3>
                <p>
                  Become a mentor, tutor, or team member. Share your expertise 
                  and help shape the future of Muslim professionals.
                </p>
                <div className="option-details">
                  <h4>What We Are Looking For:</h4>
                  <ul>
                    <li>Experienced professionals in various fields</li>
                    <li>Passionate educators and mentors</li>
                    <li>Individuals committed to Islamic values</li>
                  </ul>
                </div>
              </div>
            </div>

            <div 
              className="option-card animate-on-scroll"
              style={{
                backgroundImage: `url('/GI2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="option-card-overlay">
                <h3>Partner With Us</h3>
                <p>
                  If you're an organisation or institution that wants to partner with us 
                  in creating meaningful opportunities for Muslim students and professionals, 
                  we'd love to explore collaboration possibilities.
                </p>
                <div className="option-details">
                  <h4>Partnership Opportunities:</h4>
                  <ul>
                    <li>Community outreach programs</li>
                    <li>Online webinars and educational sessions</li>
                    <li>Educational collaborations and curriculum development</li>
                    <li>Corporate mentorship and internship programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div 
          className="contact-background"
          style={{
            backgroundImage: `url('/contact.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="contact-overlay">
            <div className="container">
              <div className="contact-content">
                <div className="contact-text animate-on-scroll">
                  <h2>Ready to Get Started?</h2>
                  <p>
                    Whether you want to join our team or explore partnership opportunities, 
                    we would love to hear from you. Let us discuss how we can work together 
                    to make a difference.
                  </p>
                </div>
                <div className="contact-info animate-on-scroll">
                  <p><strong>Email:</strong> <a href="mailto:info@muslimcorporateacademy.org?subject=Get Involved Enquiry">info@muslimcorporateacademy.org</a></p>
                  <p><strong>Subject:</strong> Get Involved Enquiry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
