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
    name: 'Mohamed Jama',
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

  // Career Convos title typing animation
  useEffect(() => {
    const text = "Here's How We Are Different… Introducing Career Convos";
    const typingElement = document.getElementById('career-convos-title');
    
    if (!typingElement) return;

    // Clear any existing content
    typingElement.textContent = '';

    let index = 0;
    const typeSpeed = 70; // milliseconds per character
    let hasStarted = false;

    const typeText = () => {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typeSpeed);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          setTimeout(typeText, 50); // Start typing immediately when section is visible
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.01, // Very low threshold - triggers as soon as any part is visible
      rootMargin: '0px 0px 0px 0px' // Trigger as soon as section appears at bottom of screen
    });

    const section = document.querySelector('.career-convos');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Career Convos subtitle typing animation
  useEffect(() => {
    const text = "Linking Your Conventional Education to Real-World Success";
    const typingElement = document.getElementById('career-convos-subtitle');
    
    if (!typingElement) return;

    // Clear any existing content
    typingElement.textContent = '';

    let index = 0;
    const typeSpeed = 55; // slightly faster for subtitle
    let hasStarted = false;

    const typeText = () => {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typeSpeed);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          setTimeout(typeText, 1200); // Start subtitle typing sooner
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.01, // Very low threshold - triggers as soon as any part is visible
      rootMargin: '0px 0px 0px 0px' // Trigger as soon as section appears at bottom of screen
    });

    const section = document.querySelector('.career-convos');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);



  const [selected, setSelected] = useState(0);
  const [showEmbeddedForm, setShowEmbeddedForm] = useState(false);
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
        <div className="container">
          <div className="subject-tiles-container">
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
        </div>
      </section>



      {/* Career Convos Section */}
      <section className="career-convos">
        <div className="container">
          {/* Title Section */}
          <div className="career-convos-header animate-on-scroll">
            <h2 className="section-title">
              <span className="typing-text" id="career-convos-title"></span>
              <span className="cursor">|</span>
            </h2>
            <h3 className="career-convos-subtitle" style={{ color: '#2d5a2d', marginBottom: '40px' }}>
              <span className="typing-subtitle-text" id="career-convos-subtitle" style={{ color: '#2d5a2d' }}></span>
              <span className="cursor">|</span>
            </h3>
          </div>

          {/* First Content Block - Text Left, Image Right */}
          <div className="mission-content">
            <div className="mission-text animate-on-scroll">
              <div className="mission-description">
                <p>
                Too often, tuition feels like a checklist. Generic lessons, rushed homework, and tutors who don’t really care. At MCA, we prioritise real connection. Our tutors truly care about and support your growth in the classroom and beyond, helping you link your learning to bigger goals.
                </p>
                <p>
                That’s why we’ve introduced two unique features to make your learning experience more personal, meaningful, and effective: <b>Career Convos</b> and <b>Study Skills Sessions</b>.

                </p>
              </div>
            </div>
            <div className="mission-visual animate-on-scroll">
              <div className="mission-icon">
                <img src="/mission.jpeg" alt="Career Convos" className="mission-image" />
              </div>
            </div>
          </div>

          {/* Feature Tiles */}
          <div className="tuition-feature-tiles">
            <div 
              className="tuition-feature-tile animate-on-scroll"
              style={{
                backgroundImage: `url('/tuition1.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="tuition-tile-overlay">
                <h3>Career Convos</h3>
                <p>
                On top of your regular tutoring, you’ll also get the chance to connect 1:1 with someone already pursuing your dream course, degree, or apprenticeship. Whether that’s Law, Finance, Engineering, or something else. These conversations give you honest advice, a real look at what the journey involves, and clarity on the path ahead.
                </p>
                <p>
                  And the best part? It's all included in your lesson fee, so no extra costs, just extra value!
                </p>
              </div>
            </div>

            <div 
              className="tuition-feature-tile animate-on-scroll"
              style={{
                backgroundImage: `url('/tuition2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="tuition-tile-overlay">
                <h3>Study Skills Sessions</h3>
                <p>
                Every few lessons, we pause for a focused Study Skills Session. In just 15-20 minutes, students work with their tutor to reflect on progress and strengthen study habits through <b>faith-guided principles</b>. The sessions also create space to think about future goals, review university course requirements, and map out a personalised path forward. Each check-in leaves students with greater confidence, sustained motivation, and a clear sense of direction.
                </p>
              </div>
            </div>
          </div>

      {/* Investment Section */}
      <section className="investment-section">
        <div className="container">
          <div className="investment-content">
            <h2 className="investment-title">So what are you waiting for?</h2>
            <p className="investment-subtitle">
              Invest in your academic and personal success. Here's what your <b>£25/hr sessions</b> include:
            </p>
            
            {/* Benefits Carousel */}
            <div className="benefits-carousel">
              <div className="benefits-track">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 8L12 3L22 8L12 13L2 8Z" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <path d="M6 10V15C6 16.1046 9.13401 17 12 17C14.866 17 18 16.1046 18 15V10" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h4>Personalised Tuition</h4>
                  <p>Focused, tailored support in your chosen subject with expert tutors who understand your learning style.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10" stroke="#2d5a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#2d5a2d" stroke-width="2"/>
                      <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="#2d5a2d" stroke-width="1"/>
                    </svg>
                  </div>
                  <h4>Study Skills Sessions</h4>
                  <p>Built-in reflection time to track progress, set goals, and develop effective revision strategies.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#2d5a2d" stroke-width="2" stroke-linejoin="round"/>
                      <path d="M8 9H16M8 13H12" stroke="#2d5a2d" stroke-width="2" stroke-linecap="round"/>
                      <path d="M14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7Z" fill="#2d5a2d"/>
                    </svg>
                  </div>
                  <h4>Career Convos</h4>
                  <p>Connect directly with professionals in your dream field for real-world insights and career guidance.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2d5a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="#2d5a2d" stroke-width="2"/>
                      <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.6977C21.7033 16.0413 20.9999 15.5714 20.2 15.35" stroke="#2d5a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#2d5a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h4>Ongoing Mentorship</h4>
                  <p>Our tutors are not just there for lessons. They are a message away whenever you need support or guidance.</p>
                </div>
                
                {/* Duplicate cards for infinite loop */}
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 8L12 3L22 8L12 13L2 8Z" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <path d="M6 10V15C6 16.1046 9.13401 17 12 17C14.866 17 18 16.1046 18 15V10" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h4>Personalised Tuition</h4>
                  <p>Focused, tailored support in your chosen subject with expert tutors who understand your learning style.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10" stroke="#2d5a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#2d5a2d" stroke-width="2"/>
                      <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="#2d5a2d" stroke-width="1"/>
                    </svg>
                  </div>
                  <h4>Study Skills Sessions</h4>
                  <p>Built-in reflection time to track progress, set goals, and develop effective revision strategies.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#2d5a2d" stroke-width="2" stroke-linejoin="round"/>
                      <path d="M8 9H16M8 13H12" stroke="#2d5a2d" stroke-width="2" stroke-linecap="round"/>
                      <path d="M14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7Z" fill="#2d5a2d"/>
                    </svg>
                  </div>
                  <h4>Career Convos</h4>
                  <p>Connect directly with professionals in your dream field for real-world insights and career guidance.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2d5a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="#2d5a2d" stroke-width="2"/>
                      <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.6977C21.7033 16.0413 20.9999 15.5714 20.2 15.35" stroke="#2d5a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#2d5a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h4>Ongoing Mentorship</h4>
                  <p>Our tutors are not just there for lessons. They are a message away whenever you need support or guidance.</p>
                </div>
              </div>
            </div>
            
            <div className="scroll-hint mobile-only">
              ← Swipe to see more benefits →
            </div>
            
            <div className="charity-note">
              <p>5% of all proceeds go straight to charity to support ongoing conflicts, like the Genocide in Gaza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready Section */}
      <div className="container ready-section">
        <h3>Ready to get started?</h3>
      </div>

      {/* Action Buttons Section */}
        <div className="container tuition-action-buttons">
          <button 
            className="btn btn-tuition-action"
          onClick={() => setShowEmbeddedForm(!showEmbeddedForm)}
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

          {/* Embedded Form Section */}
          {showEmbeddedForm && (
            <div className="embedded-form-container">
              <div className="embedded-form-header">
                <h3>MCA Support - Enquiries for Tuition, Interview Prep, Application Support and More</h3>
                <button 
                  className="close-form-btn"
                  onClick={() => setShowEmbeddedForm(false)}
                >
                  ×
                </button>
              </div>
              <iframe
                src="https://tally.so/r/mKjq08"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="MCA Support Form"
                className="embedded-form-iframe"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tuition; 