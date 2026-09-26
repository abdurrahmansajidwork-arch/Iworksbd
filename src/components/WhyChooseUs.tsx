import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Cpu,
      title: "Precision Hybrid Diagnostics",
      desc: "Advanced CAN-bus scanning and high-voltage cell balancing to pinpoint fault locations without expensive guesswork."
    },
    {
      icon: ShieldCheck,
      title: "Zero-Upsell Integrity",
      desc: "Transparent quotes and certified technicians committed to doing only what your vehicle actually needs."
    }
  ];

  return (
    <section className="relative w-full max-w-[1440px] mx-auto border-x border-b border-white/10 bg-[#070707] py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Heading Block with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:w-1/2 flex flex-col text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-brand-red" />
            <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em]">
              Why Choose iWorksBD
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-[1.1] mb-6">
            BUILT FOR ABSOLUTE <br />
            <span className="text-brand-red">RELIABILITY &amp; TRUST</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-medium">
            At iWorksBD, we combine modern diagnostic technology with honest garage work. No unnecessary part replacements, no artificial markups — just permanent repair solutions tailored for Dhaka's drivers.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black text-brand-red tracking-tight">5000+</span>
              <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-gray-400 mt-1">Vehicles Repaired</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black text-brand-red tracking-tight">4.6 ★</span>
              <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-gray-400 mt-1">430+ Real Reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Right Glass Cards (2 Cards) with Premium 25% Glass Blur & Scroll Animation */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 * (index + 1), ease: "easeOut" }}
                className="group relative p-8 rounded-2xl bg-white/[0.04] backdrop-blur-[6px] border border-white/15 hover:border-brand-red/60 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-red/15 border border-brand-red/30 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-tight mb-3 group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-brand-red">
                  <span>Guaranteed Quality</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
