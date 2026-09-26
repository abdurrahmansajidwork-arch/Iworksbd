import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-transparent">
      <motion.div
        style={{ scaleX }}
        className="h-full w-full bg-gradient-to-r from-brand-red via-[#ff5a47] to-brand-red origin-left shadow-[0_0_12px_rgba(238,63,44,0.9),0_0_4px_rgba(255,255,255,0.7)]"
      />
    </div>
  );
}
