import React from 'react';

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

export default ScrollButton;
