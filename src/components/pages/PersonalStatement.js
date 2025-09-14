import React, { useEffect, useState } from "react";
import "./PersonalStatement.css";

const PersonalStatement = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const handleStepHover = (stepNumber) => {
    setHoveredStep(stepNumber);
  };

  const handleStepLeave = () => {
    setHoveredStep(null);
  };

  const getStepTitle = (stepNumber) => {
    const titles = {
      1: "Initial Consultation",
      2: "Refine with Expert Support", 
      3: "Follow-Up Consultation",
      4: "Final Polish"
    };
    return titles[stepNumber];
  };

  const getStepDescription = (stepNumber) => {
    const descriptions = {
      1: "One of our mentors reviews your statement with you in a detailed consultation. We discuss your goals, strengths, and the specific requirements of your chosen course.",
      2: "Work closely with your mentor to strengthen clarity, structure, and flow. This is where the magic happens as we refine your narrative and enhance your impact.",
      3: "Review the changes we've made together and test the improvements. We ensure every word serves a purpose and strengthens your application.",
      4: "Ensure your statement is concise, compelling, and perfectly tailored for university admissions. This final polish makes all the difference."
    };
    return descriptions[stepNumber];
  };

  return (
    <div className="personal-statement">
      <section className="ps-hero">
        <div className="ps-hero-bg"></div>
        <div className="ps-container">
          <h1 className="ps-hero-title animate-on-scroll">University Application Support</h1>
          <p className="ps-hero-subtitle animate-on-scroll">
            Craft compelling personal statements that showcase your unique journey and Islamic values
          </p>
        </div>
      </section>

      <section className="ps-intro">
        <div className="ps-container">
          <div className="intro-content animate-on-scroll">
            <p className="intro-text">
              Applying to university is an important stepping stone into the corporate world. At MCA, we link this to our mission of nurturing ambitious, disciplined students from a young age. We emphasise the importance of building a strong portfolio of achievements and experiences, which can then be used in personal statements to demonstrate your readiness for both academic excellence and future corporate success.
            </p>
            <button 
              className="cta-button"
              onClick={() => {
                setShowForm(true);
                setTimeout(() => {
                  document.querySelector('.embedded-form-container')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }, 100);
              }}
            >
              Get Personal Statement Support
            </button>
          </div>
        </div>
      </section>

      <section className="ps-format">
        <div className="ps-container">
          <div className="format-content animate-on-scroll">
            <h2 className="section-title">The New Personal Statement Format</h2>
            <p className="format-intro">
              From 2026 onwards, the old 4,000-character essay has been replaced with 3 structured questions that allow you to showcase your preparation and passion more effectively.
            </p>
            
            <div className="questions-container">
              <div className="question-item">
                <h3>Why do you want to study this course?</h3>
                <p>Demonstrate your genuine interest and understanding of the subject area.</p>
              </div>
              <div className="question-item">
                <h3>What have you done to prepare?</h3>
                <p>Highlight relevant experiences, reading, and activities that show your commitment.</p>
              </div>
              <div className="question-item">
                <h3>How have your experiences developed relevant skills?</h3>
                <p>Connect your activities to the skills and qualities needed for your chosen field.</p>
              </div>
            </div>

            <div className="mca-support">
              <h3>How MCA Supports You</h3>
              <div className="support-points">
                <div className="support-point">
                  <h4>Expert Guidance</h4>
                  <p>Blogs that break down each section with clear examples and best practices.</p>
                </div>
                <div className="support-point">
                  <h4>Personalised Feedback</h4>
                  <p>1:1 tailored feedback and edits to strengthen your personal statements.</p>
                </div>
                <div className="support-point">
                  <h4>Strategic Positioning</h4>
                  <p>Guidance on how to stand out and connect experiences to future corporate success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ps-process">
        <div className="ps-container">
          <div className="process-content">
            <div className="process-text animate-on-scroll">
              <h2>Our Process</h2>
              <p className="process-intro">
                Our method is backed by established research in writing pedagogy, showing that iterative cycles of drafting and feedback lead to the strongest written work.
              </p>
            </div>
            <div className="process-visual animate-on-scroll">
              <div className="process-diagram">
                <div className="circle-container">
                  <svg className="process-circle" viewBox="0 0 200 200">
                    {/* Circle background */}
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#e0e0e0" strokeWidth="2"/>
                    
                    {/* Step 1 - Top (0°) */}
                    <circle 
                      cx="100" 
                      cy="30" 
                      r="15" 
                      fill={hoveredStep === 1 ? "#2d5a2d" : "#f0f0f0"} 
                      stroke="#2d5a2d" 
                      strokeWidth="2"
                      className="step-circle"
                      onMouseEnter={() => handleStepHover(1)}
                      onMouseLeave={handleStepLeave}
                    />
                    <text 
                      x="100" 
                      y="35" 
                      textAnchor="middle" 
                      fontSize="12" 
                      fill={hoveredStep === 1 ? "white" : "#2d5a2d"} 
                      fontWeight="600"
                      className={`step-text ${hoveredStep === 1 ? 'hovered' : ''}`}
                    >1</text>
                    
                    {/* Step 2 - Right (90°) */}
                    <circle 
                      cx="170" 
                      cy="100" 
                      r="15" 
                      fill={hoveredStep === 2 ? "#2d5a2d" : "#f0f0f0"} 
                      stroke="#2d5a2d" 
                      strokeWidth="2"
                      className="step-circle"
                      onMouseEnter={() => handleStepHover(2)}
                      onMouseLeave={handleStepLeave}
                    />
                    <text 
                      x="170" 
                      y="105" 
                      textAnchor="middle" 
                      fontSize="12" 
                      fill={hoveredStep === 2 ? "white" : "#2d5a2d"} 
                      fontWeight="600"
                      className={`step-text ${hoveredStep === 2 ? 'hovered' : ''}`}
                    >2</text>
                    
                    {/* Step 3 - Bottom (180°) */}
                    <circle 
                      cx="100" 
                      cy="170" 
                      r="15" 
                      fill={hoveredStep === 3 ? "#2d5a2d" : "#f0f0f0"} 
                      stroke="#2d5a2d" 
                      strokeWidth="2"
                      className="step-circle"
                      onMouseEnter={() => handleStepHover(3)}
                      onMouseLeave={handleStepLeave}
                    />
                    <text 
                      x="100" 
                      y="175" 
                      textAnchor="middle" 
                      fontSize="12" 
                      fill={hoveredStep === 3 ? "white" : "#2d5a2d"} 
                      fontWeight="600"
                      className={`step-text ${hoveredStep === 3 ? 'hovered' : ''}`}
                    >3</text>
                    
                    {/* Step 4 - Left (270°) */}
                    <circle 
                      cx="30" 
                      cy="100" 
                      r="15" 
                      fill={hoveredStep === 4 ? "#2d5a2d" : "#f0f0f0"} 
                      stroke="#2d5a2d" 
                      strokeWidth="2"
                      className="step-circle"
                      onMouseEnter={() => handleStepHover(4)}
                      onMouseLeave={handleStepLeave}
                    />
                    <text 
                      x="30" 
                      y="105" 
                      textAnchor="middle" 
                      fontSize="12" 
                      fill={hoveredStep === 4 ? "white" : "#2d5a2d"} 
                      fontWeight="600"
                      className={`step-text ${hoveredStep === 4 ? 'hovered' : ''}`}
                    >4</text>
                    
                    {/* Center logo */}
                    <circle cx="100" cy="100" r="25" fill="#f8f9fa" stroke="#2d5a2d" strokeWidth="2"/>
                    <image 
                      x="80" 
                      y="80" 
                      width="40" 
                      height="40" 
                      href="/logo.svg"
                      className="center-logo"
                    />
                  </svg>
                </div>
                <div className="step-descriptions">
                  {hoveredStep ? (
                    <div className="step-description active">
                      <h3>{getStepTitle(hoveredStep)}</h3>
                      <p>{getStepDescription(hoveredStep)}</p>
                    </div>
                  ) : (
                    <div className="step-description default">
                      <h3>Our Process</h3>
                      <p>Hover over any step in the circle to learn more about our iterative approach to personal statement development.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ps-cta">
        <div className="ps-cta-bg"></div>
        <div className="ps-container">
          <div className="cta-content animate-on-scroll">
            <h2>Ready to Craft Your Personal Statement?</h2>
            <p>Get expert support to create a compelling personal statement that showcases your unique journey and prepares you for university success.</p>
            <button 
              className="cta-button"
              onClick={() => {
                setShowForm(true);
                setTimeout(() => {
                  document.querySelector('.embedded-form-container')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }, 100);
              }}
            >
              Get Personal Statement Support
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Form */}
      {showForm && (
        <div className="embedded-form-container">
          <div className="embedded-form-header">
            <h3>Get Personal Statement Support</h3>
            <button 
              className="close-form-btn"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
          </div>
          <iframe
            src="https://tally.so/embed/mKjq08?alignLeft=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Personal Statement Support Form"
            className="embedded-form-iframe"
          />
        </div>
      )}
    </div>
  );
};

export default PersonalStatement;
