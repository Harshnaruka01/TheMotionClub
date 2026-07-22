import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { GALLERY_IMAGES } from '../data/content';

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn className="mb-16 text-center sm:mb-20 md:mb-28">
        <h2
          className="font-black uppercase leading-none tracking-tight text-dark"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Gallery
        </h2>
      </FadeIn>

      <div className="mx-auto columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
        {GALLERY_IMAGES.map((item, i) => (
          <FadeIn key={item.src} delay={(i % 6) * 0.08}>
            <div
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-[30px] sm:mb-6 sm:rounded-[40px] md:rounded-[50px]"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.src}
                alt={item.category}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 ${
                  hoveredIndex === i ? 'scale-110' : 'scale-100'
                } ${item.tall ? 'h-[420px]' : 'h-[320px]'}`}
              />
              <div
                className={`absolute inset-0 flex items-end bg-gradient-to-t from-dark/80 via-dark/30 to-transparent p-6 transition-opacity duration-300 ${
                  hoveredIndex === i ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white">
                  {item.category}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
