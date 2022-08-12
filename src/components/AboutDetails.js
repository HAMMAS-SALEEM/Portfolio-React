import React, { useState } from 'react';
import '../stylesheets/aboutdetails.css';
import { aboutDetails, aboutLinks } from './data/AboutSectionData';

const AboutDetails = () => {
  const [view, setView] = useState(0);
  const handleLink = (index) => {
    setView(index);
  };

  const handleActiveLink = (index) => (index === view ? 'about-details-navlink active' : 'about-details-navlink');
  return (
    <>
      <ul className="about-details-navbar">
        {
            aboutLinks.map((link, index) => (
              <li className="single-navlink-container" key={`card-${link.id}`}>
                <button onClick={() => handleLink(index)} id={`a${index}`} className={handleActiveLink(index)} type="button">
                  {link.link}
                  <br />
                  <div className="about-navlink-border"> </div>
                </button>
              </li>
            ))
          }
      </ul>
      <ul className="about-details-container">
        {
            aboutDetails[view].map((detail) => (
              <li key={`detail-${detail.id}`}>
                <ul>
                  <li className="about-me-skills-title">
                    {detail.title}
                    <span className="about-me-skills-extra-title">{detail.extraTitle}</span>
                  </li>
                  <li className="about-me-skills-description">{detail.description}</li>
                </ul>
              </li>
            ))
          }
      </ul>
    </>
  );
};
export default AboutDetails;
