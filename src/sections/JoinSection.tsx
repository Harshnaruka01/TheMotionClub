import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { GradientButton, GhostButton } from '../components/Buttons';

export default function JoinSection() {
  return (
    <section
      id="join"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-40"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-dark to-dark" />
      <motion.div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[100px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-orange-400/15 blur-[80px]"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            Your Journey Starts Today.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20} className="mt-8">
          <p className="text-lg font-light leading-relaxed text-muted sm:text-xl">
            Take the first step toward a healthier, happier, and more adventurous life.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <GradientButton label="Become a Member" />
          <a href="#contact">
            <GhostButton label="Contact Us" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
