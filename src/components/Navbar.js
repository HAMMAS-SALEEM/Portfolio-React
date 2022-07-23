import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/services">Services</NavLink>
    <NavLink to="/portfolio">Portfolio</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </>
);

export default Navbar;
