import React from 'react';
import { socialLinks } from './data/SocialLinks';
import '../stylesheets/contact.css';
import Logo from './Logo';

const Contact = () => (
  <div className="contact-section">
    <h2 className="contact-page-title">
      Hire Me.
    </h2>
    <p className="contact-page-description">
      I am open to job opportunities and side projects. Connect with me via WhatsApp:
      <span className="contact-page-description-white"> +923126635707 </span>
      or email me
      <span className="contact-page-description-white"> hammassaleem376@gmail.com </span>
    </p>
    <form action="https://formspree.io/f/xlevrllb" method="POST">
      <input className="contact-form-input" type="text" name="Name" placeholder="Your Name *" maxLength="50" required />
      <input className="contact-form-input" type="email" name="Email" placeholder="Your Email *" maxLength="50" required />
      <input className="contact-form-input" type="text" name="Subject" placeholder="Write a Subject *" maxLength="50" required />
      <textarea className="contact-form-input" name="Message" placeholder="Your Message *" id="" rows="10" required />
      <button type="submit" className="contact-form-submit-button">Submit</button>
    </form>
    <div className="footer-social-links">
      <h3 className="footer-icon"><Logo /><span>hammasCoding</span></h3>
      <ul className="footer-social-links-container">
        {
          socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}>
                <link.icon className="social-icon" />
              </a>
            </li>
          ))
        }
      </ul>
      <p className="footer-license-description">Copyright © 2022 Hammas Bin Saleem. All Rights Reserved.</p>
    </div>
  </div>
);

export default Contact;
