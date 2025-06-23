import React from 'react';
import './GodCard.scss';

const GodCard = ({ name, culture, power, image }) => {
  return (
    <div className="god-card">
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={name} className="god-image" />
          <h2>{name}</h2>
          <p>{culture}</p>
        </div>
        <div className="card-back">
          <h3>{name}</h3>
          <p><strong>Culture:</strong> {culture}</p>
          <p><strong>Power:</strong> {power}</p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default GodCard;
