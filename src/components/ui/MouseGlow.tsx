import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function MouseGlow() {
  const prefersReducedMotion = useReducedMotion();
  const [isEnabled, setIsEnabled] = useState(false);

  // Smooth springs for cursor interpolation
  const mouseX = useSpring(0, { damping: 28, stiffness: 220 });
  const mouseY = useSpring(0, { damping: 28, stiffness: 220 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Only enable on pointer-fine desktop devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isDesktop = window.innerWidth >= 1024;

    if (!isFinePointer || !isDesktop) return;

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  if (!isEnabled || prefersReducedMotion) return null;

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed top-0 left-0 w-[550px] h-[550px] rounded-full pointer-events-none z-10 bg-radial from-accent-indigo/[0.07] via-accent-violet/[0.03] to-transparent blur-2xl"
      aria-hidden="true"
    />
  );
}
