import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (index) => {
    console.log('Toggling dropdown:', index, 'Current open:', openDropdown);
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleClick = (path) => {
    closeMenu();
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
          <Link to="/" className="nav-home-link" onClick={() => handleClick("/")}>
            Home
          </Link>
          {navItems.map((item, index) => (
            <div key={index} className="nav-item">
              <div className="nav-link-container" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleDropdown(index);
              }}>
                <span className="nav-link">{item.title}</span>
                <svg 
                  className={`dropdown-arrow mobile-only ${openDropdown === index ? "arrow-open" : ""}`}
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path d="M7 10l5 5 5-5" stroke="#2d5a2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`dropdown-menu ${openDropdown === index ? "dropdown-open" : ""}`}>
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

        <button className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "hamburger-open" : ""}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
