import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">I’m currently open to new opportunities and collaborations.</p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Talk 💬</h2>
          <p>
            I’m available for freelance work, portfolio collaborations, or tech discussions — especially in
            web development, AI, and robotics.
          </p>
          <ul>
            <li><strong>Email:</strong> obasukedavid47@gmail.com</li>
            <li><strong>Phone:</strong> +234-814-265-7490</li>
            <li><strong>Location:</strong> Lagos, Nigeria</li>
          </ul>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" required />
            <label>Your Name</label>
          </div>

          <div className="form-group">
            <input type="email" required />
            <label>Your Email</label>
          </div>

          <div className="form-group">
            <textarea required></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
