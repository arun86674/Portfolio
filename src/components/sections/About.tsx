import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Code2, Sparkles, BookOpen } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import { aboutContent, personalInfo } from '../../data/portfolio';

const highlightIcons = [GraduationCap, Award, Calendar, MapPin];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <SectionHeading
          title={aboutContent.heading}
          subtitle="Passionate about systems architecture, software engineering, and continuous learning"
        />

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Avatar & Visual Profile Badge */}
          <ScrollReveal className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group">
              {/* Outer glow aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-blue opacity-25 blur-lg group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-white/10 bg-navy-950 p-2 shadow-xl">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-navy-900 border border-white/10 text-white text-xs font-semibold shadow-lg whitespace-nowrap flex items-center gap-1.5">
                <Code2 size={13} className="text-accent-indigo" />
                <span>Backend & Full-Stack</span>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
              <p className="text-accent-indigo text-xs sm:text-sm font-medium mt-0.5">
                {personalInfo.college}
              </p>
              <p className="text-slate-400 text-xs mt-1 flex items-center justify-center gap-1">
                <MapPin size={12} className="text-slate-500" />
                {personalInfo.location}
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Narrative Story & Key Highlights */}
          <div className="lg:col-span-8 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {aboutContent.paragraphs.map((p, i) => (
                  <p key={i} className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Philosophy Quote */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border-l-4 border-accent-indigo border-y border-r border-white/[0.06]">
                <p className="text-base sm:text-lg font-medium text-slate-200 italic flex items-center gap-2">
                  <Sparkles size={18} className="text-accent-indigo flex-shrink-0" />
                  "{aboutContent.philosophy}"
                </p>
              </div>
            </ScrollReveal>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              {aboutContent.highlights.map((h, i) => {
                const Icon = highlightIcons[i] || BookOpen;
                return (
                  <ScrollReveal key={h.label} delay={0.15 + i * 0.05}>
                    <GlassCard className="text-center !p-4">
                      <div className="w-9 h-9 mx-auto mb-2.5 rounded-xl bg-accent-indigo/10 flex items-center justify-center text-accent-indigo">
                        <Icon size={18} />
                      </div>
                      <p className="text-base font-bold text-white mb-0.5">{h.value}</p>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wider">{h.label}</p>
                    </GlassCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
