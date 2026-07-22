import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import { AnimatedCounter } from '../components/MobileMenu';
import { GradientButton } from '../components/Buttons';
import { STATS } from '../data/content';

const DECORATIONS = [
  {
    src: 'https://images.unsplash.com/photo-1464822759844-d150baec0131?w=400&h=400&fit=crop',
    className:
      'absolute top-[4%] left-[1%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px] rounded-3xl object-cover',
    delay: 0.1,
    x: -80,
  },
  {
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    className:
      'absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px] rounded-3xl object-cover',
    delay: 0.25,
    x: -80,
  },
  {
    src: 'https://images.unsplash.com/photo-1526401485004-2aa4bef4891d?w=400&h=400&fit=crop',
    className:
      'absolute top-[4%] right-[1%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px] rounded-3xl object-cover',
    delay: 0.15,
    x: 80,
  },
  {
    src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=350&h=350&fit=crop',
    className:
      'absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px] rounded-3xl object-cover',
    delay: 0.3,
    x: 80,
  },
];

export default function AboutSection() {
  const text =
    "The Motion Club is more than a fitness club. We are a community built on movement, wellness, friendship, and adventure. Every run, every yoga session, every trek, and every challenge helps people become healthier, happier, and more connected. Whether you're taking your first step or training for your next marathon, you'll always find support, motivation, and a place to belong.";

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      {DECORATIONS.map((d) => (
        <FadeIn
          key={d.src}
          delay={d.delay}
          x={d.x}
          y={0}
          duration={0.9}
          className="pointer-events-none"
        >
          <img src={d.src} alt="" className={d.className} loading="lazy" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Who We Are
          </h2>
        </FadeIn>

        <AnimatedText
          text={text}
          className="max-w-[640px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-light"
        />

        <div className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.2 + i * 0.1}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-8 sm:mt-12">
          <GradientButton label="Contact Us" />
        </FadeIn>
      </div>
    </section>
  );
}
