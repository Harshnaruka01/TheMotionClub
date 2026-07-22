import { useEffect, useRef, useState } from 'react';
import { MARQUEE_IMAGES } from '../data/content';

const ROW1 = MARQUEE_IMAGES.slice(0, 11);
const ROW2 = MARQUEE_IMAGES.slice(11);

function MarqueeRow({
  images,
  direction,
  offset,
}: {
  images: string[];
  direction: 'left' | 'right';
  offset: number;
}) {
  const tripled = [...images, ...images, ...images];
  const translateX =
    direction === 'right' ? offset - 200 : -(offset - 200);

  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${translateX}px)`,
        willChange: 'transform',
      }}
    >
      {tripled.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="group relative h-[270px] w-[420px] flex-shrink-0 overflow-hidden rounded-2xl"
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculated =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculated);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-dark pt-24 sm:pt-32 md:pt-40 pb-10"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={ROW1} direction="right" offset={offset} />
        <MarqueeRow images={ROW2} direction="left" offset={offset} />
      </div>
    </section>
  );
}
