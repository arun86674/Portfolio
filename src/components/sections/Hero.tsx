import { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import Button from '../ui/Button';
import AnimatedTerminal from '../ui/AnimatedTerminal';
import { heroContent, socialLinks, personalInfo } from '../../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'photo' | 'terminal'>('photo');

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:py-0">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-indigo/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-violet/12 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-accent-blue/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Text & Pitch */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <motion.div variants={item} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </motion.div>

            {/* Title / Name */}
            <motion.div variants={item}>
              <span className="text-xs uppercase tracking-[0.25em] text-accent-indigo font-semibold block mb-2">
                {heroContent.greeting}
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                <span className="gradient-text">{heroContent.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 mt-3">
                {heroContent.headline}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl"
            >
              {heroContent.description}
            </motion.p>

            {/* Quick Contact Line */}
            <motion.div
              variants={item}
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

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <Button href="#projects" size="lg">
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
            <motion.div variants={item} className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Find me on</span>
              <div className="flex gap-2.5">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-indigo/40 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-indigo/40 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-indigo/40 transition-all duration-300"
                  aria-label="LeetCode Profile"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-indigo/40 transition-all duration-300"
                  aria-label="Email Arun K"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Showcase (Portrait Card / Animated Terminal) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* View Switcher Controls */}
            <div className="inline-flex p-1 mb-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <button
                onClick={() => setActiveTab('photo')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'photo'
                    ? 'bg-gradient-to-r from-accent-indigo to-accent-violet text-white shadow-md shadow-accent-indigo/30'
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
                    ? 'bg-gradient-to-r from-accent-indigo to-accent-violet text-white shadow-md shadow-accent-indigo/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TerminalIcon size={14} />
                Terminal
              </button>
            </div>

            {/* Active View */}
            {activeTab === 'photo' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-sm sm:max-w-md"
              >
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-blue opacity-30 blur-xl"></div>

                <div className="relative rounded-3xl overflow-hidden bg-navy-950/80 border border-white/[0.12] p-4 backdrop-blur-2xl shadow-2xl">
                  {/* Photo container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-navy-900 border border-white/[0.08] group">
                    <img
                      src={personalInfo.photoUrl}
                      alt="Arun K - Aspiring Software Engineer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent pointer-events-none" />

                    {/* Overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/10 text-[11px] text-accent-indigo font-medium mb-1.5">
                        <Sparkles size={12} />
                        Computer Science & Engineering
                      </div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
                        Arun K
                        <CheckCircle2 size={16} className="text-accent-blue" />
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
                transition={{ duration: 0.4 }}
                className="w-full max-w-sm sm:max-w-md"
              >
                <AnimatedTerminal />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
