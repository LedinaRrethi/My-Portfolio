import React from 'react';
import '../../style/style.css';
import project from '../../images/project1.jpg';

const Projects = () => {
  return (
    <div>
      <section className="section" id="projects">
        <div className="top-header">
          <h1>Projects</h1>
        </div>
        <div className="project-container">
          <div className="project-box">
            <img src={project} alt="Project 1" />
            <h3>Blog</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" target="_blank">
              View Demo
            </a>
          </div>
          <div className="project-box">
            <img src={project} alt="Project 1" />
            <h3>Blog</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" target="_blank">
              View Demo
            </a>
          </div>
          <div className="project-box">
            <img src={project} alt="Project 1" />
            <h3>Blog</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" target="_blank">
              View Demo
            </a>
          </div>
          <div className="project-box">
            <img src={project} alt="Project 1" />
            <h3>Blog</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" target="_blank">
              View Demo
            </a>
          </div>
          <div className="project-box">
            <img src={project} alt="Project 1" />
            <h3>Blog</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" target="_blank">
              View Demo
            </a>
          </div>
          <div className="project-box">
            <img src={project} alt="Project 1" />
            <h3>Blog</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" target="_blank">
              View Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
