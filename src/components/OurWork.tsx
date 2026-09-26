import React from 'react';
import { motion } from 'motion/react';

export default function OurWork() {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-24 px-4 md:px-8 bg-[#070707]" id="our-work-section">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-brand-red"></div>
          <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs">Behind the Scenes</span>
          <div className="h-px w-8 bg-brand-red"></div>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6">
          OUR <span className="text-brand-red">PROCESS</span> IN ACTION
        </h2>
        <p className="text-gray-400 text-sm md:text-lg max-w-2xl uppercase tracking-widest font-bold">
          Precision, veteran craftsmanship, and absolute transparency in every repair.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black"
      >
        <video 
          controls
          className="w-full h-full object-cover"
          poster="https://res.cloudinary.com/dzbnxmnbd/image/upload/v1781968249/IMG-20260618-WA0014_ifgpwp.jpg"
        >
          <source src="https://res.cloudinary.com/dzbnxmnbd/video/upload/v1781969717/VID-20260618-WA0027_yf7co8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
          <span className="text-brand-red font-black text-3xl mb-4 block">01.</span>
          <h4 className="text-white font-black uppercase tracking-tight mb-2">Diagnosis</h4>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Advanced network protocol analysis and visual inspection.</p>
        </div>
        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
          <span className="text-brand-red font-black text-3xl mb-4 block">02.</span>
          <h4 className="text-white font-black uppercase tracking-tight mb-2">Restoration</h4>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Surgical execution of repairs using factory-spec components.</p>
        </div>
        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
          <span className="text-brand-red font-black text-3xl mb-4 block">03.</span>
          <h4 className="text-white font-black uppercase tracking-tight mb-2">Validation</h4>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Rigorous multi-point testing to ensure permanent results.</p>
        </div>
      </div>
    </section>
  );
}
