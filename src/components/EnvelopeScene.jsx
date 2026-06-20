import React from 'react';
import './EnvelopeScene.css';

export default function EnvelopeScene({ isOpening, onOpen }) {
  return (
    <div className={`envelope-scene ${isOpening ? 'opening' : ''}`}>

      {/* Ambient glow */}
      <div className="scene-glow" aria-hidden="true" />

      {/* Title */}
      <div className={`scene-title ${isOpening ? 'fade-out' : ''}`}>
        <p className="scene-subtitle">Con todo mi amor para:</p>
        <h1 className="scene-heading">Sarai</h1>
        <div className="scene-divider">
          <span>✦</span><span>❤</span><span>✦</span>
        </div>
      </div>

      {/* The Envelope */}
      <div className={`envelope-wrapper ${isOpening ? 'envelope-open' : ''}`}>
        <div className="envelope">
          {/* Back of envelope */}
          <div className="env-back" />

          {/* Left flap */}
          <div className="env-flap env-flap-left" />
          {/* Right flap */}
          <div className="env-flap env-flap-right" />
          {/* Bottom flap */}
          <div className="env-flap env-flap-bottom" />

          {/* Top flap (opens) */}
          <div className="env-flap env-flap-top" />

          {/* Wax seal */}
          <div className={`wax-seal ${isOpening ? 'seal-break' : ''}`}>
            <span>❤</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      {!isOpening && (
        <button
          id="open-envelope-btn"
          className="open-btn"
          onClick={onOpen}
          aria-label="Abrir la carta"
        >
          <span className="open-btn-text">Abrir la carta</span>
          <span className="open-btn-icon">✉</span>
        </button>
      )}

      {/* Scroll invitation */}
      {!isOpening && (
        <p className="scroll-hint">Haz clic para revelar tu sorpresa ✨</p>
      )}
    </div>
  );
}
