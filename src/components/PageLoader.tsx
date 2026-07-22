import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            onComplete();
          }, 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-dark"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-heading mb-8 text-3xl font-black uppercase tracking-tight sm:text-5xl"
          >
            The Motion Club
          </motion.p>
          <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10 sm:w-64">
            <motion.div
              className="h-full rounded-full bg-accent"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="mt-4 text-sm text-muted">{Math.min(Math.floor(progress), 100)}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
