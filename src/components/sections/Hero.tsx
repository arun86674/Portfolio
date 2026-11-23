import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  Sparkles,
  Terminal as TerminalIcon,
  User,
  MapPin,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import Button from '../ui/Button';
import AnimatedTerminal from '../ui/AnimatedTerminal';
import { heroContent, socialLinks, personalInfo } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Floating programming glyphs that drift gently in the background
const floatingSymbols = [
  { text: '</>', top: '15%', left: '8%', delay: 0, duration: 7 },
  { text: '{ }', top: '75%', left: '5%', delay: 1, duration: 8 },
  { text: '=>', top: '22%', right: '10%', delay: 1.5, duration: 6 },
  { text: '01', top: '80%', right: '12%', delay: 2, duration: 9 },
  { text: '⚡', top: '48%', left: '3%', delay: 0.5, duration: 7.5 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'photo' | 'terminal'>('photo');
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Subtle 3D tilt tracking for desktop
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || window.innerWidth < 1024 || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:py-0">
      {/* 1. Floating Programming Symbols */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {floatingSymbols.map((s, i) => (
            <motion.div
              key={i}
              style={{ top: s.top, left: s.left, right: s.right }}
              animate={{
                y: [0, -18, 0],
                rotate: [0, 6, -6, 0],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: s.duration,
                delay: s.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute font-mono text-xl sm:text-2xl font-bold text-accent-indigo/25 backdrop-blur-sm"
            >
              {s.text}
            </motion.div>
          ))}
        </div>
      )}

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text & Content Reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium shadow-sm shadow-emerald-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.status}</span>
            </motion.div>

            {/* Title / Name with Animated Text Reveal */}
            <motion.div variants={itemVariants}>
              <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan font-mono font-semibold block mb-2">
                {heroContent.greeting}
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                <span className="gradient-text-animated">{heroContent.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 mt-3 flex items-center gap-2">
                <span>{heroContent.headline}</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              {heroContent.description}
            </motion.p>

            {/* Quick Contact Line */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-1"
            >
              <div className="flex items-center gap-1.5">
                <MapPin size={15} className="text-accent-indigo" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-accent-indigo transition-colors flex items-center gap-1.5"
              >
                <Mail size={15} className="text-accent-indigo" />
                <span>{personalInfo.email}</span>
              </a>
            </motion.div>

            {/* CTA Buttons with hover effects */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Button href="#projects" size="lg" className="shadow-lg shadow-accent-indigo/25 hover:shadow-accent-indigo/40">
                <ArrowDown size={18} />
                {heroContent.cta1}
              </Button>
              <Button
                href={personalInfo.resumeUrl}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                {heroContent.cta2}
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect</span>
              <div className="flex gap-2.5">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-indigo/50 hover:shadow-md hover:shadow-accent-indigo/20 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-indigo/50 hover:shadow-md hover:shadow-accent-indigo/20 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-indigo/50 hover:shadow-md hover:shadow-accent-indigo/20 transition-all duration-300"
                  aria-label="LeetCode Profile"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-indigo/50 hover:shadow-md hover:shadow-accent-indigo/20 transition-all duration-300"
                  aria-label="Email Arun K"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Interactive 3D Developer Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center perspective-1000">
            {/* View Switcher Controls */}
            <div className="inline-flex p-1 mb-4 rounded-xl bg-white/[0.05] border border-white/[0.1] backdrop-blur-md shadow-lg">
              <button
                onClick={() => setActiveTab('photo')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'photo'
                    ? 'bg-gradient-to-r from-accent-indigo to-accent-violet text-white shadow-md shadow-accent-indigo/35'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <User size={14} />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('terminal')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'terminal'
                    ? 'bg-gradient-to-r from-accent-indigo to-accent-violet text-white shadow-md shadow-accent-indigo/35'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TerminalIcon size={14} />
                Terminal
              </button>
            </div>

            {/* Showcase Container with 3D Tilt Effect */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full max-w-sm sm:max-w-md preserve-3d"
            >
              {activeTab === 'photo' ? (
                <motion.div
                  style={{
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                  className="relative w-full"
                >
                  {/* Glowing ambient border */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan opacity-35 blur-xl animate-pulse-slow" />

                  <div className="relative rounded-3xl overflow-hidden bg-midnight-900/90 border border-white/[0.12] p-4 backdrop-blur-2xl shadow-2xl">
                    {/* Portrait container */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-midnight-950 border border-white/[0.08] group">
                      <img
                        src={personalInfo.photoUrl}
                        alt="Arun K - Software Engineer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/95 via-transparent to-transparent pointer-events-none" />

                      {/* Overlay info */}
                      <div className="absolute bottom-4 left-4 right-4 text-left">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-midnight-950/80 backdrop-blur-md border border-white/10 text-[11px] text-accent-cyan font-medium mb-1.5">
                          <Sparkles size={12} />
                          Computer Science & Engineering
                        </div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
                          Arun K
                          <CheckCircle2 size={16} className="text-accent-cyan" />
                        </h3>
                        <p className="text-xs text-slate-300">Karpagam College of Engineering • 2024–2028</p>
                      </div>
                    </div>

                    {/* Tech stack highlights */}
                    <div className="mt-3.5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-mono">Specializing in</span>
                      <div className="flex gap-1.5">
                        {['Java', 'Spring Boot', 'React', 'DSA'].map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                  className="w-full"
                >
                  <AnimatedTerminal />
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="hidden md:flex justify-center mt-12 lg:mt-16"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-accent-indigo transition-colors"
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={16} className="text-accent-indigo" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
