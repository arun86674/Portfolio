import { Code2, ExternalLink, Github, Terminal } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { codingJourney, socialLinks } from '../../data/portfolio';

export default function CodingJourney() {
  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-indigo/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          title={codingJourney.heading}
          subtitle="My journey in Data Structures & Algorithms"
        />

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <GlassCard padding="p-8 sm:p-10" hover={false}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-accent-indigo/10 text-accent-indigo">
                  <Terminal size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">Continuous Practice & Growth</h3>
              </div>

              <p className="text-slate-400 leading-relaxed mb-8">
                {codingJourney.description}
              </p>

              {/* Profile links */}
              <div className="flex flex-wrap gap-4">
                <Button
                  href={socialLinks.leetcode}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 size={18} />
                  LeetCode Profile
                  <ExternalLink size={14} className="ml-1 opacity-50" />
                </Button>
                <Button
                  href={socialLinks.github}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  GitHub Profile
                  <ExternalLink size={14} className="ml-1 opacity-50" />
                </Button>
              </div>


            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
