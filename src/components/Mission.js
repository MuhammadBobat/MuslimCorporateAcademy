import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Mission.css';

const Mission = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="mission-page">
      {/* Hero Section */}
      <section className="mission-hero-section animate-on-scroll">
        <div className="mission-hero-bg"></div>
        <div className="container">
          <h1 className="mission-hero-title">Our Mission</h1>
          <p className="mission-hero-subtitle">Empowering students to succeed with faith, knowledge, and purpose.</p>
        </div>
      </section>

      {/* Mission Content Section */}
      <section className="mission-content-section animate-on-scroll">
        <div className="container">
          <div className="mission-layout">
            <div className="mission-text">
              <p className="mission-paragraph">
              At the Muslim Corporate Academy, our mission is to raise a generation of students who excel academically and professionally while remaining firmly rooted in their Islamic identity. We believe that true success should never come at the cost of faith.
              </p>
              <p className="mission-paragraph">
              Through mentorship, guidance, and access to key resources, we help students confidently navigate competitive fields such as law, finance, healthcare, and technology. By connecting education, career readiness, and faith, we empower young Muslims to pursue ambitious goals while staying true to their values.
              </p>
              <p className="mission-paragraph">
              At a time when corporate education is often inaccessible or unfamiliar to many young Muslims, we see a powerful opportunity: to change that narrative, nurture untapped potential, and show that you never have to compromise your deen when success calls.
              </p>
            </div>
            <div className="mission-image">
              <img src="/graduation.png" alt="Graduation ceremony" />
            </div>
          </div>
        </div>
      </section>

      {/* The Need for MCA Section */}
      <section className="need-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">The Need for MCA</h2>
          <p className="need-intro">
            A 2017 Guardian report revealed that Islamophobia continues to hold UK Muslims back in the workplace, with only 6% securing professional jobs compared to 10% of the overall population in England and Wales <a href='https://www.theguardian.com/society/2017/sep/07/islamophobia-holding-back-uk-muslims-in-workplace-study-finds' target='_blank' rel='noopener noreferrer' className="article-link">(Asthana, 2017)</a>.
          </p>
          
          <div className="challenges-layout">
            <div className="challenges-image">
              <img src="/prayer.png" alt="Prayer" />
            </div>
            <div className="challenges-text">
              <h3 className="challenges-heading">But beyond the statistics, the challenges run deeper:</h3>
              <ul className="challenges-list">
                <li>Maintaining Salah during a 9 to 5</li>
                <li>Navigating modesty and unfamiliar environments</li>
                <li>Facing judgement for faith-based choices</li>
                <li>Choosing a career in industries that often overlook our values</li>
                <li>...and much more</li>
              </ul>
              <p className="challenges-conclusion">
                At MCA, we understand these obstacles... </p>
              <p className="challenges-conclusion">
                ...and we're here to offer solutions. We exist to help Muslim students and graduates break through these barriers, excel with confidence, and thrive without compromise in their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="who-are-we-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Who Are We?</h2>
          <p className="section-intro">
            The Academy was founded by three Muslim brothers from Manchester, united by a shared commitment to faith and professional excellence. Recognising the limited opportunities available to themselves and their peers, they established the Academy to address these challenges, guided by their faith and professional experience.
          </p>
          
          <p className="cta-link">
            <Link to="/mentors" className="bold-link">Meet the mentors behind MCA →</Link>
          </p>
        </div>
      </section>

      {/* How Do We Help Section */}
      <section className="how-we-help-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">How Do We Help You?</h2>
          <p className="section-intro">
            At MCA, we offer a growing range of services to support students in both academic excellence and spiritual growth:
          </p>
          
          <div className="services-grid">
            <Link to="/tuition" className="service-tile">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="service-content">
                <h3 className="service-title">GCSE & A-Level Tuition</h3>
                <p className="service-description">Achieve top grades with expert support.</p>
              </div>
            </Link>
            
            <Link to="/cv-support" className="service-tile">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="service-content">
                <h3 className="service-title">Application Support</h3>
                <p className="service-description">Personal statements, mock interviews, CV reviews and career guidance - all in one place.</p>
              </div>
            </Link>
            
            <Link to="/blog" className="service-tile">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 7h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 11h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="service-content">
                <h3 className="service-title">Weekly Blogs</h3>
                <p className="service-description">Faith-based takes on education, student life, and career insights.</p>
              </div>
            </Link>
            
            <Link to="/ethos" className="service-tile">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="service-content">
                <h3 className="service-title">Faith & Spiritual Growth</h3>
                <p className="service-description">Stay grounded in your deen while striving for success.</p>
              </div>
            </Link>
          </div>
          
          <p className="services-description">
            Through our weekly blogs, we share career insights and reflections on current affairs from an Islamic lens. Our tailored tuition services support students in excelling academically and developing practical skills. But more than that, we aim to inspire the next generation of Muslim professionals. Confident in their faith, equipped with relevant knowledge, and ready to lead.
          </p>
          
          <p className="mission-conclusion">
            Everything we do is guided by core principles that shape our approach to education, mentorship, and professional development. These values ensure that every interaction, every lesson, and every piece of guidance we provide aligns with both academic excellence and Islamic teachings.
          </p>
          
          <p className="cta-link">
            <Link to="/ethos" className="bold-link">Explore our Ethos here →</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mission;