import React, { useState } from 'react';
import './MusicButton.css';

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = React.useRef(null);

  // 🎵 Pon aquí el nombre de tu canción (debe estar en la carpeta /public/)
  const SONG_FILE = '/nuestra-cancion.mp3'; // ← CAMBIA ESTO al nombre de tu archivo

  React.useEffect(() => {
    audioRef.current = new Audio(SONG_FILE);
    audioRef.current.loop = false;
    audioRef.current.volume = 0.25;

    // Cuando termina la canción, regresa el botón a su estado inicial
    const handleEnded = () => setPlaying(false);
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current.removeEventListener('ended', handleEnded);
      audioRef.current.pause();
    };
  }, []);

  const toggle = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      id="music-toggle-btn"
      className={`music-btn ${playing ? 'playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? 'Pausar música' : 'Reproducir música'}
      title={playing ? 'Pausar música' : 'Reproducir música'}
    >
      <span className="music-icon">{playing ? '🎵' : '🎶'}</span>
      <span className="music-bars" aria-hidden="true">
        <span /><span /><span /><span />
      </span>
    </button>
  );
}
