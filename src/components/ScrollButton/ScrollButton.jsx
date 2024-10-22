import React from 'react';
import PropTypes from 'prop-types';

const ScrollButton = ({ href, label }) => {
  return (
    <div className="scroll-icon-box">
      <a href={href} className="scroll-btn">
        <i className="uil uil-mouse-alt" />
        <p>{label}</p>
      </a>
    </div>
  );
};

ScrollButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ScrollButton;
