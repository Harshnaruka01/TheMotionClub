import FadeIn from '../components/FadeIn';
import { ACTIVITIES } from '../data/content';

export default function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="rounded-t-[40px] bg-white px-5 py-20 text-dark sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn className="mb-16 text-center sm:mb-20 md:mb-28">
        <h2
          className="font-black uppercase leading-none tracking-tight text-dark"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Our Activities
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ACTIVITIES.map((activity, i) => (
          <FadeIn key={activity.title} delay={i * 0.1}>
            <article className="group relative overflow-hidden rounded-[40px] border-2 border-transparent transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-[0_0_30px_rgba(255,107,0,0.25)] sm:rounded-[50px] md:rounded-[60px]">
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <span className="absolute left-6 top-6 text-4xl">{activity.icon}</span>
              </div>
              <div className="glass-card bg-white/90 p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-medium uppercase text-dark sm:text-2xl">
                  {activity.title}
                </h3>
                <ul className="space-y-2">
                  {activity.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm font-light text-dark/70 sm:text-base"
                    >
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
