import React from 'react';
import '../../style/style.css';

const Footer = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <footer>
        <div className="top-footer">
          <p>Ledina Rrethi</p>
        </div>
        <div className="middle-footer">
          <ul className="footer-menu">
            <li className="footer_menu_list">
              <a href="#home">Home</a>
            </li>
            <li className="footer_menu_list">
              <a href="#about">About</a>
            </li>
            <li className="footer_menu_list">
              <a href="#projects">Projects</a>
            </li>
            <li className="footer_menu_list">
              <a href="#skills">Skills</a>
            </li>
            <li className="footer_menu_list">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social-icons">
          <div className="icon">
            <i className="uil uil-instagram" />
          </div>
          <div className="icon">
            <i className="uil uil-linkedin-alt" />
          </div>
          <div className="icon">
            <i className="uil uil-github-alt" />
          </div>
          <div className="icon">
            <i className="uil uil-twitter" />
          </div>
        </div>
        <div className="bottom-footer">
          <p>
            {' '}
            © 2024{' '}
            <a href="#home" style={{ textDecoration: 'none' }}>
              Ledina Rrethi
            </a>{' '}
            - All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
