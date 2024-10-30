import React from 'react';
import './styles/Button.css';

const Button = ({ label }) => {
  return (
    <button className="primary-btn">
      {label}
    </button>
  );
}

export default Button;
