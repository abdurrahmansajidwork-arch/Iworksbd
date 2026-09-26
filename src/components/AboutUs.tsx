import React from 'react';
import { Target, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Card3DTilt from './Card3DTilt';
import AnimatedCounter from './AnimatedCounter';
import MagneticButton from './MagneticButton';

const TapeText = ({ text }: { text: string }) => (
  <span className="mx-4 text-xs font-black uppercase tracking-widest flex items-center gap-4">
    {text}
    <div className="w-1.5 h-1.5 bg-current rounded-full" />
  </span>
);

export default function AboutUs() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-24 md:py-32 px-4 md:px-8 bg-black overflow-hidden flex justify-center items-center">
      {/* Background radial glow to highlight the glass card on dark background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
      
      {/* Main Glass Card with 3D Tilt Depth */}
      <div className="relative w-full max-w-[850px] z-10">
        <Card3DTilt intensity={8} glareOpacity={0.12}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full border border-white/20 rounded-[32px] bg-gradient-to-b from-white/[0.12] to-white/[0.04] backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.15)] pt-20 pb-12 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Diagonal Marquee Tapes */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[150%] h-10 bg-brand-red -rotate-3 flex items-center overflow-hidden z-0 shadow-lg pointer-events-none">
               <div className="animate-marquee-scroll text-white flex">
                  {[...Array(10)].map((_, i) => (
                    <TapeText key={`red-${i}`} text="Premium Automotive Care • Certified Mechanics" />
                  ))}
               </div>
            </div>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[150%] h-10 bg-white rotate-2 flex items-center overflow-hidden z-0 shadow-xl pointer-events-none">
               <div className="animate-marquee-scroll text-black flex" style={{ animationDirection: 'reverse' }}>
                  {[...Array(10)].map((_, i) => (
                    <TapeText key={`white-${i}`} text="Absolute Reliability • Engine Performance" />
                  ))}
               </div>
            </div>

            {/* Content Wrapper with 3D depth */}
            <div className="relative z-10 flex flex-col items-center mt-6 md:mt-8 w-full [transform:translateZ(25px)]">
                {/* Small Pill Badge */}
                <div className="border border-white/20 bg-black/60 backdrop-blur-sm px-6 py-2 rounded-full mb-6 inline-flex items-center gap-2">
                   <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
                   <span className="text-[10px] text-white/90 uppercase font-mono font-bold tracking-[0.2em]">About Our Workshop</span>
                </div>

                {/* Huge Mixed Typography - Restored Exact Iconic Design */}
                <h2 className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white/70 leading-relaxed md:leading-[1.4] max-w-[750px] text-center">
                  <span className="text-white font-black uppercase">iWorksBD</span> stands as a <span className="text-white font-black uppercase">symbol of trust and excellence</span> in Dhaka's automobile arena, providing <span className="text-white font-black uppercase">premium innovative services</span> for your favorite cars.
                </h2>

                {/* Three Core Feature Tags */}
                <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-10">
                   <div className="border border-white/20 bg-white/5 px-4 py-2 flex items-center gap-3 hover:bg-brand-red hover:border-brand-red transition-all cursor-default">
                      <ShieldAlert size={14} className="text-brand-red" />
                      <span className="font-mono text-xs text-white uppercase tracking-widest">Reliability</span>
                   </div>
                   <div className="border border-white/20 bg-white/5 px-4 py-2 flex items-center gap-3 hover:bg-brand-red hover:border-brand-red transition-all cursor-default">
                      <Target size={14} className="text-brand-red" />
                      <span className="font-mono text-xs text-white uppercase tracking-widest">Expertise</span>
                   </div>
                   <div className="border border-white/20 bg-white/5 px-4 py-2 flex items-center gap-3 hover:bg-brand-red hover:border-brand-red transition-all cursor-default">
                      <CheckCircle2 size={14} className="text-brand-red" />
                      <span className="font-mono text-xs text-white uppercase tracking-widest">Transparency</span>
                   </div>
                </div>

                {/* Separation Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10 md:my-12"></div>

                {/* Stats Row with Animated Rolling Counters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 w-full divide-y md:divide-y-0 md:divide-x divide-white/10">
                   <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
                      <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                         <AnimatedCounter value={26} suffix="k" />
                         <span className="text-brand-red">+</span>
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Facebook Followers</span>
                   </div>
                   <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
                      <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                         <AnimatedCounter value={430} />
                         <span className="text-brand-red">+</span>
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Customer Reviews</span>
                   </div>
                   <div className="flex flex-col items-center justify-center pt-6 md:pt-0 hover:text-brand-red transition-colors cursor-pointer" onClick={() => window.open('https://www.facebook.com/share/18Mj6GakiH/', '_blank')}>
                      <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                         <AnimatedCounter value={4.6} decimals={1} />
                         <span className="text-brand-red">★</span>
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Average Rating</span>
                   </div>
                </div>

                {/* Discover More CTA with Magnetic Button */}
                <div className="mt-10 md:mt-12 flex justify-center">
                   <MagneticButton strength={0.25}>
                     <Link to="/about" className="inline-flex items-center justify-center bg-brand-red text-white px-8 py-4 uppercase font-bold text-xs md:text-sm tracking-widest hover:bg-white hover:text-black transition-all clip-diagonal hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(238,63,44,0.4)]">
                       Discover iWorksBD
                     </Link>
                   </MagneticButton>
                </div>
            </div>
          </motion.div>
        </Card3DTilt>
      </div>
    </section>
  );
}
