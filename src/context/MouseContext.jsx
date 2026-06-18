// src/context/MouseContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Provides real‑time mouse coordinates (relative to viewport)
export const MouseContext = createContext({ x: 0, y: 0 });

export const MouseProvider = ({ children }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <MouseContext.Provider value={mouse}>{children}</MouseContext.Provider>;
};
