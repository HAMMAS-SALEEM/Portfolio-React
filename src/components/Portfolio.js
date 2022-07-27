import React from 'react';
import PageTitle from './PageTitle';
import '../stylesheets/portfolio.css';

const Portfolio = () => {
  const title = 'My Latest Project';
  const desc = 'Checkout my latest React and Rails projects';

  return (
    <div className="projects-container">
      <PageTitle title={title} desc={desc} />

    </div>
  );
};
export default Portfolio;
