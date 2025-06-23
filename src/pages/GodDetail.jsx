// src/components/GodDetail.jsx
import React from 'react';
import gods from '../data/gods.json';
import { useParams } from 'react-router-dom';

const GodDetail = () => {
  const { name } = useParams();

  if (!name) {
    return <h2 style={{ color: 'red', textAlign: 'center' }}>No god selected in the URL.</h2>;
  }

  const god = gods.find(g => g.name?.toLowerCase() === name.toLowerCase());

  if (!god) {
    return <h2 style={{ color: 'red', textAlign: 'center' }}>God "{name}" Not Found 😢</h2>;
  }

  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px 20px',
      background: 'linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #000)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <div style={{
        maxWidth: '960px',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        color: '#fff',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
        transition: 'transform 0.3s ease',
      }}>
        <img
          src={require(`../assets/${god.image}`)}
          alt={god.name}
          style={{
            width: '100%',
            maxHeight: '450px',
            objectFit: 'contain', // ✅ Show full image
            borderRadius: '12px',
            backgroundColor: '#000',
            marginBottom: '25px',
            boxShadow: '0 0 10px rgba(255,255,255,0.2)'
          }}
        />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', textAlign: 'center' }}>{god.name}</h1>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', textAlign: 'center', color: '#fdd835' }}>
          Religion: {god.religion}
        </h3>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'justify' }}>{god.description}</p>
      </div>

      {/* Background animation */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default GodDetail;
