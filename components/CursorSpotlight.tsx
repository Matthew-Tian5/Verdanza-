import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const CursorSpotlight: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values directly without re-rendering component
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create a dynamic radial gradient based on cursor position
  const background = useMotionTemplate`radial-gradient(
    600px circle at ${smoothX}px ${smoothY}px,
    rgba(74, 222, 128, 0.15),
    transparent 80%
  )`;

  return (
    <motion.div
      className="fixed inset-0 z-[-1] pointer-events-none bg-offwhite"
      style={{
        background,
      }}
    />
  );
};

export default CursorSpotlight;