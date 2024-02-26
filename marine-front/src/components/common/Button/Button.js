import React from 'react';

import './button.css'

const Button = ({ text, className, type="button", colorStyle, onClick, disabled = false }) => {
  return (
    <button
        type={type}
        className={`${className} ${colorStyle}`}
        onClick={onClick}
        disabled={disabled}    
    >
        {text}
      
    </button>
  );
};

export default Button;