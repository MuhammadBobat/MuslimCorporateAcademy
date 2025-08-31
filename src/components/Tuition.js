import React, { useEffect, useState, useRef } from 'react';
import './Tuition.css';

const tutors = [
  {
    subject: 'Chemistry',
    name: 'Ibrahim Jamal',
    teaches: 'Chemistry',
    studying: 'MB Medicine, Cambridge',
    achieved: '5 A* (A-levels)',
    ayah: 'Indeed, Allah is with the patient. (2:153)'
  },
  {
    subject: 'Maths',
    name: 'Muhammad Bobat',
    teaches: 'Maths',
    studying: 'BSc Computer Science, University of Manchester',
    achieved: 'A*A*A*A* (A-levels)',
    ayah: 'And He found you lost and guided [you]. (93:7)'
  },
  {
    subject: 'Biology',
    name: 'Burhan Khan',
    teaches: 'Biology',
    studying: 'BDS Dentistry, University of Manchester',
    achieved: 'A*A*A (A-levels)',
    ayah: 'And say: My Lord, increase me in knowledge. (20:114)'
  },
  {
    subject: 'Physics',
    name: 'Yusuf Patel',
    teaches: 'Physics',
    studying: 'BSc Physics, Manchester',
    achieved: 'A*A*A (A-levels)',
    ayah: 'So which of the favors of your Lord would you deny? (55:13)'
  },
  {
    subject: 'Psychology',
    name: 'Muhammad Jama',
    teaches: 'Psychology',
    studying: 'LLB Law, University of Manchester',
    achieved: 'A* in Psychology (A-levels)',
    ayah: 'Verily, with hardship comes ease. (94:6)'
  },
  {
    subject: 'History',
    name: 'Omar Farooq',
    teaches: 'History',
    studying: 'BA History, Cambridge',
    achieved: 'A*AA (A-levels)',
    ayah: 'And the Hereafter is better for you than the first [life]. (93:4)'
  }
];

const subjects = tutors.map(t => t.subject);

const Tuition = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
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

  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();

  return (
    <div className="tuition">
      {/* Hero Section */}
      <section className="tuition-hero">
        <div className="container">
          <h1 className="hero-title animate-on-scroll">MCA Tuition</h1>
          <p className="hero-subtitle animate-on-scroll">
            1:1 Online Tuition for GCSE & A-Level
          </p>
        </div>
      </section>

      {/* Tutor Slider and Subject Tiles */}
      <section className="tutor-slider-section">
        <div className="container tutor-slider-layout">
          {/* Left: Title and Description */}
          <div className="tutor-slider-left">
            <h2 className="slider-title">Taught by the Best, for the Best</h2>
            <p className="slider-desc">
              Our tutors are current students at top UK universities, studying competitive courses like Computer Science, Law, Engineering and Medicine. They’ve been through the process themselves, and know exactly what it takes to succeed.<br/><br/>
              We have faced the same exams, the same pressure, and the same challenges. That’s why we don’t just teach harder, we teach smarter. Every session is tailored to your goals, designed to boost confidence, and deliver results.
            </p>
          </div>
          {/* Right: Tutor Slider */}
          <div className="tutor-slider-right">
            <div className="tutor-slider-outer">
              <div
                className="tutor-slider-inner"
                ref={sliderRef}
                style={{
                  width: `${tutors.length * 100}%`,
                  transform: `translateX(-${selected * (100 / tutors.length)}%)`,
                  transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)'
                }}
              >
                {tutors.map((tutor, idx) => (
                  <div className="tutor-slider-tile" key={tutor.subject} style={{ width: `${100 / tutors.length}%` }}>
                    <div className="tutor-slider-imgblock">
                      {/* Placeholder face icon SVG */}
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#2d5a2d" strokeWidth="2" fill="#f8f9fa"/>
                        <ellipse cx="12" cy="10" rx="4" ry="3.5" fill="#b2d8b2" />
                        <ellipse cx="9.5" cy="10.5" rx="0.7" ry="1" fill="#222" />
                        <ellipse cx="14.5" cy="10.5" rx="0.7" ry="1" fill="#222" />
                        <path d="M9.5 15c1.5 1 3.5 1 5 0" stroke="#2d5a2d" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                      </svg>
                      <div className="tutor-slider-name">{tutor.name}</div>
                    </div>
                    <div className="tutor-slider-info">
                      <div><b>Teaches:</b> {tutor.teaches}</div>
                      <div><b>Studying:</b> {tutor.studying}</div>
                      <div><b>Achieved:</b> {tutor.achieved}</div>
                      <div><b>Favourite Ayah:</b> <span className="ayah-quote">{tutor.ayah}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Subject Tiles */}
        <div className="container subject-tile-row">
          {subjects.map((subject, idx) => (
            <button
              key={subject}
              className={`subject-tile-btn${selected === idx ? ' selected' : ''}`}
              onClick={() => setSelected(idx)}
            >
              {subject}
            </button>
          ))}
        </div>
        {/* New action buttons below subject tiles */}
        <div className="container tuition-action-buttons">
          <button 
            className="btn btn-tuition-action"
            onClick={() => window.open('https://forms.gle/ELUfS3vcmmrE63Vk7', '_blank')}
          >
            Sign up for Tutoring Now
          </button>
          <button 
            className="btn btn-tuition-action"
                            onClick={() => window.open('mailto:info@muslimcorporateacademy.org', '_blank')}
          >
            Send us an Email
          </button>
        </div>
        {/* Section divider for topic change */}
        <div className="tuition-section-line"></div>
      </section>
    </div>
  );
};

export default Tuition; 