import React from 'react';
import '../stylesheets/projectcard.css';
import PropTypes from 'prop-types';

const ProjectCard = ({
  status, title, projectLink, liveLink,
}) => (
  <div className="project-card">
    <p className="small-heading">{status}</p>
    <h3 className="large-heading">{title}</h3>
    <div className="project-buttons-container">
      <a href={liveLink} className="project-button project-button-live">See Live</a>
      <a href={projectLink} className="project-button project-button-github">See Project</a>
    </div>
    <div className="project-overlay"> </div>
  </div>
);
export default ProjectCard;

ProjectCard.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};
