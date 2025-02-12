import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import "../styles/Header.css";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <header className="header">
      <h1>Quiz Pokémon - 1ère Génération</h1>
      <button className="music-button" onClick={toggleMusic}>
        <FontAwesomeIcon icon={isPlaying ? faMusic : faVolumeMute} />
      </button>
      <audio ref={audioRef} src="/sounds/pokemon-theme.mp3" loop />
    </header>
  );
};

export default Header;



