import React, { useState } from 'react';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import Modal from '../../components/Modal/Modal';
import projectImage1 from '../../images/project1.jpg';
import projectImage2 from '../../images/project1.jpg';
import projectImage3 from '../../images/project1.jpg';

const Projects = () => {
  const [filteredCategory, setFilteredCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      title: 'Web Development Project',
      description: 'Lorem ipsum dolor sit amet.',
      imgSrc: projectImage1,
      demoLink: '#',
      category: 'Web Development',
    },
    {
      title: 'Design Project',
      description: 'Lorem ipsum dolor sit amet.',
      imgSrc: projectImage2,
      demoLink: '#',
      category: 'Design',
    },
    {
      title: 'Web Project',
      description: 'Lorem ipsum dolor sit amet.',
      imgSrc: projectImage1,
      demoLink: '#',
      category: 'Web Development',
    },
    {
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet.',
      imgSrc: projectImage2,
      demoLink: '#',
      category: 'Design',
    },
    {
      title: 'Mobile App',
      description: 'Lorem ipsum dolor sit amet.',
      imgSrc: projectImage3,
      demoLink: '#',
      category: 'Mobile Development',
    },
    {
      title: 'Mobile Project',
      description: 'Lorem ipsum dolor sit amet.',
      imgSrc: projectImage3,
      demoLink: '#',
      category: 'Mobile Development',
    },
  ];

  const handleFilterChange = (event) => {
    setFilteredCategory(event.target.value);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects =
    filteredCategory === 'All' ? projects : projects.filter((project) => project.category === filteredCategory);

  return (
    <section className="projects" id="projects">
      <h2 style={{ textAlign: 'center', padding: '40px', marginTop: '50px' }}>Projects</h2>

      <div className="filter-container">
        <label htmlFor="project-filter">Filter by category: </label>
        <select id="project-filter" value={filteredCategory} onChange={handleFilterChange}>
          <option value="Web Development">Web Development</option>
          <option value="All">All</option>

          <option value="Design">Design</option>
          <option value="Mobile Development">Mobile Development</option>
        </select>
      </div>

      <div className="project-container">
        {filteredProjects.map((project, index) => (
          <ProjectItem
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
};

export default Projects;
