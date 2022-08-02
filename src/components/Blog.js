import React from 'react';
import PageTitle from './PageTitle';
import BlogCard from './BlogCard';
import { blogs } from './data/BlogData';
import '../stylesheets/blog.css';

const Blog = () => {
  const title = 'My Recent Blogs';
  const desc = 'Checkout my latest blogs';
  return (
    <section className="blogs-section">
      <PageTitle title={title} desc={desc} />
      <div className="blogs-container">
        {
          blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        }
      </div>
    </section>
  );
};

export default Blog;
