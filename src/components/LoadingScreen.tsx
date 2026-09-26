import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast, crisp precision loading sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 350);
          return 100;
        }
        return prev + Math.floor(Math.random() * 22) + 12;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070809] text-white overflow-hidden select-none"
    >
      {/* Precision corner brackets */}
      <div className="absolute top-6 left-6 font-mono text-[9px] text-white/20 tracking-widest">
        SYS.01 // iWORKSBD
      </div>
      <div className="absolute top-6 right-6 font-mono text-[9px] text-white/20 tracking-widest">
        DHAKA • BD
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/20 tracking-widest">
        OEM JAPANESE SPECS
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-white/20 tracking-widest">
        HYBRID RESTORATION
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-xs px-6">
        
        {/* Monogram emblem with hairline border */}
        <div className="relative w-16 h-16 rounded-sm bg-[#0e0e0e] border border-white/15 p-2 mb-6 flex items-center justify-center">
          <img 
            src="https://res.cloudinary.com/dapn0wx9y/image/upload/v1779197769/IMG-20260519-WA0010_1_cnf1a9.jpg" 
            alt="iWorksBD Logo" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute -inset-1 border border-brand-red/30 pointer-events-none" />
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white">
            iWORKS<span className="text-brand-red">BD</span>
          </h1>
          <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-[0.25em] mt-1">
            Precision Automotive Workshop
          </p>
        </div>

        {/* Hairline Progress bar */}
        <div className="w-full h-[2px] bg-white/10 relative overflow-hidden mb-3">
          <motion.div 
            className="h-full bg-brand-red"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeOut", duration: 0.15 }}
          />
        </div>

        {/* Progress Text */}
        <div className="flex justify-between w-full font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
          <span>INITIALIZING</span>
          <span className="text-white font-semibold">{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
