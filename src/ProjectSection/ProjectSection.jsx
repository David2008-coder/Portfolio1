import React from 'react';
import './ProjectSection.css';

const ProjectSection = () => {
  return (
    <section className="portfolio-projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-container">
        <div className="individual-project">
          <h3 className="project-name">Project 1</h3>
          <p className="project-description">Project 1 description</p>
          <a href="#" target="_blank" rel="" className="project-link">Live Demo</a>
          <a href="#" target="_blank" rel="https://real-estate-psi-bice.vercel.app/" className="project-link">GitHub Repo</a>
        </div>
        <div className="individual-project">
          <h3 className="project-name">Project 2</h3>
          <p className="project-description">Project 2 description</p>
          <a href="#" target="_blank" rel="https://wristwatchwebsite.vercel.app/" className="project-link">Live Demo</a>
          <a href="#" target="_blank" rel="https://petwebsite-qx7d.vercel.app/" className="project-link">GitHub Repo</a>
        </div>
      </div>
      <h2 className="section-title">Collaborated Projects</h2>
      <div className="project-container">
        <div className="individual-project">
          <h3 className="project-name">Collaborated Project 1</h3>
          <p className="project-description">Collaborated Project 1 description</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
        </div>
        <div className="individual-project">
          <h3 className="project-name">Collaborated Project 2</h3>
          <p className="project-description">Collaborated Project 2 description</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;