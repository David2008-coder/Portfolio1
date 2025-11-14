import React, { useState, useEffect } from 'react';
import './Navbar.css';
import closeIcon from '../assets/close-icon.png';
import menuIcon from '../assets/menu-icon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">Davis_Portfolio</div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#project" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="#project" onClick={() => setMenuOpen(false)}>
          <button className="nav-btn">Projects</button>
        </a>
      </nav>

      {/* MENU TOGGLE ALWAYS ON TOP */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu toggle"
          className="menu-icon"
        />
      </div>
    </header>
  );
};

export default Navbar;
