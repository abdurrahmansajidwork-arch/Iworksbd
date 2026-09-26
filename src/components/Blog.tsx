import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const galleryImages = [
  "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779190333/FB_IMG_1779189584708_brhzab.jpg",
  "https://res.cloudinary.com/dzbnxmnbd/image/upload/v1781965222/IMG-20260620-WA0007_quwqt0.jpg",
  "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779190333/FB_IMG_1779189586628_ug1cgs.jpg"
];

export default function Blog() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-gradient-to-b from-black via-[#1a0505] to-black py-24 md:py-32 border-x border-b border-white/10 overflow-hidden">
      <div className="relative z-10 w-full flex flex-col">
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-16 md:mb-20 px-6"
          >
             <div className="border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 inline-flex items-center gap-2">
                <span className="text-[10px] text-white/80 uppercase font-bold tracking-[0.2em]">Our Facility</span>
             </div>
             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-anton font-normal text-white uppercase mb-4 drop-shadow-xl text-center leading-[1.1] md:leading-none">
                Real Workshop <span className="text-brand-red">Photos</span>
             </h2>
          </motion.div>

        <div className="relative w-full flex items-center group px-2 sm:px-8">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-6 md:left-12 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex flex-col items-center justify-center text-white hover:bg-white hover:text-black transition-colors shadow-lg opacity-100 lg:opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-6 md:right-12 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex flex-col items-center justify-center text-white hover:bg-white hover:text-black transition-colors shadow-lg opacity-100 lg:opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Track */}
          <div 
            ref={scrollRef}
            className="flex w-full overflow-x-auto snap-x snap-mandatory hide-scroll gap-6 py-4 px-4 sm:px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((src, i) => (
              <div key={i} className="shrink-0 w-[85vw] sm:w-[450px] md:w-[550px] lg:w-[650px] aspect-[16/10] snap-center rounded-[32px] overflow-hidden border border-white/10 relative group/card shadow-2xl">
                <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img src={src} alt="Facility View" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
