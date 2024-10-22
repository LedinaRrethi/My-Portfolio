import React from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ type, label, name, value, onChange, error, required = true }) => {
  return (
    <div className="input-box">
      <input type={type} name={name} value={value} onChange={onChange} required={required} />
      <label>{label}</label>
      {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
    </div>
  );
};

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

export default InputBox;
