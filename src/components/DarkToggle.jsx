// DarkModeToggle.jsx
import React, { useState } from 'react';
import './style.css'; // Import the styles

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      <div className="dark-mode-icon">{isDarkMode ? '🌙' : '☀️'}</div>
      <div className="dark-mode-text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</div>
      
    </button>
  );
};

export default DarkModeToggle;

