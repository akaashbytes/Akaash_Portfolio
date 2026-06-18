// src/context/RippleContext.jsx
import React, { createContext, useState, useCallback } from 'react';

export const RippleContext = createContext({
  createRipple: () => {}
});

export const RippleProvider = ({ children }) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = useCallback((x, y) => {
    setRipples(r => [...r, { x, y, radius: 0, alpha: 0.5 }]);
  }, []);

  return (
    <RippleContext.Provider value={{ createRipple, ripples, setRipples }}>
      {children}
    </RippleContext.Provider>
  );
};
