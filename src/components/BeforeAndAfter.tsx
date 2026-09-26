import React from 'react';

const brands = [
  { name: "Toyota", logo: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121492/56f53504d570af72648657e8a92f76e2_pemklj.jpg" },
  { name: "Honda", logo: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121502/154ec0194501da6147407ebd3404bb7d_1_fzn3xt.jpg" },
  { name: "Lexus", logo: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121512/36825eafea6580cf679f8c758246c43f_k8qn3q.jpg" },
  { name: "Nissan", logo: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121522/0744c784583201384da13936e73de25b_ryfkyf.jpg" },
  { name: "Mitsubishi", logo: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121532/154ec0194501da6147407ebd3404bb7d_zkvghg.jpg" }
];

const BrandBlock = () => (
  <div className="flex items-center whitespace-nowrap" aria-hidden="true">
    {brands.map((brand, i) => (
      <div key={i} className="flex items-center px-6 md:px-10">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#12151A] border border-white/10 p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group">
          <img 
            src={brand.logo} 
            alt={brand.name} 
            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all" 
          />
        </div>
        <div className="ml-8 md:ml-12 h-6 w-px bg-white/[0.08]" />
      </div>
    ))}
  </div>
);

export default function BeforeAndAfter() {
  return (
    <section 
      aria-label="Supported vehicle manufacturers"
      className="relative w-full max-w-[1440px] mx-auto py-16 md:py-20 bg-[#070809] border-x border-b border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 mb-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52B30]" />
          <span>Manufacturer Compatibility</span>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold uppercase text-white tracking-wide">
          Dedicated Japanese Hybrid &amp; Luxury Vehicle Coverage
        </h3>
      </div>

      {/* Controlled Dark Graphite Rail */}
      <div className="w-full bg-[#0A0C0E] border-y border-white/[0.06] py-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0A0C0E] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0A0C0E] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-scroll relative z-0 flex items-center">
          <BrandBlock />
          <BrandBlock />
        </div>
      </div>
    </section>
  );
}
