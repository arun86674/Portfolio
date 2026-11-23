import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="section-container relative z-10">
        <SectionHeading
          tag="Portfolio"
          title="Featured Projects"
          subtitle="Production-grade platforms and practical engineering applications built with modern stacks"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
