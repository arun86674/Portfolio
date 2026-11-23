import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { navLinks } from '../../data/portfolio';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(
    navLinks.map((link) => link.href.replace('#', '')),
    120
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight-950/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-black/40 py-1'
          : 'bg-transparent py-2 sm:py-3'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo with glowing hover state */}
          <a
            href="#home"
            className="group relative flex items-center gap-1.5 text-xl font-extrabold tracking-tight text-white transition-all duration-300"
          >
            <span className="group-hover:text-accent-cyan transition-colors">ARUN</span>
            <span className="text-accent-indigo group-hover:text-accent-violet transition-colors">.K</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-xl transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-xl bg-white/[0.08] border border-white/[0.12] shadow-sm shadow-accent-indigo/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}

            <div className="ml-3 pl-3 border-l border-white/[0.08]">
              <Button href="#contact" size="sm" className="shadow-md shadow-accent-indigo/20">
                <Sparkles size={13} />
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-midnight-950/95 backdrop-blur-2xl border-b border-white/[0.08] overflow-hidden"
          >
            <div className="section-container py-5 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3 px-4">
                <Button href="#contact" size="sm" className="w-full" onClick={() => setIsOpen(false)}>
                  <Sparkles size={14} />
                  Let&apos;s Connect
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
