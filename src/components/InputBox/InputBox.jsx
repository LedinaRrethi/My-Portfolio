import React from 'react';

const InputBox = ({ type, label, required = true }) => {
  return (
    <div className="input-box">
      <input type={type} required={required} />
      <label>{label}</label>
    </div>
  );
};

export default InputBox;
