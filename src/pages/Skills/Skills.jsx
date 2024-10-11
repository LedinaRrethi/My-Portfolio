import React from 'react';
import SkillItem from '../../components/SkillItem/SkillItem';

const Skills = () => {
  const skills = [
    { iconClass: 'bx bxl-html5', skillName: 'HTML' },
    { iconClass: 'bx bxl-css3', skillName: 'CSS' },
    { iconClass: 'bx bxl-javascript', skillName: 'JavaScript' },
    { iconClass: 'bx bxl-java', skillName: 'Java' },
  ];

  return (
    <section className="skills" id="skills">
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>My Skills</h2>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <SkillItem key={index} iconClass={skill.iconClass} skillName={skill.skillName} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
