import React from 'react';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import projectImage from '../../images/project1.jpg';

const Projects = () => {
  const projects = [
    { title: 'Blog', description: 'Lorem ipsum dolor sit amet.', imgSrc: projectImage, demoLink: '#' },
    { title: 'Blog', description: 'Lorem ipsum dolor sit amet.', imgSrc: projectImage, demoLink: '#' },
    { title: 'Blog', description: 'Lorem ipsum dolor sit amet.', imgSrc: projectImage, demoLink: '#' },
    { title: 'Blog', description: 'Lorem ipsum dolor sit amet.', imgSrc: projectImage, demoLink: '#' },
    { title: 'Blog', description: 'Lorem ipsum dolor sit amet.', imgSrc: projectImage, demoLink: '#' },
    { title: 'Blog', description: 'Lorem ipsum dolor sit amet.', imgSrc: projectImage, demoLink: '#' },
  ];

  return (
    <section className="projects" id="projects">
      <h2 style={{ textAlign: 'center', padding: '40px', marginTop: '50px' }}>Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
