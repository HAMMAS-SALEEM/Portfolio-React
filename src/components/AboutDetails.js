import React from 'react';
import '../stylesheets/aboutdetails.css';

const AboutDetails = () => {
  const links = [
    { id: 1, link: 'Main Skills' },
    { id: 2, link: 'Experience' },
    { id: 3, link: 'Education & Certificate' },
  ];

  const details = [
    [
      {
        title: 'Front-End Developer',
        extraTitle: '',
        description: 'JavaScript, React, Redux, HTML5, CSS3',
      },
      {
        title: 'Back-End Developer',
        extraTitle: '',
        description: 'Ruby, Rails, PostgreSQL',
      },
      {
        title: 'Professional',
        extraTitle: '',
        description: 'Remote Pair-Programming, Teamwork, Mentoring, Agile Methodologies',
      },
    ],
    [
      {
        title: 'Technical Support Specialist (Project Reviewer)',
        extraTitle: ' - Microverse',
        description: 'June 2022 - Current',
      },
      {
        title: 'Full Stack Web Developer',
        extraTitle: ' - Self Employed',
        description: 'November 2021 - Current',
      },
      {
        title: 'SQL Developer',
        extraTitle: ' - Synegic Professionals',
        description: 'April 2021 - October 2021',
      },
    ],
    [
      {
        title: 'Remote Full Stack Web Development Program, Full-Time',
        extraTitle: ' - Microverse',
        description: '2022',
      },
      {
        title: 'BS(Hons.) Computer Science, Full-Time',
        extraTitle: ' - GCUF',
        description: '2021',
      },
    ],
  ];
  return (
    <>
      <ul className="about-details-navbar">
        {
          links.map((link) => (
            <li key={link.id} className="about-details-navlink">
              {link.link}
              <br />
              <div className="about-navlink-border"> </div>
            </li>
          ))
        }
      </ul>
      <ul>
        {
          details[0].map((detail) => (
            <li key={new Date().getTime().toString()}>
              <ul>
                <li>
                  {detail.title}
                  <span>{detail.extraTitle}</span>
                </li>
                <li>{detail.description}</li>
              </ul>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default AboutDetails;
