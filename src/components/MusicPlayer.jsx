import React from 'react';
import './MusicPlayer.scss';
import mythMusic from '../assets/myth-music.mp3'; // ✅ Make sure this file exists

const MusicPlayer = () => {
  return (
    <div className="music-player">
      <audio controls autoPlay loop>
        <source src={mythMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
