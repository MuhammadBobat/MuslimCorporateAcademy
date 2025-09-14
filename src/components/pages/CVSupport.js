import React, { useEffect, useState, useRef } from "react";
import "./CVSupport.css";

const CVSupport = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const timelineRef = useRef(null);

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

  useEffect(() => {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animate class to timeline container
            entry.target.classList.add('animate');
            
            // Animate timeline steps one by one
            for (let i = 1; i <= 6; i++) {
              setTimeout(() => {
                setVisibleSteps(i);
              }, i * 200);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        timelineObserver.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <div className="cv-support">
      <section className="cv-hero">
        <div className="container">
          <h1 className="cv-hero-title animate-on-scroll">CV and Application Support</h1>
          <p className="cv-hero-subtitle animate-on-scroll">
            Professional guidance for your career applications and development
          </p>
        </div>
      </section>

      {/* Interview and Application Support Section */}
      <section className="interview-prep">
        <div className="container">
          <div className="interview-content">
            <div className="interview-text animate-on-scroll">
              <h2 className="section-title">Interview and Application Support</h2>
              <h4 className="interview-description">
                Stand out where it matters most.
              </h4>
              <p className="interview-description">
                Need help applying for that corporate internship? Want us to review your CV? We have you covered with our range of services.
              </p>
              <div className="interview-features">
                <div className="interview-feature">
                  <div className="feature-icon">
                    {/* Target Icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="5" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="2" fill="#2d5a2d"/>
                    </svg>
                  </div>
                  <span>CV Review</span>
                </div>
                <div className="interview-feature">
                  <div className="feature-icon">
                    {/* Document Icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="3" width="16" height="18" rx="2" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <line x1="8" y1="7" x2="16" y2="7" stroke="#2d5a2d" strokeWidth="1.5"/>
                      <line x1="8" y1="11" x2="16" y2="11" stroke="#2d5a2d" strokeWidth="1.5"/>
                      <line x1="8" y1="15" x2="13" y2="15" stroke="#2d5a2d" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span>Personal Statement Review</span>
                </div>
                <div className="interview-feature">
                  <div className="feature-icon">
                    {/* Briefcase Icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="7" width="18" height="13" rx="2" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <path d="M8 7V5a4 4 0 0 1 8 0v2" stroke="#2d5a2d" strokeWidth="2" fill="none"/>
                      <path d="M3 12h18" stroke="#2d5a2d" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span>Mock Interviews and Feedback (Coming Soon)</span>
                </div>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => window.open('https://tally.so/r/mKjq08', '_blank')}
              >
                Book a Session Now
              </button>
            </div>
            <div className="interview-visual animate-on-scroll">
              <div className="interview-icon">
                <img src="/interview.jpeg" alt="Interview and Application Support" className="interview-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-course">
        <div className="container">
          <div className="course-content animate-on-scroll">
            <h2 className="course-title">Multi-Week Application Support Course (Coming Soon)</h2>
            <p className="course-intro">
              Our structured, multi-week course guides students step by step through the full application journey,
              from career awareness to final interviews. This comprehensive programme prepares students for <b>apprenticeship, 
              internship, and graduate role applications</b>, building confidence and giving students a competitive edge 
              across every stage of the process.
            </p>
            
            {/* Desktop Timeline */}
            <div className="timeline-container desktop-timeline" ref={timelineRef}>
              <div className="timeline-line"></div>
              <div className="timeline-arrow"></div>
              {[
                {
                  id: 1,
                  title: "Career Awareness & Building Experience",
                  description: "Most students start here. We help them identify interests, explore industries, and build a portfolio of experiences that will strengthen future applications.",
                  sessions: "Sessions 1-2"
                },
                {
                  id: 2,
                  title: "Translating into a CV & Cover Letter",
                  description: "We teach students how to structure CVs and cover letters, highlight relevant experiences, and tailor applications to different roles.",
                  sessions: "Sessions 3-4"
                },
                {
                  id: 3,
                  title: "Online Aptitude Assessments",
                  description: "We prepare students for common tests like situational judgement, verbal reasoning, and inductive reasoning. Students get practice and feedback to improve performance.",
                  sessions: "Sessions 5-6"
                },
                {
                  id: 4,
                  title: "Video Interviews",
                  description: "We coach students on how to present themselves confidently, structure answers effectively, and stand out in virtual settings.",
                  sessions: "Sessions 7-8"
                },
                {
                  id: 5,
                  title: "Group Assessments & Teamwork",
                  description: "Students practice problem-solving and communication in group scenarios. We teach strategies for contributing effectively and demonstrating leadership skills.",
                  sessions: "Sessions 9-10"
                },
                {
                  id: 6,
                  title: "1-to-1 Interviews",
                  description: "Final preparation for in-person or online interviews. We focus on personal storytelling, answering difficult questions, and leaving a strong final impression.",
                  sessions: "Sessions 11-12"
                }
              ].map((step, index) => (
                <div 
                  key={step.id} 
                  className={`timeline-item ${index % 2 === 0 ? 'top' : 'bottom'} ${step.id <= visibleSteps ? 'visible' : 'hidden'}`}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className="timeline-dot">
                    <span className="step-number">{step.id}</span>
                  </div>
                  <div className="timeline-stage-name">
                    <div className="timeline-sessions">{step.sessions}</div>
                    <h3 className="timeline-title">{step.title}</h3>
                  </div>
                  <div className={`timeline-content ${activeStep === step.id ? 'active' : ''}`}>
                    <p className="timeline-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile List */}
            <div className="mobile-timeline">
              {[
                {
                  id: 1,
                  title: "Career Awareness & Building Experience",
                  description: "Most students start here. We help them identify interests, explore industries, and build a portfolio of experiences that will strengthen future applications.",
                  sessions: "Sessions 1-2"
                },
                {
                  id: 2,
                  title: "Translating into a CV & Cover Letter",
                  description: "We teach students how to structure CVs and cover letters, highlight relevant experiences, and tailor applications to different roles.",
                  sessions: "Sessions 3-4"
                },
                {
                  id: 3,
                  title: "Online Aptitude Assessments",
                  description: "We prepare students for common tests like situational judgement, verbal reasoning, and inductive reasoning. Students get practice and feedback to improve performance.",
                  sessions: "Sessions 5-6"
                },
                {
                  id: 4,
                  title: "Video Interviews",
                  description: "We coach students on how to present themselves confidently, structure answers effectively, and stand out in virtual settings.",
                  sessions: "Sessions 7-8"
                },
                {
                  id: 5,
                  title: "Group Assessments & Teamwork",
                  description: "Students practice problem-solving and communication in group scenarios. We teach strategies for contributing effectively and demonstrating leadership skills.",
                  sessions: "Sessions 9-10"
                },
                {
                  id: 6,
                  title: "1-to-1 Interviews",
                  description: "Final preparation for in-person or online interviews. We focus on personal storytelling, answering difficult questions, and leaving a strong final impression.",
                  sessions: "Sessions 11-12"
                }
              ].map((step) => (
                <div key={step.id} className="mobile-step">
                  <div className="step-header">
                    <span className="step-number">{step.id}</span>
                    <h3 className="timeline-title">{step.title}</h3>
                  </div>
                  <div className="timeline-sessions">{step.sessions}</div>
                  <p className="timeline-description">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="coming-soon-badge">
              <span className="badge-text">Coming Soon to MCA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVSupport;
