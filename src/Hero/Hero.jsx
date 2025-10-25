import React from 'react';
import './Hero.css';
import project11 from '../assets/project11.png';
import { FaTwitter, FaGithub } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";

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
          <a href="#about" className="btn secondary-btn">Let's Talk</a>
        </div>

        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookMessenger /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </div>

      <div className="hero-image">
        <img src={project11} alt="David Obasuke" />
        <div className="floating-bubble bubble1"></div>
        <div className="floating-bubble bubble2"></div>
        <div className="floating-bubble bubble3"></div>
      </div>
    </section>
  );
};

export default Hero;
