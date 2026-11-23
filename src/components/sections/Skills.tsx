import SectionHeading from '../ui/SectionHeading';
import SkillCard from '../ui/SkillCard';
import ScrollReveal from '../ui/ScrollReveal';
import { skillCategories } from '../../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-accent-indigo/6 rounded-full blur-[170px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          tag="Expertise"
          title="Technical Skills"
          subtitle="Core programming languages, frameworks, developer tools, and computer science foundations"
        />

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.name} delay={catIndex * 0.06}>
              <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-accent-indigo animate-pulse" />
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-indigo font-mono">
                      {category.name}
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill}
                      name={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
