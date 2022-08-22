import React, { useState } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import '../stylesheets/navbar.css';
import { links } from './data/NavbarData';
import { ReactComponent as Close } from '../images/icons/close.svg';
import { ReactComponent as Menu } from '../images/icons/menu.svg';
import Logo from './Logo';
import { socialLinks } from './data/SocialLinks';

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', handleNavbar);

  const handleMenu = () => setMenuStatus(!menuStatus);
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="logo-navlink-container">
          <NavLink to="#home">
            <Logo />
          </NavLink>
          <div className={menuStatus ? 'mobile-side-nav' : 'mobile-side-nav-hidden'}>
            <ul>
              <li className="menu-close-icon-container">
                <Close onClick={handleMenu} className="social-icon menu-close-icon" />
              </li>
              <li>
                <ul className="nav-links">
                  {
          links.map((link) => (
            link.id > 0
              ? (
                <NavLink
                  onClick={handleMenu}
                  className="nav-single-link"
                  key={`navlink-${link.id}`}
                  to={link.to}
                >
                  {link.title}
                </NavLink>
              )
              : ''
          ))
        }
                  <li>
                    <ul id="navbar-social-icons-container" className="navbar-social-icons-container">
                      {
          socialLinks.map((link) => (
            <li key={`link-${link.id}`}>
              <a href={link.link}>
                <link.icon className="social-icon special" />
              </a>
            </li>
          ))
        }
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <ul className="navbar-social-icons-container">
          {
          socialLinks.map((link) => (
            <li key={`link-${link.id}`}>
              <a href={link.link}>
                <link.icon className="social-icon" />
              </a>
            </li>
          ))
        }
        </ul>
        <Menu onClick={handleMenu} className="social-icon menu-open-icon" />
      </nav>
    </>
  );
};
export default Navbar;
