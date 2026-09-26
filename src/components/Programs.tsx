import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookNowModal from './BookNowModal';

export const programsData = [
  {
    id: 1,
    title: "CAR MAINTENANCE",
    desc: "Comprehensive routine checkups and care to keep your vehicle running smoothly.",
    features: ["FLUID CHECKS", "FILTER REPLACEMENT"],
    price: "From ৳2,000",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121820/c2debf8bd96802b83d26317fe35eac4c_zl2xum.jpg"
  },
  {
    id: 2,
    title: "HYBRID CAR HEALTH CHECK",
    desc: "Specialized diagnostics and battery life optimization for modern hybrid vehicles.",
    features: ["BATTERY DIAGNOSTICS", "SYSTEM SCAN"],
    price: "Contact for pricing",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121658/9c5312e44da26e46789a8f5d35510f79_bb46ji.jpg"
  },
  {
    id: 3,
    title: "ENGINE MAINTENANCE AND OVERHAULING",
    desc: "Complete engine diagnostics, rebuilds, and maintenance for optimal power and reliability.",
    features: ["COMPUTER DIAGNOSTICS", "ENGINE REBUILDS"],
    price: "Contact for pricing",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121657/78169c6f36497fe0791e541d754d973a_c1i2xb.jpg"
  },
  {
    id: 4,
    title: "PROFESSIONAL AC SERVICE",
    desc: "Stay cool with our premium AC cleaning, gas refill, and system leak checks.",
    features: ["GAS REFILL", "LEAK DETECTION"],
    price: "Contact for pricing",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779122362/5037357ff500e2e146831b1f4b593992_1_kbsg6s.jpg"
  },
  {
    id: 5,
    title: "PRE PURCHASE INSPECTION",
    desc: "Total peace of mind with our thorough inspection before you buy.",
    features: ["DETAILED CHECK", "REPORT PROVIDED"],
    price: "Contact for pricing",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121657/c3c735c3d76c5ab378c5d4f80b8ca632_dufp1z.jpg"
  },
  {
    id: 6,
    title: "PREMIUM DENTING & PAINTING",
    desc: "Restore your car's original shine with our factory-quality paint and dent repair.",
    features: ["COLOR MATCHING", "SCRATCH REPAIR"],
    price: "Contact for pricing",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121656/7b4894b053b6df8d0836405fa52186ad_huwdxb.jpg"
  },
  {
    id: 7,
    title: "WHEEL ALIGNMENT & BALANCING",
    desc: "Precision laser alignment and balancing for safer driving and longer tire life.",
    features: ["LASER ALIGNMENT", "COMPUTER BALANCING"],
    price: "Contact for pricing",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121657/8f7de14c0d3446ccd5ee1ff898266bc9_okgmgv.jpg"
  }
];

import Card3DTilt from './Card3DTilt';
import MagneticButton from './MagneticButton';

function ServiceCard({ prog, onBook }: { prog: any, onBook: (title: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-full aspect-[4/5]"
    >
      <Card3DTilt
        intensity={14}
        glareOpacity={0.2}
        className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl hover:shadow-[0_25px_50px_rgba(238,63,44,0.2)]"
      >
        {/* Background Image with Depth */}
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ transform: "translateZ(10px)" }}
        >
          <img 
            src={prog.image} 
            alt={prog.title} 
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-55 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent"></div>
        </div>
        
        {/* Hover Highlight Border */}
        <div 
          className="absolute inset-0 border-2 border-brand-red opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl md:rounded-3xl"
          style={{ transform: "translateZ(25px)" }}
        />

        {/* Content with Layered 3D Depth */}
        <div 
          className="relative z-20 p-6 md:p-8 flex flex-col h-full justify-end" 
          style={{ transform: "translateZ(45px)" }}
        >
          <div className="w-8 md:w-12 h-1 bg-brand-red mb-4 group-hover:w-16 transition-all duration-300 rounded-full"></div>
          
          <h4 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight leading-tight mb-2.5 drop-shadow-md text-white/95">
            {prog.title}
          </h4>
          
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-5 font-medium line-clamp-2">
            {prog.desc}
          </p>
          
          <div className="space-y-2 mb-6">
            {prog.features.map((feat: string, i: number) => (
              <div key={i} className="flex items-center gap-2 md:gap-3">
                <CheckCircle2 size={12} className="text-brand-red shrink-0" />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/90">{feat}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 md:gap-3 pt-2">
              <span className="text-[11px] md:text-xs font-black uppercase tracking-widest text-brand-red">{prog.price}</span>
            </div>
          </div>

          <motion.button 
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              e.stopPropagation();
              onBook(prog.title);
            }} 
            className="w-full inline-block text-center border border-white/20 py-3 md:py-3.5 uppercase text-[10px] md:text-xs font-bold tracking-widest hover:bg-brand-red hover:border-brand-red text-white transition-all duration-300 relative bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl mt-auto cursor-pointer shadow-lg"
          >
            Book Service
          </motion.button>
        </div>
      </Card3DTilt>
    </motion.div>
  );
}

export default function Programs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBook = (title: string) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-[#050505] text-white flex flex-col items-center">
      <BookNowModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService={selectedService} 
      />

       {/* Banner Section */}
       <section className="relative w-full max-w-[1440px] aspect-video md:aspect-[21/9] lg:aspect-[16/9] max-h-[70vh] flex items-center justify-center overflow-hidden border border-white/5 mt-12 mx-4 md:mx-8 rounded-3xl md:rounded-[40px] shadow-2xl">
          <img 
             src="https://res.cloudinary.com/dapn0wx9y/image/upload/v1779190350/Screenshot_20260519-171907_se8ytg.png"
             alt="Services Background"
             className="absolute w-full h-full object-cover opacity-85 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
          />
          {/* Edge shadow overlays for seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
          {/* Retro overlays */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none mix-blend-overlay"></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center px-4"
          >
             <div className="border border-white/20 bg-black/50 backdrop-blur-sm px-4 py-1 mb-6 inline-flex items-center">
               <span className="text-[10px] text-brand-red uppercase font-bold tracking-[0.2em] mix-blend-screen">ESTABLISHED MCMXCVIII</span>
             </div>
             <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter text-white mb-2 leading-none drop-shadow-2xl flex flex-col">
                <span className="text-white drop-shadow-[0_4px_4px_rgba(255,0,0,0.5)]">SELECT YOUR</span>
                <span className="text-brand-red drop-shadow-[0_4px_20px_rgba(255,0,0,0.4)]">SERVICE</span>
             </h2>
             <p className="text-xs md:text-sm text-gray-300 uppercase tracking-[0.2em] max-w-2xl mt-4 mb-8 font-bold leading-relaxed">
                Expert repairs. Optimized for reliability. No excuses, just results.
             </p>
             <MagneticButton strength={0.25}>
               <Link to="/services" className="group relative px-8 py-4 bg-transparent border border-brand-red text-white uppercase tracking-widest font-bold text-sm overflow-hidden hover:scale-105 transition-transform duration-300 inline-block">
                  <div className="absolute inset-0 bg-brand-red translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  <span className="relative z-10">DIRECT PRICING</span>
               </Link>
             </MagneticButton>
             <div className="mt-12 text-brand-red animate-bounce">
                <ChevronRight size={24} className="rotate-90" />
             </div>
          </motion.div>
       </section>

       {/* Carousel Section */}
       <section className="relative w-full py-20 px-4 md:px-8 bg-[#0a0a0a] overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full">
             
             {/* Header */}
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8 gap-6">
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white m-0 leading-none flex gap-3">
                     OUR <span className="text-brand-red">GARAGE</span> SERVICES
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-[0.2em] mt-4 font-bold">
                     EXPLORE OUR SPECIALIZED REPAIR OPTIONS
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                   <Link to="/services" className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-red hover:text-white transition-colors border-b border-brand-red hover:border-white pb-1">
                      VIEW ALL SERVICES
                   </Link>
                </div>
             </div>

             {/* Services Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full mt-10">
                {programsData.slice(0, 6).map((prog) => (
                    <ServiceCard key={prog.id} prog={prog} onBook={handleBook} />
                ))}
             </div>
          </div>
       </section>
    </div>
  );
}
