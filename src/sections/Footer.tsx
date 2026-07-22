import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { NAV_LINKS } from '../data/content';

const SOCIAL = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-dark px-5 py-16 sm:px-8 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="hero-heading text-4xl font-black uppercase sm:text-5xl md:text-6xl">
                The Motion Club
              </p>
              <p className="mt-3 max-w-md text-sm font-light text-muted sm:text-base">
                Move together. Live better. Join a community where every step, stretch,
                and adventure brings us closer.
              </p>
            </div>

            <div className="flex gap-4">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-light transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row">
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} The Motion Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
