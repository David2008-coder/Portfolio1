import React from 'react';
import './Hero.css';
import david1 from '../assets/david2.jpeg';
import pro1 from '../assets/pro1.jpeg';
import pro2 from '../assets/pro2.jpeg';
import pro3 from '../assets/pro3.jpeg';
import { FaTwitter, FaGithub } from "react-icons/fa";
// import { FaFacebookMessenger } from "react-icons/fa6";
import { FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I’m <span className="highlight">David Obasuke</span>
        </h1>
        <h2 className="hero-subtitle">Frontend Developer | AI & Robotics Enthusiast</h2>
        <p className="hero-text">
          Passionate about merging <span>Artificial Intelligence</span> and <span>Machine Learning</span> 
          with innovative <span>Web Development</span> to shape Africa’s technological future.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary-btn">Hire Me</a>
          <a href="#contact" className="btn secondary-btn">Let's Talk</a>
        </div>

        <div className="social-icons">
          <a href="https://x.com/DavidObasu99069?t=2hPGL0nLWimkorgkpDOW8w&s=08" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://github.com/David2008-coder/Portfolio1" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://wa.me/2348142657490" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://www.tiktok.com/@p.david_dev?_r=1&_t=ZS-91OnCidPpyB" target="_blank" rel="noreferrer"><FaTiktok /></a>
        </div>
      </div>

      <div className="hero-image">
        <img src={david1} alt="David Obasuke" />
        <div className="floating-bubble bubble1"></div>
        <div className="floating-bubble bubble2"></div>
        <div className="floating-bubble bubble3"></div>
      </div>
    </section>
  );
};

export default Hero;
