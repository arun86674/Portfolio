import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2.5',
};

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-accent-indigo to-accent-violet text-white shadow-lg shadow-accent-indigo/25 hover:shadow-accent-indigo/40 hover:brightness-110',
  secondary:
    'border border-accent-indigo/30 text-slate-200 hover:bg-accent-indigo/10 hover:border-accent-indigo/50',
  ghost:
    'text-slate-400 hover:text-slate-200 hover:bg-white/5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  href,
  target,
  rel,
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {icon}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </motion.button>
  );
}
