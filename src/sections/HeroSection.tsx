import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import MobileMenu from '../components/MobileMenu';
import { GradientButton, GhostButton } from '../components/Buttons';
import { HERO_VIDEO } from '../data/content';

const HEADLINE_WORDS = ['MOVE', 'TOGETHER.', 'LIVE', 'BETTER.'];

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="home"
      className="relative flex h-screen flex-col overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://images.unsplash.com/photo-1571008887538-b36bb745ef8e?w=1920&h=1080&fit=crop"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/90" />
      <div className="absolute inset-0 bg-accent/5" />
      <Particles />

      <FadeIn delay={0} y={-20} className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
        <a href="#home" className="text-lg font-bold uppercase tracking-wider text-light md:text-xl">
          TMC
        </a>
        <MobileMenu />
      </FadeIn>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 text-center">
        <h1 className="overflow-hidden">
          {HEADLINE_WORDS.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className="hero-heading block font-black uppercase leading-[0.9] tracking-tight"
                style={{ fontSize: 'clamp(3rem, 14vw, 180px)' }}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <FadeIn delay={0.7} y={20} className="mt-8 max-w-2xl">
          <p className="text-base font-light leading-relaxed text-muted sm:text-lg md:text-xl">
            The Motion Club is a community where movement becomes a lifestyle and every
            journey creates stronger minds, healthier bodies, and lifelong friendships.
          </p>
        </FadeIn>

        <FadeIn delay={0.85} y={20} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GradientButton label="Join Our Club" />
          <a href="#activities">
            <GhostButton label="Explore Activities" />
          </a>
        </FadeIn>
      </div>

      <FadeIn delay={1} y={10} className="relative z-10 flex justify-center pb-8">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </FadeIn>
    </section>
  );
}
