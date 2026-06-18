import { useState, useEffect } from 'react';

/**
 * Returns the current cursor coordinates (clientX, clientY).
 * Updates on each mousemove event.
 */
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return position;
};

export default useMousePosition;
