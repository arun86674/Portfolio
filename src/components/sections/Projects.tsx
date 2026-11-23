import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import ScrollReveal from '../ui/ScrollReveal';
import { projects } from '../../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built and contributed to"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
