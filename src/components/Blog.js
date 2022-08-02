import React from 'react';
import BlogCard from './BlogCard';
import PageTitle from './PageTitle';
import '../stylesheets/blog.css';

const Blog = () => {
  const title = 'My Recent Blogs';
  const desc = 'Checkout my latest blogs';
  return (
    <section className="blogs-section">
      <PageTitle title={title} desc={desc} />
      <div className="blogs-container">
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
