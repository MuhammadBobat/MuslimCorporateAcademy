import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HERO_TITLE = 'Empowering Students to Pursue Impactful Roles through Islamic Principles';
const HERO_SUBTITLE = 'Grounded in Tawakkul and Qadr, we prepare you for success in the corporate world';

const Home = () => {
  const heroRef = useRef(null);
  const rafRef = useRef();
  const [titleFillCount, setTitleFillCount] = useState(0);
  const [subtitleFillCount, setSubtitleFillCount] = useState(0);

  // Helper to reset fill state
  const resetHeroFill = () => {
    setTitleFillCount(0);
    setSubtitleFillCount(0);
  };

  useEffect(() => {
    resetHeroFill();
    window.addEventListener('popstate', resetHeroFill);
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const hero = heroRef.current;
        if (!hero) return;
        const heroTop = hero.offsetTop;
        const heroHeight = hero.offsetHeight;
        const scrollY = window.scrollY;
        // Split the scroll range: first half for title, second half for subtitle
        const fillStart = heroTop;
        const fillEnd = heroTop + heroHeight * 0.5;
        let progress = (scrollY - fillStart) / (fillEnd - fillStart);
        progress = Math.max(0, Math.min(1, progress));
        // Title fills in first half, subtitle in second half
        const titleProgress = Math.min(1, progress * 2);
        const subtitleProgress = Math.max(0, (progress - 0.5) * 2);
        setTitleFillCount(Math.round(titleProgress * HERO_TITLE.length));
        setSubtitleFillCount(Math.round(subtitleProgress * HERO_SUBTITLE.length));
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', resetHeroFill);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    // Animate other scroll elements
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

  const renderFilledText = (text, fillCount, className) => {
    const isMobile = window.innerWidth <= 768 || 
                     window.matchMedia('(max-width: 768px)').matches ||
                     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      const words = text.split(' ');
      let currentCharCount = 0;
      
      return (
        <span className={className}>
          {words.map((word, wordIndex) => {
            const wordStartChar = currentCharCount;
            const wordEndChar = currentCharCount + word.length;
            const isWordVisible = wordEndChar <= fillCount;
            
            const wordChars = word.split('').map((char, charIndex) => {
              const globalCharIndex = wordStartChar + charIndex;
              const isCharVisible = globalCharIndex < fillCount;
              
              return (
                <span
                  key={`${wordIndex}-${charIndex}`}
                  className={isCharVisible ? 'char-filled' : 'char-unfilled'}
                >
                  {char}
                </span>
              );
            });
            
            currentCharCount += word.length + 1;
            
            return (
              <span key={wordIndex} className="word-wrapper">
                {wordChars}
                {wordIndex < words.length - 1 && (
                  <span className={wordEndChar < fillCount ? 'char-filled' : 'char-unfilled'}>
                    {' '}
                  </span>
                )}
              </span>
            );
          })}
        </span>
      );
    } else {
      return (
        <span className={className}>
          {text.split('').map((char, i) => (
            <span
              key={i}
              className={i < fillCount ? 'char-filled' : 'char-unfilled'}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      );
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div 
          className="hero-background"
          style={{
            backgroundImage: `url('/frontpage.jpeg')`
          }}
        >
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          {/* Quranic Ayah Calligraphy */}
          <div className="ayah-block animate-on-scroll">
            <img src="/arabic.svg" alt="Quranic Calligraphy" className="ayah-svg" />
            <div className="ayah-translation">
              <em>"But above those ranking in knowledge is the One All-Knowing." Qur'an 12:76</em>
            </div>
          </div>
          <div style={{height: '3rem'}}></div>
          <h1 className="hero-title animate-on-scroll">
            {renderFilledText(HERO_TITLE, titleFillCount, 'hero-fill-letters')}
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            {renderFilledText(HERO_SUBTITLE, subtitleFillCount, 'hero-fill-letters')}
          </p>
          <div className="hero-buttons animate-on-scroll">
            <Link to="/mission" className="btn btn-primary">What is MCA?</Link>
            <Link to="/blog" className="btn btn-secondary">Read Our Blog</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title text-center animate-on-scroll">What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                {/* Graduation Hat Icon */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8L12 3L22 8L12 13L2 8Z" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                  <path d="M6 10V15C6 16.1046 9.13401 17 12 17C14.866 17 18 16.1046 18 15V10" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Academic Excellence</h3>
              <p>Comprehensive GCSE and A-Level tuition support across all major subjects with experienced tutors.</p>
              <div className="feature-card-footer">
                <Link to="/tuition" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                {/* Speech Bubble Icon */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5C21 16.1944 16.5228 20 11 20C9.624 20 8.312 19.792 7.12 19.416L3 21L4.584 16.88C3.208 15.688 2 13.6944 2 11.5C2 6.80558 6.47715 3 12 3C17.5228 3 21 6.80558 21 11.5Z" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Interview Preparation</h3>
              <p>Mock interviews and guidance for corporate role applications and internships.</p>
              <div className="feature-card-footer">
                <Link to="/tuition#interview" className="learn-more" onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById('interview');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}>Learn More →</Link>
              </div>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                {/* Buildings Icon */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="10" width="4" height="10" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                  <rect x="9" y="6" width="4" height="14" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                  <rect x="15" y="13" width="4" height="7" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Commercial Awareness</h3>
              <p>Weekly blog posts covering industry insights and current affairs.</p>
              <div className="feature-card-footer">
                <Link to="/blog" className="learn-more">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text animate-on-scroll">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-description">
              At The Muslim Corporate Academy, our mission is simple yet powerful: to help Muslims thrive in the corporate world without compromising their Islamic values.
              </p>
              <p className="mission-description">
              <em>Because success means little if it comes at the cost of who we are.</em>
              </p>
              <Link to="/mission" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="mission-visual animate-on-scroll">
              <div className="mission-icon">
                <img src="/mission.jpeg" alt="Our Mission" className="mission-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 