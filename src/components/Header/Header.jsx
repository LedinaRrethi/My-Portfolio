import React, { useState } from 'react';
import '../../style/style.css';
import Button from '../Button/Button';

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
            <a href="#home" className="nav-link active-link">
              Home
            </a>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav_list">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav_list">
            <Button label="Contact" href="#contact" />
          </li>
        </ul>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Header;
