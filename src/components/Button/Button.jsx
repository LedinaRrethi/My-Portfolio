import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

export default Button;
