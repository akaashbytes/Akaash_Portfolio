// src/components/TiltCard.jsx
import React from 'react';
import Tilt from 'react-parallax-tilt';

/**
 * Wraps any child component with a 3D tilt effect.
 * Uses react‑parallax‑tilt for smooth hardware‑accelerated interaction.
 * The component adds a subtle orange glow on hover to match the premium theme.
 */
export const TiltCard = ({ children }) => (
  <Tilt
    perspective={1000}
    glareEnable={false}
    scale={1.03}
    transitionSpeed={1500}
    tiltEnable={true}
    className="group"
  >
    <div className="relative transition-shadow duration-300 group-hover:shadow-[0_0_20px_#ff9900] rounded-xl overflow-hidden">
      {children}
    </div>
  </Tilt>
);
