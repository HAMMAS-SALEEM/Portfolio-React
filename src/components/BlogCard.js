import React from 'react';
import '../stylesheets/blogcard.css';

const BlogCard = () => (
  <div className="blog-card">
    <div>
      <img className="blog-image" src="https://miro.medium.com/max/620/1*cpKqvSSOQV2e3y7i9Gnglg.jpeg" alt="blog" />
    </div>
    <div className="blog-details">
      <span className="blog-badge">Professional</span>
      <h3 className="blog-title">Good vs Bad Fear</h3>
      <p className="blog-desc">
        I published an article regarding Fear and its traits.
        How you can use fear for you own benefit.
      </p>
    </div>
    <button className="blog-button" type="button">Read Article</button>
  </div>
);

export default BlogCard;
