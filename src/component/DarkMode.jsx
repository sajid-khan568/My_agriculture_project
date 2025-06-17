import React, { useEffect, useState } from 'react';
const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, [darkMode]);

  return (
    <button onClick={toggleDarkMode} className="btn btn-outline-light">
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default DarkMode;
