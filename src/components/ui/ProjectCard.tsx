import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Calendar, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative flex flex-col h-full"
    >
      <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08]
        hover:bg-white/[0.05] hover:border-accent-indigo/30 transition-all duration-300
        hover:shadow-xl hover:shadow-accent-indigo/10">

        {/* Gradient accent top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-accent-indigo to-accent-violet opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="p-6 sm:p-7 flex flex-col flex-1">
          {/* Top badges & Period */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              {project.featured && (
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-accent-indigo/15 text-accent-indigo border border-accent-indigo/25">
                  Featured
                </span>
              )}
            </div>
            {project.period && (
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1 font-mono">
                <Calendar size={12} className="text-slate-500" />
                {project.period}
              </span>
            )}
          </div>

          {/* Title */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent-indigo transition-colors duration-300">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-slate-500 group-hover:text-accent-indigo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-1 flex-shrink-0"
            />
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Key Deliverables / Points from Resume */}
          {project.points && project.points.length > 0 && (
            <div className="mb-5 space-y-2 pt-2 border-t border-white/[0.06]">
              {project.points.slice(0, 2).map((point, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                  <CheckCircle2 size={13} className="text-accent-indigo/70 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{point}</span>
                </div>
              ))}
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-5 pt-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-accent-indigo transition-colors duration-300"
              >
                <Github size={15} />
                Repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-accent-violet transition-colors duration-300"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
