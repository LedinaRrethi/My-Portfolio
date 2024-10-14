import React from 'react';

const InputBox = ({ type, label, name, value, onChange, error, required = true }) => {
  return (
    <div className="input-box">
      <input type={type} name={name} value={value} onChange={onChange} required={required} />
      <label>{label}</label>
      {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
    </div>
  );
};

export default InputBox;
