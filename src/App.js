// src/App.jsx
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Compare from './pages/Compare';
import Quiz from './pages/QuizArena';
import Timeline from './pages/Timeline';
import GodDetail from './pages/GodDetail';
import './App.scss'; // Global styles

const App = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio('/sounds/myth-music.mp3'); // ✅ Correct name
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    const playMusic = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.warn('Autoplay blocked until user interacts');
      }
    };

    playMusic();

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsMuted(false);
    } else {
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <button className="music-toggle" onClick={toggleAudio}>
          {isMuted ? '🔇' : '🎵'}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/god/:name" element={<GodDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
