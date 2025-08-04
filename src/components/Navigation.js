import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <div className="logo-container">
            <img src="/logo.svg" alt="MCA Logo" className="nav-logo-image" />
            <div className="logo-text-container">
              <span className="logo-text">MCA</span>
              <span className="logo-subtitle">Muslim Corporate Academy</span>
            </div>
          </div>
        </Link>
        
        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/tuition" 
            className={`nav-link ${location.pathname === '/tuition' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Tuition
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Weekly Blog
          </Link>
        </div>
        
        <button className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;