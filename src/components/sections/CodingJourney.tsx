import { Code2, ExternalLink, Github, Terminal, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { codingJourney, socialLinks } from '../../data/portfolio';

export default function CodingJourney() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-container relative z-10">
        <SectionHeading
          tag="Problem Solving"
          title={codingJourney.heading}
          subtitle="My journey in Data Structures, Algorithms, and computational thinking"
        />

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <GlassCard padding="p-8 sm:p-10" hover={false} className="relative overflow-hidden">
              {/* Subtle accent corner glow */}
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-accent-indigo/10 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/20">
                  <Terminal size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Continuous Practice & Growth</h3>
                  <p className="text-xs text-accent-cyan font-mono mt-0.5 flex items-center gap-1.5">
                    <Sparkles size={12} />
                    Data Structures &amp; Algorithms
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8 text-base">
                {codingJourney.description}
              </p>

              {/* Profile links with glowing hover */}
              <div className="flex flex-wrap gap-4">
                <Button
                  href={socialLinks.leetcode}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-300"
                >
                  <Code2 size={18} className="text-amber-400" />
                  LeetCode Profile
                  <ExternalLink size={14} className="ml-1 opacity-60" />
                </Button>
                <Button
                  href={socialLinks.github}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-accent-cyan/50 hover:bg-accent-cyan/10 hover:text-cyan-300"
                >
                  <Github size={18} className="text-accent-cyan" />
                  GitHub Profile
                  <ExternalLink size={14} className="ml-1 opacity-60" />
                </Button>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
