import React from 'react';

const stats = [
  { value: '5,000+', label: 'VEHICLES RESTORED' },
  { value: '100%', label: 'OEM JAPANESE DIAGNOSTICS' },
  { value: '4.6★', label: '430+ AUTHENTIC REVIEWS' },
  { value: '10 YRS', label: 'WORKSHOP LEADERSHIP' },
  { value: '26K+', label: 'MOTORING COMMUNITY' },
];

const TickerBlock = () => (
  <div className="flex items-center whitespace-nowrap" aria-hidden="true">
    {stats.map((item, i) => (
      <div key={i} className="flex items-center px-8 md:px-12">
        <span className="font-display font-black text-2xl md:text-3xl text-white tracking-tight mr-3 tabular-nums">
          {item.value}
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-medium">
          {item.label}
        </span>
        <div className="ml-8 md:ml-12 w-1.5 h-1.5 rounded-full bg-[#E52B30]/70" />
      </div>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <section 
      aria-label="Key workshop statistics"
      className="w-full max-w-[1440px] mx-auto bg-[#0A0C0E] border-x border-b border-white/[0.08] py-4 overflow-hidden relative z-20"
    >
      {/* Edge gradient fade masks */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0A0C0E] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0A0C0E] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-scroll relative z-0 flex items-center">
        <TickerBlock />
        <TickerBlock />
      </div>
    </section>
  );
}
