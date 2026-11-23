import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
}

export default function GlassCard({ children, className = '', hover = true, padding = 'p-6' }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`
        bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl
        ${hover ? 'transition-all duration-300 hover:bg-white/[0.06] hover:border-accent-indigo/20 hover:shadow-lg hover:shadow-accent-indigo/5' : ''}
        ${padding}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
