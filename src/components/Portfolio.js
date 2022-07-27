import React from 'react';
import PageTitle from './PageTitle';
import '../stylesheets/portfolio.css';
import ProjectCard from './ProjectCard';
import { projects } from './data/ProjectData';

const Portfolio = () => {
  const title = 'My Latest Project';
  const desc = 'Checkout my latest React and Rails projects';

  return (
    <div className="projects-container">
      <PageTitle title={title} desc={desc} />
      <ul>
        {
          projects.map((project) => (
            <li key={project.id}><ProjectCard title={project.title} img={project.img} /></li>
          ))
        }
      </ul>
    </div>
  );
};
export default Portfolio;
