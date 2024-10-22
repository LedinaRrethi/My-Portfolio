import React from 'react';
import PropTypes from 'prop-types';

const SkillItem = ({ iconClass, skillName }) => {
  return (
    <div className="skill">
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

      <i className={iconClass} />
      <span>{skillName}</span>
    </div>
  );
};

SkillItem.propTypes = {
  iconClass: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
};

export default SkillItem;
