import React from 'react';
import '../stylesheets/pageTitle.css';
import PropTypes from 'prop-types';

const PageTitle = ({ title, desc }) => (
  <div>
    <h2 className="page-title">{title}</h2>
    <p className="page-desc">{desc}</p>
  </div>
);

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
