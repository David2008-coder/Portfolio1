import React from 'react';
import './Project.css';
// import p4 from '../assets/pro1.jpeg';
import myvid1 from '../assets/myvid1.mp4'
import myvid2 from '../assets/myvid2.mp4'
import myvid3 from '../assets/myvid3.mp4'
import p2 from '../assets/pro2.jpeg';
import p3 from '../assets/pro3.jpeg';

const Project = () => {
  return (
    <section className="project-section" id="project">
      <h1 className="project-title">My Projects</h1>
      <p className="project-subtitle">
        A showcase of innovative projects focused on AI, web development, and data analytics in Africa.
      </p>

      <div className="project-grid">
        <div className="project-card">
          {/* <img src={p4} alt="AI Development" className="project-image" /> */}
      <video controls className="project-video"   autoPlay muted loop playsInline>
        <source src={myvid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          {/* <div className="project-info">
            <h2>AI Development in Africa</h2>
            <p>
              Empowering African innovation through artificial intelligence solutions and local talent development.
            </p>
          </div> */}
        </div>

        <div className="project-card">
          {/* <img src={p2} alt="Web Development" className="project-image" /> */}
        <video controls className="project-video"  autoPlay muted loop playsInline>
            <source src={myvid2} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
          {/* <div className="project-info">
            <h2>Web Development in Africa</h2>
            <p>
              Crafting intuitive, responsive websites for businesses and entrepreneurs across the continent.
            </p>
          </div> */}
        </div>

        <div className="project-card">
          {/* <img src={p3} alt="Data Analytics" className="project-image" /> */}
        <video controls className="project-video"   autoPlay muted loop playsInline>
            <source src={myvid3} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
          {/* <div className="project-info">
            <h2>Data Analytics in Africa</h2>
            <p>
              Unlocking insights through data visualization and advanced statistical analysis to drive progress.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Project;
