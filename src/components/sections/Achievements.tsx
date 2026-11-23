import { Trophy, Users, Award, ShieldCheck, CheckCircle2, Cloud } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import { achievements, certifications } from '../../data/portfolio';

const typeIcons = {
  award: Trophy,
  membership: Cloud,
  certification: Award,
};

const typeColors = {
  award: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
  membership: 'bg-sky-500/10 text-sky-400 border-sky-500/25',
  certification: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <SectionHeading
          title="Achievements & Certifications"
          subtitle="Honors, leadership roles, and verified professional credentials"
        />

        {/* 1. Honors & Leadership */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-indigo mb-6 text-center">
            Honors & Leadership
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = typeIcons[achievement.type] || Trophy;
              const colorClass = typeColors[achievement.type] || typeColors.award;
              return (
                <ScrollReveal key={achievement.id} delay={index * 0.1}>
                  <GlassCard className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex p-3 rounded-xl border ${colorClass}`}>
                          <Icon size={22} />
                        </div>
                        <span className="text-xs text-slate-400 font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                          {achievement.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* 2. Verified Certifications */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-violet mb-2">
              Verified Certifications
            </h3>
            <p className="text-xs text-slate-400">
              Coursework and technical certifications verified from resume
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.id} delay={index * 0.05}>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-accent-violet/30 transition-all duration-300 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-sm font-semibold text-white leading-snug">
                      {cert.title}
                    </h5>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[11px] text-slate-400 font-medium">
                        {cert.issuer}
                      </span>
                      {cert.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-accent-violet/10 text-accent-violet border border-accent-violet/20 font-mono">
                          {cert.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
