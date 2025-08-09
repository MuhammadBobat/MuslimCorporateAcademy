import React, { useEffect } from 'react';
import './Mission.css';

const missionText = [
  "A 2017 Guardian report revealed that Islamophobia continues to hold UK Muslims back in the workplace, with only 6% securing professional jobs compared to 10% of the overall population in England and Wales <a href='https://www.theguardian.com/society/2017/sep/07/islamophobia-holding-back-uk-muslims-in-workplace-study-finds' target='_blank' rel='noopener noreferrer' style='color: #0066cc; font-style: italic; text-decoration: underline;'>(Asthana, 2017)</a>. Founded by three Muslim brothers with a shared passion for faith and professional excellence, the Academy aims to tackle these barriers. We empower students from all backgrounds to pursue careers in law, finance, technology, and beyond - all while staying firmly grounded in Islamic principles.",
  "We recognise the unique challenges Muslims face in today’s educational and professional spaces. Whether it’s maintaining salah during a 9 to 5, navigating environments that feel unfamiliar, or choosing a career in industries that often overlook faith-based values, we understand the obstacles...",
  "...and we’re here to offer solutions.",
  "Through our weekly blogs, we share career insights and reflections on current affairs from an Islamic lens. Our tailored tuition services support students in excelling academically and developing practical skills. But more than that, we aim to inspire the next generation of Muslim professionals. Confident in their faith, equipped with relevant knowledge, and ready to lead.",
  "At a time when corporate education is often inaccessible or unfamiliar to many young Muslims, we see a powerful opportunity: to change that narrative, nurture untapped potential, and show that you never have to compromise your deen when success calls."
];

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
      <section className="mission-hero-section animate-on-scroll">
        <div className="container">
          <h1 className="mission-hero-title">Our Mission</h1>
          <p className="mission-hero-subtitle">Empowering students to succeed in the modern world, guided by principles of faith.</p>
        </div>
      </section>
      <section className="mission-main-section animate-on-scroll">
        <div className="container">
          <div className="mission-main-content">
            <p className="mission-main-text" dangerouslySetInnerHTML={{ __html: missionText[0] }}></p>
            <div className="mission-highlight-block">
              <span className="mission-highlight">{missionText[1]}</span>
              <span className="mission-highlight">{missionText[2]}</span>
            </div>
            <p className="mission-main-text">{missionText[3]}</p>
            <p className="mission-main-text">{missionText[4]}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission; 