import React from 'react';
import '../../style/style.css';

const Button = ({ label, href, type, onClick }) => {
  const handleClick = (event) => {
    if (href) {
      event.preventDefault();
      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button className="contact-btn" type={type || 'button'} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
