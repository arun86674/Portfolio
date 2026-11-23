import { GraduationCap, MapPin, Calendar, Award, School } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import { educationList } from '../../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Academic credentials and foundational milestones"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationList.map((edu, index) => {
            const Icon = edu.isCollege ? GraduationCap : School;
            return (
              <ScrollReveal key={edu.id} delay={index * 0.1}>
                <GlassCard padding="p-7 sm:p-8" hover={true} className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-accent-indigo/10 text-accent-indigo flex-shrink-0">
                        <Icon size={26} />
                      </div>
                      <span className="text-xs text-slate-400 font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5">
                        <Calendar size={12} className="text-accent-indigo" />
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1.5">
                      {edu.institution}
                    </h3>
                    <p className="text-accent-indigo font-medium text-sm mb-4">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                      <Award size={15} />
                      <span>{edu.grade}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin size={14} className="text-slate-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
