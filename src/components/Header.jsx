import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <header className="app-header fade-in">
      <h1 className="rainbow-glow">⚡ MythLink EDU</h1>
      <nav className="nav-bar">
        <Link to="/">🏠 Home</Link>
        <Link to="/timeline">📜 Timeline</Link>
        <Link to="/compare">🧠 Compare</Link>
        <Link to="/quiz">❓ Quiz</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? '🌞 Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
