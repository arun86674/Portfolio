import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  Server,
  Database,
  GitBranch,
  Terminal,
  Cpu,
  Braces,
  FileCode,
  Box,
  Layers,
  Network,
  HardDrive,
  Workflow,
  ShieldCheck,
  Send,
  FileJson,
  Package,
  Monitor,
  Binary,
  type LucideIcon,
} from 'lucide-react';

const skillIcons: Record<string, LucideIcon> = {
  // Programming Languages
  'Java': Code2,
  'C++': Terminal,
  'Python': FileCode,
  'SQL': Database,
  'JavaScript': Braces,

  // DSA
  'Arrays & Strings': Binary,
  'Linked Lists': Workflow,
  'Stacks & Queues': Layers,
  'Trees & Graphs': Network,
  'Dynamic Programming': Cpu,
  'Binary Search': Terminal,
  'Backtracking': Workflow,

  // Web & Backend
  'HTML': Globe,
  'CSS': Layers,
  'React': Braces,
  'Tailwind CSS': Layers,
  'Spring Boot': Server,
  'REST APIs': Server,
  'Servlets': Server,
  'JSP': Globe,
  'Hibernate': Database,

  // Databases
  'Oracle SQL': Database,
  'Oracle Database': Database,
  'PostgreSQL': Database,

  // Tools
  'Git': GitBranch,
  'GitHub': GitBranch,
  'VS Code': Code2,
  'Eclipse': Code2,
  'Postman': Send,
  'Swagger/OpenAPI': FileJson,
  'Maven': Package,
  'Oracle SQL Developer': Database,

  // Core CS
  'Object-Oriented Programming': Box,
  'Database Management Systems': Database,
  'Operating Systems': Monitor,
  'Computer Networks': Network,
  'Computer Architecture': HardDrive,
  'Data Structures & Algorithms': Cpu,
  'Problem Solving': ShieldCheck,
  'DBMS': Database,
};

interface SkillCardProps {
  name: string;
  index: number;
}

export default function SkillCard({ name, index }: SkillCardProps) {
  const Icon = skillIcons[name] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.35), ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative flex items-center gap-3 px-3.5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08]
        hover:bg-white/[0.06] hover:border-accent-indigo/40 hover:shadow-lg hover:shadow-accent-indigo/10 transition-all duration-300"
    >
      {/* Icon with glowing hover effect */}
      <div className="p-2 rounded-lg bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/15 group-hover:bg-accent-indigo/25 group-hover:text-accent-cyan group-hover:border-accent-cyan/30 group-hover:shadow-sm group-hover:shadow-accent-indigo/30 transition-all duration-300 flex-shrink-0">
        <Icon size={16} />
      </div>

      {/* Label */}
      <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200 truncate">
        {name}
      </span>
    </motion.div>
  );
}
