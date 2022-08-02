import React from 'react';
import '../stylesheets/blogcard.css';
import PropTypes from 'prop-types';

const BlogCard = ({ blog }) => (
  <div className="blog-card">
    <div>
      <img className="blog-image" src={blog.img} alt="blog" />
    </div>
    <div className="blog-details">
      <span className="blog-badge">{blog.badge}</span>
      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-desc">{blog.desc}</p>
    </div>
    <a href={blog.link} className="blog-button">Read Article</a>
  </div>
);

export default BlogCard;

BlogCard.propTypes = {
  blog: PropTypes.shape({
    img: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
