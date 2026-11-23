import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  tag,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}
    >
      {/* Optional Top Tag Pill */}
      {tag && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/25 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          {tag}
        </span>
      )}

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      {/* Animated Gradient Indicator Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan origin-left ${
          isCenter ? 'mx-auto origin-center' : ''
        }`}
      />
    </motion.div>
  );
}
