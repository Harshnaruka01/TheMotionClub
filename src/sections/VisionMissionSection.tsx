import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeIn from '../components/FadeIn';

gsap.registerPlugin(ScrollTrigger);

const MISSION_ITEMS = [
  'Create welcoming fitness communities.',
  'Promote physical and mental wellness.',
  'Encourage outdoor adventures.',
  'Support consistency over perfection.',
  'Help people build lifelong healthy habits.',
];

export default function VisionMissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from(rightRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="bg-dark px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn className="mb-16 text-center sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Vision & Mission
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-12">
        <div
          ref={leftRef}
          className="glass-card rounded-[40px] p-8 sm:rounded-[50px] sm:p-10 md:rounded-[60px] md:p-12"
        >
          <h3 className="mb-6 text-2xl font-black uppercase text-accent sm:text-3xl">
            Vision
          </h3>
          <p className="text-lg font-light leading-relaxed text-muted sm:text-xl">
            To inspire healthier, happier, and more connected communities by making
            movement a way of life.
          </p>
        </div>

        <div
          ref={rightRef}
          className="glass-card rounded-[40px] p-8 sm:rounded-[50px] sm:p-10 md:rounded-[60px] md:p-12"
        >
          <h3 className="mb-6 text-2xl font-black uppercase text-accent sm:text-3xl">
            Mission
          </h3>
          <ul className="space-y-4">
            {MISSION_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base font-light leading-relaxed text-muted sm:text-lg"
              >
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
