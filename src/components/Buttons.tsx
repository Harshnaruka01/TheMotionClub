import type { ReactNode } from 'react';
import { Magnet } from './FadeIn';

interface BaseButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

interface GradientButtonProps extends BaseButtonProps {
  icon?: ReactNode;
}

export function GradientButton({ label, className = '', onClick, icon, type = 'button' }: GradientButtonProps) {
  return (
    <Magnet strength={4} padding={100}>
      <button
        type={type}
        onClick={onClick}
        className={`gradient-btn rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 outline-offset-[-3px] outline-white/80 transition-opacity hover:opacity-90 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      >
        {label}
        {icon}
      </button>
    </Magnet>
  );
}

export function GhostButton({ label, className = '', onClick, type = 'button' }: BaseButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`ghost-btn rounded-full px-8 py-3 text-sm font-medium uppercase tracking-widest text-light sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {label}
    </button>
  );
}
