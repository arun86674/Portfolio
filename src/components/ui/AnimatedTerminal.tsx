import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const terminalLines = [
  { text: '> const developer = {', color: 'text-slate-300' },
  { text: '    name: "Arun K",', color: 'text-emerald-400' },
  { text: '    role: "Software Engineer",', color: 'text-emerald-400' },
  { text: '    skills: ["Java", "React", "Spring Boot"],', color: 'text-sky-400' },
  { text: '    passion: "Building solutions"', color: 'text-amber-400' },
  { text: '  };', color: 'text-slate-300' },
  { text: '', color: '' },
  { text: '> developer.build("EzyConnect");', color: 'text-violet-400' },
  { text: '✓ Project deployed successfully', color: 'text-emerald-400' },
];

export default function AnimatedTerminal() {
  const prefersReducedMotion = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(prefersReducedMotion ? terminalLines.length : 0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let currentLine = 0;
    const interval = setInterval(() => {
      currentLine++;
      setVisibleLines(currentLine);
      if (currentLine >= terminalLines.length) {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full max-w-lg"
    >
      <div className="rounded-2xl overflow-hidden bg-navy-950/80 border border-white/[0.08] shadow-2xl shadow-accent-indigo/10">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-slate-500 font-mono">portfolio.ts</span>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-sm leading-relaxed min-h-[260px]">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`${line.color} ${line.text === '' ? 'h-4' : ''}`}
            >
              {line.text}
            </motion.div>
          ))}
          {/* Blinking cursor */}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block w-2.5 h-5 bg-accent-indigo/70 mt-1 rounded-sm"
          />
        </div>
      </div>
    </motion.div>
  );
}
