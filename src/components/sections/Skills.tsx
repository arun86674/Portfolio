import SectionHeading from '../ui/SectionHeading';
import SkillCard from '../ui/SkillCard';
import ScrollReveal from '../ui/ScrollReveal';
import { skillCategories } from '../../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-indigo/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.name} delay={catIndex * 0.05}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-indigo mb-5">
                  {category.name}
                </h3>
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
