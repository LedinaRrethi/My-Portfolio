import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ imgSrc, title, description, demoLink, onClick }) => {
  return (
    <div className="project-box" onClick={onClick}>
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={demoLink} target="_blank">
        View Demo
      </a>
    </div>
  );
};

ProjectItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ProjectItem;
