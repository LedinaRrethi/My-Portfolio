import React from 'react';
import '../../style/style.css';
import PropTypes from 'prop-types';

const Avatar = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Avatar;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
