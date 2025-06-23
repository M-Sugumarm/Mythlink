// src/components/Compare.jsx
import React, { useState } from 'react';
import './Compare.scss';

import Ra from '../assets/Ra.jpg';
import Shiva from '../assets/Shiva.jpg';
import Vishnu from '../assets/Vishnu.jpg';
import Thor from '../assets/Thor.jpg';
//import Ganesha from '../assets/ganesha.jpg';

const gods = [
  {
    name: 'Lord Shiva',
    image: Shiva,
    power: 'Destruction & Meditation',
    symbol: '🕉️ Trident',
    strength: 5,
    origin: 'Mount Kailash',
    domain: 'Hindu Mythology',
    weapon: 'Trishul',
    story: 'Shiva is the destroyer of evil and the transformer within the Trimurti.'
  },
  {
    name: 'Lord Vishnu',
    image: Vishnu,
    power: 'Preservation & Protection',
    symbol: '🔱 Sudarshan Chakra',
    strength: 4,
    origin: 'Vaikuntha',
    domain: 'Hindu Mythology',
    weapon: 'Chakra',
    story: 'Vishnu preserves and protects the universe, appearing in many avatars.'
  },
  {
    name: 'Ra (Egyptian Sun God)',
    image: Ra,
    power: 'Sun, Light & Creation',
    symbol: '☀️ Sun Disk',
    strength: 5,
    origin: 'Heliopolis',
    domain: 'Egyptian Mythology',
    weapon: 'Sun Chariot',
    story: 'Ra is the sun god who travels across the sky each day in a solar barque.'
  },
  {
    name: 'Thor (Norse God)',
    image: Thor,
    power: 'Thunder & Protection',
    symbol: '⚡ Mjölnir',
    strength: 4,
    origin: 'Asgard',
    domain: 'Norse Mythology',
    weapon: 'Hammer (Mjölnir)',
    story: 'Thor is the god of thunder, known for his immense strength and loyalty.'
  },
  
];

const Compare = () => {
  const [selected1, setSelected1] = useState(gods[0]);
  const [selected2, setSelected2] = useState(gods[1]);

  const getStrengthStars = (count) => '🌟'.repeat(count);

  return (
    <div className="compare-background">
      <div className="compare-overlay">
        <h2 className="text-center title">🌌 MythLink: Divine Duel ⚔️</h2>

        <div className="row selectors mb-4">
          <div className="col-md-6">
            <label className="form-label">Choose God 1</label>
            <select className="form-select" onChange={(e) => setSelected1(gods[e.target.value])}>
              {gods.map((god, index) => (
                <option key={index} value={index}>{god.name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Choose God 2</label>
            <select className="form-select" onChange={(e) => setSelected2(gods[e.target.value])}>
              {gods.map((god, index) => (
                <option key={index} value={index}>{god.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {[selected1, selected2].map((god, idx) => (
            <div className="col-lg-6" key={idx}>
              <div className="god-entry d-flex align-items-center">
                <img src={god.image} alt={god.name} className="god-thumb me-3" />
                <div className="god-details">
                  <h4 className="fw-bold mb-2">{god.name}</h4>
                  <p><strong>Power:</strong> {god.power}</p>
                  <p><strong>Strength:</strong> {getStrengthStars(god.strength)}</p>
                  <p><strong>Symbol:</strong> {god.symbol}</p>
                  <p><strong>Origin:</strong> {god.origin}</p>
                  <p><strong>Weapon:</strong> {god.weapon}</p>
                  <p><strong>Domain:</strong> {god.domain}</p>
                  <p><strong>Story:</strong> <em>{god.story}</em></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;