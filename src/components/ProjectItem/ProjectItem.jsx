import React from 'react';

const ProjectItem = ({ imgSrc, title, description, demoLink }) => {
  return (
    <div className="project-box">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={demoLink} target="_blank">
        View Demo
      </a>
    </div>
  );
};

export default ProjectItem;
