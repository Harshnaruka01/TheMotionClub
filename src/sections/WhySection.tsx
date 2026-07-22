import FadeIn from '../components/FadeIn';
import { WHY_FEATURES } from '../data/content';

export default function WhySection() {
  return (
    <section className="bg-dark px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn className="mb-16 text-center sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Why The Motion Club
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_FEATURES.map((feature, i) => (
          <FadeIn key={feature} delay={i * 0.08}>
            <div className="group glass-card rounded-[30px] p-6 transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_25px_rgba(255,107,0,0.2)] sm:rounded-[40px] sm:p-8">
              <div className="mb-4 h-1 w-8 rounded-full bg-accent transition-all duration-300 group-hover:w-16" />
              <p className="text-base font-medium uppercase tracking-wide text-light sm:text-lg">
                {feature}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
