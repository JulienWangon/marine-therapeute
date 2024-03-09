
import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContainer" onClick={e => e.stopPropagation()}>
        {children}
      </div>
      <button className="closeModal" onClick={onClose}>Fermer</button>
    </div>
  );
};

export default Modal;
