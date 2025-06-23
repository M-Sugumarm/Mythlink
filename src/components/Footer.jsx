import React from 'react';
import './Footer.scss';
import godDance from '../assets/god-dance.gif'; // 👉 Make sure this file exists

const Footer = () => (
  <footer className="app-footer">
    <div className="footer-content">
      <img src={godDance} alt="Dancing God" className="footer-gif" />
      <p>
        ⚡ <strong>MythLink EDU</strong> © {new Date().getFullYear()} — Powered by Culture 🌍<br />
        🔱 Explore the divine stories of <span className="rainbow-text">Gods</span> across time 🕉️
      </p>
      <div className="footer-icons">
        🕉️ ⚡ 🔱 ⛩️ 🏛️ ✝️ 🔮
      </div>
    </div>
  </footer>
);

export default Footer;
