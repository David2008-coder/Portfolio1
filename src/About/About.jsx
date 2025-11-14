import './About.css';
import aiCertificate from '../assets/ai-certificate.jpg'; // Add your certificate image here

const About = () => {
  return (
    <div className="about-section" id="about">
      <h1 className="about-title">About Me</h1>

      <div className="about-content">
        <p className="about-text">
          Hello! I’m <strong>David Obasuke Tamilore</strong>, a passionate Frontend developer from Nigeria
          with over <strong>2 years of experience</strong> in building modern web applications and i am also learning
           backend technologies like Java and python  .
          I have a deep passion for <span className="highlight">Artificial Intelligence</span>,
          <span className="highlight"> Machine Learning</span>, and <span className="highlight">Robotics</span>.
          My dream is to help Africa become a global leader in Ai & Robotics intelligent technologies.
        </p>

        <p className="about-text">
          I’ve earned a certificate from <strong>Regonnet Global</strong> after completing an intensive
          AI and Machine Learning course, and I’m continuously learning and applying AI concepts
          in my projects every day. My ultimate goal is to integrate AI and robotics into
          everyday life — making innovation accessible to everyone.
        </p>

        <div className="certificate-section">
          <h2>My AI/ML Certificate</h2>
          <img src={aiCertificate} alt="AI/ML Certificate" className="certificate-image" />
        </div>
      </div>

      <div className="skills-section">
        <h2>My Technical Skills</h2>
        <ul className="skills-list">
          <li><span>HTML</span><div className="bar"><div className="progress html"></div></div></li>
          <li><span>CSS</span><div className="bar"><div className="progress css"></div></div></li>
          <li><span>JavaScript</span><div className="bar"><div className="progress js"></div></div></li>
          <li><span>React</span><div className="bar"><div className="progress react"></div></div></li>
          <li><span>AI/ML</span><div className="bar"><div className="progress ai"></div></div></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
