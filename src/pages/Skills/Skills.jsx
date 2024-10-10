import React from 'react';
import '../../style/style.css';

const Skills = () => {
  return (
    <div>
      <section className="skills" id="skills">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <div className="skill">
            <i className="bx bxl-html5" />
            <span>HTML</span>
          </div>
          <div className="skill">
            <i className="bx bxl-css3" />
            <span>CSS</span>
          </div>
          <div className="skill">
            <i className="bx bxl-javascript" />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <i className="bx bxl-java" />
            <span>Java</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
