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
      transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.3) }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]
        hover:bg-white/[0.06] hover:border-accent-indigo/30 transition-all duration-300 group"
    >
      <div className="p-2 rounded-lg bg-accent-indigo/10 text-accent-indigo group-hover:bg-accent-indigo/20 transition-colors duration-300 flex-shrink-0">
        <Icon size={16} />
      </div>
      <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300 truncate">
        {name}
      </span>
    </motion.div>
  );
}
