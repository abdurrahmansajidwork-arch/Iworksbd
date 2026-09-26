import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonialsRow1 = [
  { 
    name: 'Tanvir Ahmed', 
    vehicle: 'Toyota Prius 2017', 
    text: 'Working with the engineers at iWorksBD revolutionized my hybrid vehicle performance. Fuel efficiency returned to 21 km/L and the diagnostic breakdown was completely transparent.', 
    rating: 5 
  },
  { 
    name: 'Nusrat Jahan', 
    vehicle: 'Toyota Aqua Hybrid', 
    text: 'Finally, a garage in Dhaka that treats electronic diagnostics seriously. They replaced two faulty cells instead of trying to sell me a whole new battery pack.', 
    rating: 5 
  },
  { 
    name: 'Rakibul Hasan', 
    vehicle: 'Honda Vezel Hybrid', 
    text: 'Best investment I have made in my commuter car. The transmission recalibration and dual-clutch fluid service was done strictly to Honda specs.', 
    rating: 5 
  },
  { 
    name: 'Sadia Islam', 
    vehicle: 'Toyota Allion 260', 
    text: 'Uncompromising standards. Best environment for serious mechanical repairs in Dhaka. No upselling, direct itemized billing, and polite communication.', 
    rating: 5 
  },
];

const testimonialsRow2 = [
  { 
    name: 'Omar Khan', 
    vehicle: 'Toyota Harrier Hybrid', 
    text: 'Elite diagnostic equipment and a pristine workshop bay. Getting my inverter cooling loop and electronic AC serviced here was completely hassle-free.', 
    rating: 5 
  },
  { 
    name: 'Farhana Akter', 
    vehicle: 'Toyota Axio 2016', 
    text: 'Resurrected an engine with cylinder head compression issues that other shops told me to discard. It runs as quiet as brand new now.', 
    rating: 5 
  },
  { 
    name: 'Arifur Rahman', 
    vehicle: 'Nissan X-Trail Hybrid', 
    text: 'The workshop leadership is present on the floor. They show you the scanner graph before and after the repair so you know exactly what was fixed.', 
    rating: 5 
  },
  { 
    name: 'Fatima Zahra', 
    vehicle: 'Toyota Noah Hybrid', 
    text: 'World-class repair center right here locally in Mohammadpur. They only use genuine Japanese OEM parts and provide honest warranty backing.', 
    rating: 5 
  },
];

const row1 = [...testimonialsRow1, ...testimonialsRow1];
const row2 = [...testimonialsRow2, ...testimonialsRow2];

export default function Testimonials() {
  return (
    <section 
      aria-label="Customer Reviews"
      className="relative w-full max-w-[1440px] mx-auto border-x border-b border-white/[0.08] bg-[#070809] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 mb-14 text-center">
        <div className="flex items-center justify-center gap-2 mb-3 text-[11px] font-mono uppercase tracking-widest text-[#E52B30]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52B30]" />
          <span>Real Client Experiences</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
          Proven Workshop <span className="text-[#E52B30]">Outcomes</span>
        </h2>
        <p className="mt-4 text-xs md:text-sm text-neutral-400 max-w-xl mx-auto font-normal">
          Over 430 verified 5-star customer reviews across Dhaka. Real vehicle feedback from daily drivers and corporate fleet managers.
        </p>
      </div>

      {/* Marquee Row 1 - Left */}
      <div className="relative w-full flex overflow-hidden mb-6 group">
        <div className="flex w-max animate-marquee-left">
          {row1.map((item, i) => (
            <div 
              key={`row1-${i}`} 
              className="w-[320px] sm:w-[380px] md:w-[440px] mx-3 shrink-0 p-6 sm:p-7 border border-white/[0.08] bg-[#0D0F12] rounded-xl hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4 text-[#E52B30]">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider">{item.name}</h4>
                  <span className="text-neutral-400 text-[11px] font-mono">{item.vehicle}</span>
                </div>
                <span className="text-[10px] font-mono uppercase text-[#E52B30] font-semibold">Verified Owner</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#070809] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#070809] to-transparent pointer-events-none z-10" />
      </div>

      {/* Marquee Row 2 - Right */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex w-max animate-marquee-right -ml-20">
          {row2.map((item, i) => (
            <div 
              key={`row2-${i}`} 
              className="w-[320px] sm:w-[380px] md:w-[440px] mx-3 shrink-0 p-6 sm:p-7 border border-white/[0.08] bg-[#0D0F12] rounded-xl hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4 text-[#E52B30]">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider">{item.name}</h4>
                  <span className="text-neutral-400 text-[11px] font-mono">{item.vehicle}</span>
                </div>
                <span className="text-[10px] font-mono uppercase text-[#E52B30] font-semibold">Verified Owner</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#070809] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#070809] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
