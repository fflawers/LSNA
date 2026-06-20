import React, { useEffect, useRef } from 'react';
import './FloatingPetals.css';

const PETAL_COUNT = 18;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function FloatingPetals() {
  return (
    <div className="petals-container" aria-hidden="true">
      {Array.from({ length: PETAL_COUNT }).map((_, i) => {
        const left = randomBetween(0, 100);
        const delay = randomBetween(0, 12);
        const duration = randomBetween(8, 16);
        const size = randomBetween(10, 22);
        const rotate = randomBetween(0, 360);
        const type = i % 3; // 0=heart, 1=petal, 2=leaf

        return (
          <div
            key={i}
            className={`petal petal-type-${type}`}
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              width: `${size}px`,
              height: `${size}px`,
              '--rotate-start': `${rotate}deg`,
              '--rotate-end': `${rotate + 180}deg`,
            }}
          />
        );
      })}
    </div>
  );
}
