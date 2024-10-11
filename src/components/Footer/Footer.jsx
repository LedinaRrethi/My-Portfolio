import React from 'react';
import '../../style/style.css';

const Footer = () => {
  return (
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
  );
};

export default Footer;
