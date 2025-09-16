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
      description: "Sincerity turns ordinary actions into lasting worship. By purifying intentions, even study and career become ways to serve Allah. Ikhlas helps students see ambition not just as worldly pursuit, but as contribution with purpose and meaning."
    },
    {
      name: "Ilm",
      arabic: "علم",
      translation: "Knowledge",
      description: "“Iqra” was the first command revealed to our Prophet ﷺ, and it remains at the heart of progress. Pursuing Islamic and worldly knowledge with passion and reflection is part of our ethos. MCA empowers students to continue this tradition of excellence that has defined our ummah."
    },
    {
      name: "Tawakkul",
      arabic: "توكل",
      translation: "Trust in Allah",
      description: "Trust in Allah is the foundation of true success. At MCA, we encourage students to approach every challenge with conviction that Allah is the best of planners, and that He provides a way through every difficulty. This mindset is what drives lasting success in both dunya and akhirah."
    },
    {
      name: "Sabr",
      arabic: "صبر",
      translation: "Patience",
      description: "Patience is essential whether you’re waiting on exam results, job opportunities, or personal milestones. Embracing sabr reminds us that Allah’s timing is supreme. This discipline builds resilience, helping our students remain focused in their studies and careers without losing sight of their faith."
    },
    {
      name: "Shukr",
      arabic: "شكر",
      translation: "Gratitude",
      description: "Gratitude transforms how we see achievement. Recognising Allah’s blessings, even in moments of stress or challenge, gives perspective. MCA fosters this mindset of shukr so students learn that contentment and appreciation are key drivers of both professional and spiritual growth."
    },
    {
      name: "Taqwa",
      arabic: "تقوى",
      translation: "God-Consciousness",
      description: "Consciousness of Allah is the believer’s compass. It guides us away from what displeases Him and inspires us to pursue what earns His pleasure. With taqwa, our community develops the integrity and discipline needed to succeed as Muslims and leaders."
    },
    {
      name: "Haya",
      arabic: "حياء",
      translation: "Modesty",
      description: "Modesty in speech, conduct, and appearance stems from reverence for Allah, not people’s opinions. Haya elevates dignity and self-respect, empowering students to carry themselves with confidence while staying true to their values."
    },
    {
      name: "Ihsan",
      arabic: "إحسان",
      translation: "Excellence",
      description: "Striving for excellence is central to our ethos. At MCA, we believe every action is an opportunity for ihsan, whether in academia, careers, or personal growth. Ambition and excellence should shape both faith and goals, driving success in this life and the next."
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
