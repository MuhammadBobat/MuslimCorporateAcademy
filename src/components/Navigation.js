import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentView, setCurrentView] = useState('main'); // 'main' or 'subpages'
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setCurrentView('main');
    setSelectedNavItem(null);
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const showSubpages = (navItem, index) => {
    setSelectedNavItem(navItem);
    setCurrentView('subpages');
  };

  const goBackToMain = () => {
    setCurrentView('main');
    setSelectedNavItem(null);
  };

  const handleClick = (path) => {
    closeMenu();
    setCurrentView('main');
    setSelectedNavItem(null);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };


  const navItems = [
    {
      title: "About",
      items: [
        { name: "Our Mission", path: "/mission" },
        { name: "Our Mentors", path: "/mentors" },
        { name: "Our Ethos", path: "/ethos" }
      ]
    },
    {
      title: "Services",
      items: [
        { name: "Tuition", path: "/tuition" },
        { name: "Personal Statement Support", path: "/personal-statement" },
        { name: "CV and Application Support", path: "/cv-support" }
      ]
    },
    {
      title: "Insights",
      items: [
        { name: "Weekly Blog", path: "/blog" },
        { name: "Our Socials", path: "/socials" }
      ]
    },
    {
      title: "Support",
      items: [
        { name: "Get Involved", path: "/get-involved" },
        { name: "Enquire", path: "/enquire" },
        { name: "FAQ", path: "/faq" }
      ]
    }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => handleClick("/")}>
          <div className="logo-container">
            <img src="/logo.svg" alt="MCA Logo" className="nav-logo-image" />
            <div className="logo-text-container">
              <span className="logo-text">MCA</span>
              <span className="logo-subtitle">Muslim Corporate Academy</span>
            </div>
          </div>
        </Link>

        <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
          {/* Desktop Navigation - Hover-based */}
          <div className="desktop-nav">
            <Link to="/" className="nav-home-link" onClick={() => handleClick("/")}>
              Home
            </Link>
            {navItems.map((item, index) => (
              <div key={index} className="nav-item">
                <span className="nav-link">{item.title}</span>
                <div className="dropdown-menu">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="dropdown-item"
                      onClick={() => handleClick(subItem.path)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation - Slide-in system */}
          <div className={`mobile-nav-content ${currentView === 'subpages' ? 'mobile-nav-content-subpages' : 'mobile-nav-content-main'}`}>
            
            {/* Main Navigation View */}
            <div className={`mobile-nav-main-view ${currentView === 'main' ? 'mobile-nav-view-active' : 'mobile-nav-view-hidden'}`}>
              <Link to="/" className="mobile-nav-home-link" onClick={() => handleClick("/")}>
                Home
              </Link>
              {navItems.map((item, index) => (
                <button 
                  key={index}
                  className="mobile-nav-main-button"
                  onClick={() => showSubpages(item, index)}
                >
                  <span>{item.title}</span>
                  <span className="mobile-nav-arrow">→</span>
                </button>
              ))}
            </div>

            {/* Subpages Navigation View */}
            <div className={`mobile-nav-subpages-view ${currentView === 'subpages' ? 'mobile-nav-view-active' : 'mobile-nav-view-hidden'}`}>
              <button className="mobile-nav-back-button" onClick={goBackToMain}>
                <span className="mobile-nav-back-arrow">←</span>
                <span>Back</span>
              </button>
              <div className="mobile-nav-subpages-title">
                {selectedNavItem?.title}
              </div>
              {selectedNavItem?.items.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={subItem.path}
                  className="mobile-nav-subpage-link"
                  onClick={() => handleClick(subItem.path)}
                >
                  {subItem.name}
                </Link>
              ))}
            </div>

          </div>
        </div>

        <button className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "hamburger-open" : ""}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
