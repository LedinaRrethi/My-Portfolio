import React, { useState } from 'react';
import '../../style/style.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="header">
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      <div className="nav-logo">
        <p>&lt;Ledina/&gt;</p>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'responsive' : ''}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <Link to={'/'} className="nav-link active-link">
              Home
            </Link>
          </li>
          <li className="nav_list">
            <Link to={'/About'} className="nav-link">
              About
            </Link>
          </li>
          <li className="nav_list">
            <Link to={'/Projects'} className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav_list">
            <Link to={'/Skills'} className="nav-link">
              Skills
            </Link>
          </li>

          <Link to="/Contact" className="nav-link">
            <Button label="Contact">Contact</Button>
          </Link>
        </ul>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Header;
