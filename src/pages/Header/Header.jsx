import React from 'react';
import '../../style/style.css';

const Header = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <nav id="header">
        <div className="nav-logo">
          <p>&lt;Ledina/&gt;</p>
        </div>
        <div className="nav-menu" id="myNavMenu">
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
              <a href="#contact" className="contact-btn">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-menu-btn">
          <i className="uil uil-bars" onclick="myMenuFunction()" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
