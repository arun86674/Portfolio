import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Calendar, CheckCircle2, Layers } from 'lucide-react';
import type { Project } from '../../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col h-full rounded-2xl"
    >
      {/* Animated gradient border glow on hover */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500 pointer-events-none" />

      {/* Main Card Content */}
      <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-midnight-900/90 border border-white/[0.08] group-hover:border-accent-indigo/40 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-black/40">

        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="p-6 sm:p-7 flex flex-col flex-1">
          {/* Top Badges & Period */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              {project.featured && (
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-accent-indigo/15 text-accent-indigo border border-accent-indigo/30 shadow-sm shadow-accent-indigo/10">
                  Featured Project
                </span>
              )}
            </div>
            {project.period && (
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1 font-mono">
                <Calendar size={12} className="text-accent-indigo" />
                {project.period}
              </span>
            )}
          </div>

          {/* Title & Arrow */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">
              {project.title}
            </h3>
            <div className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 group-hover:text-accent-cyan group-hover:bg-accent-cyan/10 transition-all duration-300">
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Key Deliverables / Points from Resume */}
          {project.points && project.points.length > 0 && (
            <div className="mb-5 space-y-2 pt-3 border-t border-white/[0.06]">
              {project.points.slice(0, 2).map((point, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                  <CheckCircle2 size={13} className="text-accent-indigo mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{point}</span>
                </div>
              ))}
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Technologies Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5 pt-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08] group-hover:border-accent-indigo/25 group-hover:text-white transition-all duration-200"
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
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-accent-cyan transition-colors duration-300"
              >
                <Github size={15} />
                <span>Repository</span>
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
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
