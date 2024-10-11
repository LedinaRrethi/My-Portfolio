import React from 'react';

const SkillItem = ({ iconClass, skillName }) => {
  return (
    <div className="skill">
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

      <i className={iconClass} />
      <span>{skillName}</span>
    </div>
  );
};

export default SkillItem;
