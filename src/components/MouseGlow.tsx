import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.body.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[5] h-[400px] w-[400px] rounded-full opacity-30 mix-blend-screen"
      style={{
        background: 'radial-gradient(circle, rgba(255,107,0,0.25) 0%, transparent 70%)',
        left: pos.x - 200,
        top: pos.y - 200,
        opacity: visible ? 0.3 : 0,
        transition: 'opacity 0.3s ease',
      }}
      aria-hidden
    />
  );
}
