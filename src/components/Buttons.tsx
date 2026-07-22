import { Magnet } from './FadeIn';

interface GradientButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export function GradientButton({ label, className = '', onClick }: GradientButtonProps) {
  return (
    <Magnet strength={4} padding={100}>
      <button
        type="button"
        onClick={onClick}
        className={`gradient-btn rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 outline-offset-[-3px] outline-white/80 transition-opacity hover:opacity-90 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      >
        {label}
      </button>
    </Magnet>
  );
}

export function GhostButton({ label, className = '', onClick }: GradientButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`ghost-btn rounded-full px-8 py-3 text-sm font-medium uppercase tracking-widest text-light sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {label}
    </button>
  );
}
