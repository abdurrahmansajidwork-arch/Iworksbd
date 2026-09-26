import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Gauge, ShieldCheck, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

const reasons = [
  {
    icon: Gauge,
    title: "Precision Computerized Diagnostics",
    desc: "Advanced OBD-II ECU scanner and live sensor stream analysis to pinpoint electrical & mechanical anomalies with zero guesswork.",
    tag: "100% ACCURATE"
  },
  {
    icon: ShieldCheck,
    title: "High-Voltage Hybrid Battery Care",
    desc: "Certified specialists trained in cell balancing, module replacement, and inverter cooling maintenance for Toyota, Honda & Lexus.",
    tag: "HYBRID SPECIALISTS"
  },
  {
    icon: CheckCircle2,
    title: "Upfront Transparent Billing",
    desc: "Comprehensive itemized estimate provided prior to disassembly. Enjoy total financial clarity with zero hidden charges.",
    tag: "ZERO HIDDEN COSTS"
  },
  {
    icon: Wrench,
    title: "Authentic OEM Japanese Parts",
    desc: "Directly imported genuine replacement components adhering to original factory specifications for maximum durability.",
    tag: "JAPAN SPEC OEM"
  }
];

export default function MeetOurTeam() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-12 md:py-16 px-4 md:px-8 bg-black overflow-hidden flex flex-col items-center" id="home-expert-team">
      {/* Background Video - Clean video with soft corner vignette mask */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      >
        <source 
          src="https://res.cloudinary.com/uxelon45/video/upload/v1785308216/From_Klickpin.com-_Use_these_33_Gorgeous_home_office_decor_ideas_that_are_worth_saving_if_you_love_elegant_details_and_creative_inspiration_for_an_aiciqj.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Radial Vignette & Edge Masking Overlay for smooth corner blending */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.5) 70%, #000 100%)'
        }}
      />
      <div className="absolute inset-0 pointer-events-none z-[1] shadow-[inset_0_0_80px_40px_rgba(0,0,0,1)]" />

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 text-center mb-8 max-w-3xl mx-auto px-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-[4px] mb-3 shadow-lg">
          <Wrench size={13} className="text-brand-red" />
          <span className="text-[10px] md:text-xs font-mono font-bold text-white uppercase tracking-[0.25em]">
            WHY CHOOSE iWORKSBD
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] leading-none">
          ENGINEERED FOR <span className="text-brand-red">PRECISION</span> &amp; PERFORMANCE
        </h2>
      </motion.div>

      {/* Main Split Layout: Hero Pillar Left + 4 Grid Cards Right */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column: Vertical Hero Callout Pillar with 3D Tilt */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="lg:col-span-4 h-full"
        >
          <Card3DTilt intensity={10} glareOpacity={0.16} className="h-full rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-b from-white/[0.08] via-black/40 to-white/[0.04] backdrop-blur-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="p-6 h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
              <div style={{ transform: "translateZ(25px)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    SERVICE READY
                  </span>
                  <span className="text-[10px] font-mono text-gray-300 font-bold">EST. 2015</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-3 drop-shadow-md">
                  THE BENCHMARK IN <span className="text-brand-red">AUTOMOTIVE</span> REPAIR
                </h3>
                <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-4 font-medium">
                  Combining veteran mechanics with official computerized diagnostic software to deliver factory-grade maintenance for hybrid and conventional vehicles.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    "Dealer-level OBD-II fault scanning",
                    "High-voltage hybrid battery cell care",
                    "100% itemized upfront estimates",
                    "Genuine Japanese OEM spare parts"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-gray-200">
                      <CheckCircle2 size={15} className="text-brand-red shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-white/15 mt-auto" style={{ transform: "translateZ(35px)" }}>
                <Link 
                  to="/contact" 
                  className="w-full py-3 px-5 bg-brand-red hover:bg-white hover:text-black text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-[0_0_20px_rgba(238,63,44,0.4)] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  BOOK INSPECTION
                  <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Card3DTilt>
        </motion.div>

        {/* Right Column: Feature Card Grid with 3D Tilt */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.15 + idx * 0.1 }}
                className="h-full"
              >
                <Card3DTilt intensity={12} glareOpacity={0.18} className="h-full rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-white/[0.08] via-black/40 to-white/[0.03] backdrop-blur-[6px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-brand-red/70">
                  <div className="p-6 h-full flex flex-col justify-between group">
                    <div style={{ transform: "translateZ(20px)" }}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-red/20 border border-brand-red/40 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors shadow-inner">
                          <Icon size={20} className="text-brand-red group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-[9px] font-mono font-bold text-brand-red/90 bg-brand-red/10 border border-brand-red/30 px-2.5 py-1 rounded-full tracking-widest uppercase">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-white font-extrabold text-sm md:text-base uppercase tracking-wider mb-2 group-hover:text-brand-red transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-300" style={{ transform: "translateZ(30px)" }}>
                      <span className="tracking-wider">SPEC // MASTER GRADE</span>
                      <span className="group-hover:translate-x-1 transition-transform text-brand-red font-bold text-xs">→</span>
                    </div>
                  </div>
                </Card3DTilt>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Telemetry Status Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
        className="relative z-10 max-w-6xl w-full mx-auto mt-5 bg-black/40 backdrop-blur-[4px] border border-white/20 rounded-xl py-3 px-5 md:px-7 shadow-2xl flex flex-wrap items-center justify-between gap-3 text-center md:text-left"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
          <span className="text-white font-mono text-xs font-bold uppercase tracking-wider">
            100% DIAGNOSTIC ACCURACY RATE
          </span>
        </div>
        <div className="h-3.5 w-px bg-white/20 hidden md:block" />
        <div className="text-xs font-mono text-gray-300">
          SERVICED: <span className="text-white font-bold">5,000+ VEHICLES</span>
        </div>
        <div className="h-3.5 w-px bg-white/20 hidden md:block" />
        <div className="text-xs font-mono text-gray-300">
          LOCATION: <span className="text-white font-bold">DHAKA, BANGLADESH</span>
        </div>
        <div className="h-3.5 w-px bg-white/20 hidden md:block" />
        <div className="text-xs font-mono text-emerald-400 font-bold">
           ★ 4.8 / 5.0 CUSTOMER RATING
        </div>
      </motion.div>
    </section>
  );
}
