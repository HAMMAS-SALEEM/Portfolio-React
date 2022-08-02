import React from 'react';
import '../stylesheets/projectcard.css';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, projectLink, liveLink }) => (
  <div className="project-card">
    <p className="small-heading">Development</p>
    <h3 className="large-heading">{title}</h3>
    <div className="project-buttons-container">
      <button type="button" onClick={liveLink} className="project-button project-button-live">See Live</button>
      <button type="button" onClick={projectLink} className="project-button project-button-github">See Project</button>
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
