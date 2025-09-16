import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Mentors.css";

// Sample mentor data - this will be replaced with actual data later
const mentorsData = [
  {
    id: 1,
    name: "Mentor Name",
    role: "Professional Role",
    image: "/mentor1.jpg", // Will be replaced with actual image path
    shortDescription: "Brief description of expertise and experience.",
    personalParagraph: "This is where the personal paragraph will go - who they are, their background, what they bring to MCA. This will be filled in later with actual content.",
    favoriteAyah: "This is where their favorite Qur'anic ayah will go. It will be filled in later with the actual ayah and its meaning.",
    mcaRole: "This is where their role in MCA will be described - e.g., tutor, blog contributor, advisor. This will be filled in later."
  },
  {
    id: 2,
    name: "Mentor Name",
    role: "Professional Role", 
    image: "/mentor2.jpg", // Will be replaced with actual image path
    shortDescription: "Brief description of expertise and experience.",
    personalParagraph: "This is where the personal paragraph will go - who they are, their background, what they bring to MCA. This will be filled in later with actual content.",
    favoriteAyah: "This is where their favorite Qur'anic ayah will go. It will be filled in later with the actual ayah and its meaning.",
    mcaRole: "This is where their role in MCA will be described - e.g., tutor, blog contributor, advisor. This will be filled in later."
  },
  {
    id: 3,
    name: "Mentor Name",
    role: "Professional Role",
    image: "/mentor3.jpg", // Will be replaced with actual image path
    shortDescription: "Brief description of expertise and experience.",
    personalParagraph: "This is where the personal paragraph will go - who they are, their background, what they bring to MCA. This will be filled in later with actual content.",
    favoriteAyah: "This is where their favorite Qur'anic ayah will go. It will be filled in later with the actual ayah and its meaning.",
    mcaRole: "This is where their role in MCA will be described - e.g., tutor, blog contributor, advisor. This will be filled in later."
  }
];

const Mentors = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

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

  const openMentorPopup = (mentor) => {
    setSelectedMentor(mentor);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeMentorPopup = () => {
    setSelectedMentor(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div className="mentors">
      {/* Hero Section */}
      <section className="mentors-hero">
        <div className="mentors-container">
          <h1 className="mentors-page-title animate-on-scroll">Our Mentors</h1>
          <p className="mentors-page-subtitle animate-on-scroll">
            Meet the experienced professionals guiding our students towards success
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="mentors-content">
        <div className="mentors-container">
          <div className="mentors-grid">
            {mentorsData.map((mentor) => (
              <div 
                key={mentor.id}
                className="mentor-card animate-on-scroll"
                onClick={() => openMentorPopup(mentor)}
              >
                <div className="mentor-image-placeholder">
                  <div className="placeholder-text">Mentor Photo</div>
                </div>
                <div className="mentor-info">
                  <h3>{mentor.name}</h3>
                  <p className="mentor-role">{mentor.role}</p>
                  <p className="mentor-description desktop-only">
                    {mentor.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA Section */}
      <section className="mentors-cta">
        <div className="cta-background-image">
          {/* This will be replaced with actual image later */}
          <div className="cta-overlay"></div>
        </div>
        <div className="mentors-container">
          <div className="cta-content">
            <h2 className="cta-title animate-on-scroll animate-in">
              Want to see your own face here one day?
            </h2>
            <p className="cta-subtitle animate-on-scroll animate-in">
              Join our team of mentors!
            </p>
            <Link to="/get-involved" className="cta-button animate-on-scroll animate-in">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Mentor Popup Modal */}
      {selectedMentor && (
        <div className="mentor-popup-overlay" onClick={closeMentorPopup}>
          <div className="mentor-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-button" onClick={closeMentorPopup}>
              ×
            </button>
            
            <div className="popup-content">
              <div className="popup-image-section">
                <div className="popup-image-placeholder">
                  <div className="placeholder-text">Mentor Photo</div>
                </div>
              </div>
              
              <div className="popup-info-section">
                <h2 className="popup-mentor-name">{selectedMentor.name}</h2>
                <p className="popup-mentor-role">{selectedMentor.role}</p>
                
                <div className="popup-section">
                  <h3>About Me</h3>
                  <p>{selectedMentor.personalParagraph}</p>
                </div>
                
                <div className="popup-section">
                  <h3>Favorite Qur'anic Ayah</h3>
                  <p className="ayah-text">{selectedMentor.favoriteAyah}</p>
                </div>
                
                <div className="popup-section">
                  <h3>My Role in MCA</h3>
                  <p>{selectedMentor.mcaRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentors;
