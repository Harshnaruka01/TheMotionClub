import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { GALLERY_IMAGES } from '../data/content';

export default function GallerySection() {
  const [showAll, setShowAll] = useState(false);
  const previewImages = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 3);

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

      <div className="hidden sm:block mx-auto columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
        {GALLERY_IMAGES.map((item, i) => (
          <FadeIn key={item.src} delay={(i % 6) * 0.08}>
            <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-[30px] sm:mb-6 sm:rounded-[40px] md:rounded-[50px]">
              <img
                src={item.src}
                alt={item.category}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 will-change-transform ${item.tall ? 'h-[420px]' : 'h-[320px]'} group-hover:scale-110`}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/80 via-dark/30 to-transparent p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white">
                  {item.category}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="sm:hidden mx-auto columns-1 gap-4">
        {previewImages.map((item, i) => (
          <FadeIn key={item.src} delay={(i % 6) * 0.08}>
            <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-[30px]">
              <img
                src={item.src}
                alt={item.category}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 will-change-transform ${item.tall ? 'h-[420px]' : 'h-[320px]'} group-hover:scale-110`}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/80 via-dark/30 to-transparent p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white">
                  {item.category}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}

        {GALLERY_IMAGES.length > 3 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full bg-dark px-6 py-3 text-sm uppercase tracking-widest text-light transition hover:bg-accent"
            >
              {showAll ? 'Show less' : 'See more'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
