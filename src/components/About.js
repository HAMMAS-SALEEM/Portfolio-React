import React from 'react';
// import Hammas from '../images/about/hammas.jpg';
import '../stylesheets/about.css';

const About = () => (
  <div className="about-me-section">
    <div className="about-me-picture">
      {/* <img className="hammas-about-pic" src={Hammas} alt="hammas" /> */}
      <div className="about-me-picture-overlay"> </div>
    </div>
    <div className="about-me-details">
      <h2 className="about-me-title">About Me</h2>
      <p className="about-me-par">
        I&apos;m a software developer!
        I can help you build a product,
        feature or website Look through
        some of my work and experience!
        If you like what you see and have
        a project you need coded, don&apos;t
        hestiate to contact me.
      </p>
    </div>
  </div>
);

export default About;
