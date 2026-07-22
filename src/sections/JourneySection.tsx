import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { JOURNEY_MILESTONES } from '../data/content';

function TimelineItem({
  milestone,
  index,
  total,
}: {
  milestone: (typeof JOURNEY_MILESTONES)[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="sticky top-24 flex min-h-[40vh] flex-col items-center justify-center md:top-32"
    >
      <p className="hero-heading text-5xl font-black md:text-7xl">{milestone.year}</p>
      <h3 className="mt-4 text-center text-xl font-medium uppercase tracking-wide text-light sm:text-2xl md:text-3xl">
        {milestone.title}
      </h3>
      {index < total - 1 && (
        <motion.span
          className="mt-8 text-3xl text-accent"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.span>
      )}
    </motion.div>
  );
}

export default function JourneySection() {
  return (
    <section className="relative bg-dark px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn className="mb-16 text-center sm:mb-20">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Our Journey
        </h2>
      </FadeIn>

      <div className="relative mx-auto max-w-2xl">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-accent/30" />
        {JOURNEY_MILESTONES.map((milestone, i) => (
          <TimelineItem
            key={milestone.title}
            milestone={milestone}
            index={i}
            total={JOURNEY_MILESTONES.length}
          />
        ))}
      </div>
    </section>
  );
}
