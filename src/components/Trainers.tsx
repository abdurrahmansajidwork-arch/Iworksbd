import React from 'react';

const mechanics = [
  { name: 'Marcus Vance', role: 'Head Engine Technician', image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=400&h=400', exp: '12 YRS' },
  { name: 'Sarah Jenkins', role: 'Diagnostic Lead', image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf0509?auto=format&fit=crop&q=80&w=400&h=400', exp: '8 YRS' },
  { name: 'Elias Thorne', role: 'Transmission Specialist', image: 'https://images.unsplash.com/photo-1587560699334-bea5356fb332?auto=format&fit=crop&q=80&w=400&h=400', exp: '10 YRS' },
];

export default function Mechanics() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto border-x border-b border-white/20 bg-deep-black">
       {/* Top vertical connector */}
       <div className="w-full flex justify-center">
          <div className="w-px h-16 bg-white/20"></div>
       </div>
       <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Personnel</h2>
           <p className="text-gray-400 text-sm mt-3 uppercase tracking-widest">The architects of your vehicle's performance</p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/20">
          {mechanics.map((mechanic, i) => (
             <div key={i} className="group relative border-b md:border-b-0 md:border-r border-white/20 last:border-0 overflow-hidden cursor-pointer bg-[#050505]">
                {/* Image Container with strict ratio */}
                <div className="w-full aspect-square overflow-hidden relative">
                   <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-color"></div>
                   <img src={mechanic.image} alt={mechanic.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                   
                   {/* Data Badge overlay */}
                   <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur border border-white/20 px-3 py-1 text-[9px] uppercase tracking-widest text-white">
                      EXP: {mechanic.exp}
                   </div>
                </div>
                {/* Content block */}
                <div className="p-6 relative z-20 bg-[#0a0a0a] border-t border-white/20 group-hover:bg-[#111] transition-colors">
                   <h3 className="text-xl font-bold uppercase text-white tracking-tight">{mechanic.name}</h3>
                   <span className="text-brand-red text-xs uppercase tracking-wider font-bold block mt-1">{mechanic.role}</span>
                </div>
             </div>
          ))}
       </div>
    </section>
  );
}
