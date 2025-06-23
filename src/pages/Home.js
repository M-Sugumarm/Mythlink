import React from 'react';
import { useNavigate } from 'react-router-dom';
import godData from '../data/godData.json';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (god) => {
    navigate(`/god/${god.name}`, { state: god });
  };

  return (
    <div className="home-container">
      <h1 className="main-heading">⚡ MythLink EDU – Explore Gods Across Cultures</h1>
      <p className="subheading">🌟 Tap on any god to dive into their divine stories and powers!</p>

      <div className="god-grid">
        {godData.map((god, i) => (
          <div key={i} className="god-card" onClick={() => handleClick(god)}>
            <img
              src={require(`../assets/${god.image}`)}
              alt={god.name}
              className="god-img"
            />
            <div className="god-info">
              <h3>{god.name} 🔱</h3>
              <p>{god.culture}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
