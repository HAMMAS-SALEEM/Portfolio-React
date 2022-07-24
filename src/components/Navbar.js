import React, { useState } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import '../stylesheets/navbar.css';
import { ReactComponent as GitHub } from '../images/icons/github.svg';
import { ReactComponent as LinkedIn } from '../images/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../images/icons/twitter.svg';
import { ReactComponent as AngelList } from '../images/icons/angellist.svg';
import { ReactComponent as Close } from '../images/icons/close.svg';
import { ReactComponent as Menu } from '../images/icons/menu.svg';

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const links = [{ id: '0', to: '#home', title: 'Home' },
    { id: '1', to: '#about', title: 'About' },
    { id: '2', to: '#services', title: 'Services' },
    { id: '3', to: '#portfolio', title: 'Portfolio' },
    { id: '4', to: '#blog', title: 'Blog' },
    { id: '5', to: '#contact', title: 'Contact' }];

  const handleMenu = () => setMenuStatus(!menuStatus);
  return (
    <>
      <nav className="navbar">
        <div className={menuStatus ? 'mobile-side-nav' : 'mobile-side-nav-hidden'}>
          <ul>
            <li className="menu-close-icon-container">
              <Close onClick={handleMenu} className="social-icon menu-close-icon" />
            </li>
            <li>
              <ul className="nav-links">
                {
          links.map((link) => (
            <NavLink
              onClick={handleMenu}
              className="nav-single-link"
              key={link.id}
              to={link.to}
            >
              {link.title}
            </NavLink>
          ))
        }
              </ul>
            </li>
          </ul>
        </div>
        <ul className="navbar-social-icons-container">
          <li>
            <a href="https://www.linkedin.com/in/hammas-saleem">
              <LinkedIn className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/HAMMAS-SALEEM">
              <GitHub className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/HammasSaleem4">
              <Twitter className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/hammas-saleem">
              <AngelList className="social-icon" />
            </a>
          </li>
        </ul>
        <Menu onClick={handleMenu} className="social-icon menu-open-icon" />
      </nav>
    </>
  );
};
export default Navbar;
