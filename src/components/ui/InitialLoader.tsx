import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface InitialLoaderProps {
  onComplete?: () => void;
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, 900);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion, onComplete]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight-950 select-none pointer-events-none"
        >
          {/* Ambient center pulse */}
          <div className="absolute w-72 h-72 rounded-full bg-accent-indigo/20 blur-[100px] animate-pulse" />

          {/* Logo Monogram */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex flex-col items-center"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              ARUN<span className="text-accent-indigo">.K</span>
            </h1>

            {/* Glowing progress line */}
            <div className="w-48 h-1 bg-white/[0.08] rounded-full overflow-hidden relative mb-3">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.75, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan"
              />
            </div>

            <p className="text-xs font-mono text-slate-500 tracking-wider">
              &gt; system.init(&quot;portfolio&quot;) · <span className="text-emerald-400">ready</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
