import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import { experiences } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="section-container relative z-10">
        <SectionHeading
          tag="Career"
          title="Experience & Professional Journey"
          subtitle="Hands-on development experience and real-world project contributions"
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.1}>
              <div className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-indigo via-accent-violet/40 to-transparent" />

                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-indigo border-2 border-midnight-950 ring-4 ring-accent-indigo/25 shadow-sm shadow-accent-indigo/50" />

                {/* Content card */}
                <div className="bg-midnight-900/80 border border-white/[0.08] rounded-2xl p-6 sm:p-8 hover:bg-midnight-900/95 hover:border-accent-indigo/30 transition-all duration-300 shadow-xl backdrop-blur-xl">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/20 flex-shrink-0">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-accent-cyan text-sm font-semibold mt-0.5">{exp.company}</p>
                        <p className="text-slate-300 text-sm font-medium mt-1">Project: {exp.project}</p>
                      </div>
                    </div>

                    <div className="sm:self-start">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300">
                        <Calendar size={13} className="text-accent-indigo" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 size={16} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
