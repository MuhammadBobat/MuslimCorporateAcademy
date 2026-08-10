import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, animate, useDragControls } from "motion/react";
import "./Mentors.css";

const mentorsData = [
  {
    id: 1,
    name: "Burhan",
    role: "Co-Founder & Tuition Lead",
    image: "/burhan.jpg",
    shortDescription: "Dental student at the University of Manchester, leading MCA's tuition program.",
    personalParagraph: "Burhan is a dental student at the University of Manchester and one of the co-founders of MCA. Balancing the rigour of a dentistry degree with building an organisation from the ground up, he brings the same discipline and attention to detail to both. Having navigated competitive academic environments himself, he's passionate about helping younger students avoid the pitfalls he had to learn the hard way.",
    favoriteAyah: {
      reference: "Surah [Name] ([chapter]:[verse])",
      arabic: "To be filled in.",
      translation: "This is where their favorite Qur'anic ayah's translation will go."
    },
    mcaRole: "As Tuition Lead, Burhan oversees MCA's 1:1 tutoring program end-to-end - from matching students with the right tutors to ensuring every session delivers real academic progress."
  },
  {
    id: 2,
    name: "Jama",
    role: "Co-Founder & Operational Lead",
    image: "/jama.JPG",
    shortDescription: "Law student at the University of Manchester and the strategic mind behind MCA.",
    personalParagraph: "Jama studies Law at the University of Manchester and is a co-founder of MCA. Known amongst the team for thinking several steps ahead, he was instrumental in shaping the original vision for MCA and continues to be the one who spots the opportunities others miss. His legal training gives him a sharp eye for structure and long-term thinking, which underpins much of how MCA is run today.",
    favoriteAyah: {
      reference: "Surah [Name] ([chapter]:[verse])",
      arabic: "To be filled in.",
      translation: "This is where their favorite Qur'anic ayah's translation will go."
    },
    mcaRole: "Jama helps shape MCA's overall strategy and direction, working behind the scenes to turn ideas into workable plans for the organisation's future."
  },
  {
    id: 3,
    name: "Muhammad",
    role: "Co-Founder & Tech Lead",
    image: "/muhammad.JPG",
    shortDescription: "Computer Science student at the University of Manchester and MCA's tech lead.",
    personalParagraph: "Muhammad studies Computer Science at the University of Manchester and is a co-founder of MCA. Beyond his technical role, he's closely involved in shaping MCA's strategy and growth, helping plan the organisation's long-term goals and events. He's driven by the belief that good technology, used with intention, can meaningfully expand who Islamic knowledge and professional guidance can reach.",
    favoriteAyah: {
      reference: "Surah Al-Furqan (25:63)",
      arabic: "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا",
      translation: "\"And the servants of the Most Merciful are those who walk upon the earth in humility, and when the ignorant address them [harshly], they say [words of] peace.\""
    },
    mcaRole: "As Tech Lead, Muhammad helps drive MCA's strategy and growth, working with the team to plan long-term goals and events, alongside designing and maintaining MCA's website and digital infrastructure."
  },
  {
    id: 4,
    name: "Daanya",
    role: "Lead Sister & Head of Events",
    image: "/daanya.JPG",
    shortDescription: "Studies Politics, Philosophy and Economics at the University of Manchester, heading up event planning.",
    personalParagraph: "Daanya studies Politics, Philosophy and Economics at the University of Manchester and serves as MCA's Lead Sister. Her interdisciplinary background gives her a unique ability to connect ideas across academia, faith, and community life, and she's become a driving force behind MCA's presence beyond the screen. She's passionate about creating spaces where Muslim students, and especially Muslim sisters, feel genuinely supported in both their academic and professional journeys.",
    favoriteAyah: {
      reference: "Surah Ad-Duha (93:3-4)",
      arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ ۚ وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ",
      translation: "\"Your Lord has not forsaken you, nor is He displeased with you — and the hereafter is better for you than the present.\""
    },
    mcaRole: "Daanya leads event planning at MCA, organising the workshops, talks and community events that bring MCA's mission to life outside of tuition and online content."
  }
];

const Mentors = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const y = useMotionValue(0);
  const dragControls = useDragControls();

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
    // Start below the viewport so the entrance animation has somewhere to travel from.
    y.set(typeof window !== 'undefined' ? window.innerHeight : 800);
    setSelectedMentor(mentor);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  useEffect(() => {
    if (selectedMentor) {
      animate(y, 0, { type: 'spring', bounce: 0, duration: 0.4 });
    }
  }, [selectedMentor, y]);

  // Dismiss and animate off-screen, carrying through any release velocity from a drag
  // (a tap-to-close has zero velocity, a flung drag keeps its momentum into the exit).
  const dismissPopup = (releaseVelocity = 0) => {
    const exitDistance = typeof window !== 'undefined' ? window.innerHeight : 800;
    animate(y, exitDistance, {
      type: 'spring',
      velocity: releaseVelocity,
      bounce: 0.15,
      duration: 0.45,
      onComplete: () => {
        setSelectedMentor(null);
        document.body.style.overflow = 'unset';
      }
    });
  };

  useEffect(() => {
    if (!selectedMentor) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dismissPopup(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMentor]);

  const startDrag = (event) => {
    dragControls.start(event);
  };

  const handleDragEnd = (event, info) => {
    const shouldDismiss = info.offset.y > 120 || info.velocity.y > 600;
    if (shouldDismiss) {
      dismissPopup(info.velocity.y);
    } else {
      animate(y, 0, { type: 'spring', bounce: 0, duration: 0.35 });
    }
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
                  <img src={mentor.image} alt={mentor.name} className="mentor-photo" />
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
        <div className="mentor-popup-overlay" onClick={() => dismissPopup(0)}>
          <motion.div
            className="mentor-popup"
            style={{ y }}
            drag="y"
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: 0 }}
            dragElastic={{ top: 0.15, bottom: 1 }}
            onDragEnd={handleDragEnd}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-drag-handle" onPointerDown={startDrag} aria-label="Drag down to close">
              <span className="popup-drag-handle-bar" />
            </div>
            <button className="popup-close-button" onClick={() => dismissPopup(0)}>
              ×
            </button>

            <div className="popup-content">
              <div className="popup-image-section">
                <div className="popup-image-placeholder">
                  <img src={selectedMentor.image} alt={selectedMentor.name} className="mentor-photo" />
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
                  <div className="ayah-text">
                    <p className="ayah-reference">{selectedMentor.favoriteAyah.reference}</p>
                    <p className="ayah-arabic">{selectedMentor.favoriteAyah.arabic}</p>
                    <p className="ayah-translation">{selectedMentor.favoriteAyah.translation}</p>
                  </div>
                </div>
                
                <div className="popup-section">
                  <h3>My Role in MCA</h3>
                  <p>{selectedMentor.mcaRole}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Mentors;
