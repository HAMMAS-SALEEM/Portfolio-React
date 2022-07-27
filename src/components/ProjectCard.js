import React from 'react';
import '../stylesheets/projectcard.css';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, projectLink, liveLink }) => (
  <div className="project-card">
    <h4 className="small-heading">Development</h4>
    <h3 className="large-heading">{title}</h3>
    <div className="project-buttons-container">
      <a href={liveLink} className="project-button">See Live</a>
      <a href={projectLink} className="project-button">See Project</a>
    </div>
    <div className="project-overlay"> </div>
  </div>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};
