// Darkmode.js
import React from 'react';
// import './darkmode.css';

const Darkmode = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle btn btn-secondary">
      {darkMode ? 'LightMode' : 'DarkMode'}
    </button>
  );
}

export default Darkmode;
