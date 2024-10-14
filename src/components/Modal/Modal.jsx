import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.imgSrc} alt={project.title} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
