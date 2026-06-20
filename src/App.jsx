import React, { useState, useEffect } from 'react';
import './App.css';
import EnvelopeScene from './components/EnvelopeScene';
import LetterBook from './components/LetterBook';
import FloatingPetals from './components/FloatingPetals';
import MusicButton from './components/MusicButton';

function App() {
  const [stage, setStage] = useState('envelope'); // 'envelope' | 'opening' | 'letter'

  const handleOpenEnvelope = () => {
    setStage('opening');
    setTimeout(() => setStage('letter'), 1800);
  };

  return (
    <div className="app-root">
      <FloatingPetals />
      <MusicButton />

      {(stage === 'envelope' || stage === 'opening') && (
        <EnvelopeScene
          isOpening={stage === 'opening'}
          onOpen={handleOpenEnvelope}
        />
      )}

      {stage === 'letter' && (
        <LetterBook />
      )}
    </div>
  );
}

export default App;
