import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const CursorSpotlight: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement with snappier physics for a premium feel
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values directly without re-rendering component
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Smaller, cleaner gradient structure
  // Uses Verdaza Light Accent (#1ad8ac) for a bright core and Primary (#06b48b) for the diffuse glow
  const background = useMotionTemplate`radial-gradient(
    300px circle at ${smoothX}px ${smoothY}px,
    rgba(26, 216, 172, 0.25),
    rgba(6, 180, 139, 0.1) 40%,
    transparent 70%
  )`;

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background,
      }}
    />
  );
};

export default CursorSpotlight;