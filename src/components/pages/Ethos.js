import React, { useState, useEffect } from "react";
import "./Ethos.css";

const Ethos = () => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const islamicValues = [
    {
      name: "Ikhlas",
      arabic: "إخلاص",
      translation: "Sincerity",
      description: "Every lesson we teach and every interaction we have is done with pure intention. We're not just building careers - we're building character rooted in genuine care for our students' success."
    },
    {
      name: "Ilm",
      arabic: "علم",
      translation: "Knowledge",
      description: "Knowledge is sacred in Islam. We don't just teach subjects - we teach students how to learn, think critically, and use their education to serve their communities and please Allah."
    },
    {
      name: "Tawakkul",
      arabic: "توكل",
      translation: "Trust in Allah",
      description: "We guide students to work hard while trusting in Allah's plan. Success comes from effort and faith combined - preparing for the future while accepting Allah's wisdom in outcomes."
    },
    {
      name: "Sabr",
      arabic: "صبر",
      translation: "Patience",
      description: "Academic and career journeys require patience. We teach students to persevere through challenges, knowing that every struggle is an opportunity to grow closer to Allah."
    },
    {
      name: "Shukr",
      arabic: "شكر",
      translation: "Gratitude",
      description: "We help students recognize and appreciate their opportunities, turning every achievement into gratitude to Allah. Success is a blessing to be thankful for, not taken for granted."
    },
    {
      name: "Taqwa",
      arabic: "تقوى",
      translation: "God-Consciousness",
      description: "Every decision in their career should be made with Allah in mind. We guide students to choose paths that align with Islamic values, ensuring their success serves a higher purpose."
    },
    {
      name: "Haya",
      arabic: "حياء",
      translation: "Modesty",
      description: "True confidence comes from modesty and humility. We teach students to be proud of their achievements while remaining humble, knowing that all success comes from Allah."
    },
    {
      name: "Ihsan",
      arabic: "إحسان",
      translation: "Excellence",
      description: "We encourage students to do their best in everything - not for recognition, but because excellence in our work is a form of worship. Every assignment, every interview, every project done with ihsan."
    }
  ];

  const handleNext = () => {
    setCurrentValueIndex((prev) => (prev + 1) % islamicValues.length);
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

  const handlePrevious = () => {
    setCurrentValueIndex((prev) => (prev - 1 + islamicValues.length) % islamicValues.length);
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

  const handleValueClick = (index) => {
    setCurrentValueIndex(index);
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

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
        <div className="ethos-container">
          <h1 className="ethos-page-title animate-on-scroll">Our Islamic Ethos</h1>
          <p className="ethos-page-subtitle animate-on-scroll">
          Grounded in Principles. Growing with Purpose.
          </p>
        </div>
      </section>

      <section className="interactive-values">
        <div className="container">
          <div className="values-intro">
            <h2 className="values-title animate-on-scroll">Our Values</h2>
            <p className="values-description animate-on-scroll">
            At MCA, our ethos is built on timeless Islamic principles. These values form the foundation of success, helping students grow with sincerity, strength, and purpose at every step.
            </p>
          </div>
          
          <div className="values-layout">
            {/* Rotating Octagon Logo */}
            <div className="octagon-container">
              <div className={`octagon-wrapper ${isRotating ? 'rotating' : ''}`}>
                <img 
                  src="/logo.svg" 
                  alt="MCA Logo" 
                  className="octagon-logo"
                  style={{ 
                    transform: `translate(-50%, -50%) rotate(${currentValueIndex * 45}deg)`,
                    transition: 'transform 1s ease-in-out'
                  }}
                />
                
                {/* Clickable Points */}
                {islamicValues.map((value, index) => (
                  <button
                    key={index}
                    className={`value-point ${currentValueIndex === index ? 'active' : ''}`}
                    style={{
                      '--rotation': `${index * 45}deg`,
                      transform: `rotate(${index * 45}deg) translateY(-198px)`, /* Adjusted for bigger logo */
                      transformOrigin: 'center'
                    }}
                    onClick={() => handleValueClick(index)}
                    aria-label={`Select ${value.name}`}
                  >
                    <span 
                      className="point-dot"
                      style={{
                        transform: `rotate(${-index * 45}deg)` /* Counter-rotate to keep Arabic words upright */
                      }}
                    >
                      {value.arabic}
                    </span>
                  </button>
                ))}
              </div>
              
              {/* Navigation Controls */}
              <div className="octagon-controls">
                <button 
                  className="control-btn prev-btn" 
                  onClick={handlePrevious}
                  aria-label="Previous value"
                >
                  ‹
                </button>
                <button 
                  className="control-btn next-btn" 
                  onClick={handleNext}
                  aria-label="Next value"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Value Content */}
            <div className="value-content">
              <div className="value-display animate-on-scroll">
                <div className="value-header">
                  <h2 className="value-name">{islamicValues[currentValueIndex].name}</h2>
                  <div className="value-arabic">{islamicValues[currentValueIndex].arabic}</div>
                  <div className="value-translation">({islamicValues[currentValueIndex].translation})</div>
                </div>
                <p className="value-description">
                  {islamicValues[currentValueIndex].description}
                </p>
              </div>
            </div>
          </div>
          
          <div className="values-footer">
            <div className="values-footer-content animate-on-scroll">
              <p className="values-footer-text">
                We'll be sharing dedicated blog posts exploring each of these values in depth, 
                showing how they apply to your academic and professional journey. Stay tuned for 
                insights that connect Islamic principles to real-world success.
              </p>
              <a href="/blog" className="values-blog-btn">
                Explore Our Blog
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ethos;
