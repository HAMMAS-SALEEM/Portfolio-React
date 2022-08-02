import React from 'react';
import PageTitle from './PageTitle';
import '../stylesheets/portfolio.css';
import ProjectCard from './ProjectCard';
import { projects } from './data/ProjectData';

const Portfolio = () => {
  const title = 'My Latest Project';
  const desc = 'Checkout my latest React and Rails projects';

  return (
    <div className="projects-page">
      <PageTitle title={title} desc={desc} />
      <ul className="projects-container">
        {
          projects.map((project, index) => (
            <li id={`project-container${index + 1}`} className="project-container-all" key={project.id}><ProjectCard status={project.status} title={project.title} projectLink={project.projectLink} liveLink={project.liveLink} /></li>
          ))
        }
      </ul>
    </div>
  );
};
export default Portfolio;
