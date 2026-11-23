import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react';
import { navLinks, socialLinks } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-midnight-950/90 backdrop-blur-xl z-10">
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <a href="#home" className="text-xl font-extrabold text-white group">
              <span>ARUN</span>
              <span className="text-accent-indigo group-hover:text-accent-cyan transition-colors">.K</span>
            </a>
            <p className="text-sm text-slate-400 mt-3 max-w-xs leading-relaxed">
              Designed and built with curiosity, engineering passion, and code.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4 font-mono">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-accent-cyan transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4 font-mono">Connect</h4>
            <div className="flex gap-2.5">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-accent-cyan/40 hover:bg-white/[0.06] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-accent-indigo/40 hover:bg-white/[0.06] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-accent-cyan/40 hover:bg-white/[0.06] transition-all duration-300"
                aria-label="LeetCode"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            © {currentYear} Arun K. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 font-mono">
            Crafted with <Heart size={13} className="text-rose-500 fill-rose-500/20" /> &amp; React
          </p>
        </div>
      </div>
    </footer>
  );
}
