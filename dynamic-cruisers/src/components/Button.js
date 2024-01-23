// src/components/Button.js
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
