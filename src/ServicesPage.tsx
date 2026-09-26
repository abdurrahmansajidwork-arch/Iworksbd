import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Wrench, 
  ShieldCheck, 
  MessageSquare, 
  Award,
  Check,
  ArrowRight
} from 'lucide-react';
import BookNowModal from './components/BookNowModal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const servicesData = [
  {
    id: 1,
    category: 'ROUTINE',
    title: "Car Maintenance & Fluid Service",
    desc: "Bumper-to-bumper diagnostics, complete lubricating fluid flushes, and crucial tune-ups. We do not just drain oil — we perform a comprehensive check of your timing belts, ignition health, and brake wear to prevent costly breakdowns on Dhaka roads.",
    features: ["OEM Specific Synthetic Oil", "Genuine Air & Cabin Filters", "Ignition & Spark Plug Check", "Brake Pad & Rotor Thickness"],
    price: "From ৳2,000",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121820/c2debf8bd96802b83d26317fe35eac4c_zl2xum.jpg",
    testimonial: {
      quote: "My vehicle feels noticeably smoother after their fluid service. They took the time to show me the condition of the old air filter before replacing it.",
      author: "Tanvir Hasan",
      vehicle: "Toyota Allion 2016"
    }
  },
  {
    id: 2,
    category: 'DIAGNOSTIC',
    title: "Hybrid Car Health Check & Battery Lab",
    desc: "Our high-voltage battery laboratory provides full diagnostics. Instead of forcing you to purchase an entire new battery pack, our technicians disassemble the assembly, test individual cells under load, and balance modules to restore factory voltage parameters.",
    features: ["Cell Delta-V Load Stress Test", "High-Voltage Busbar Descaling", "Hybrid State-of-Charge Tune", "ECU Telemetry Diagnostics"],
    price: "Custom Estimate",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121658/9c5312e44da26e46789a8f5d35510f79_bb46ji.jpg",
    testimonial: {
      quote: "Dealerships in Dhaka told me I needed a whole new hybrid battery. These guys balanced the weak cells for a fraction of the cost. Extremely honest work!",
      author: "Adnan Rahman",
      vehicle: "Toyota Prius 2018"
    }
  },
  {
    id: 3,
    category: 'MECHANICAL',
    title: "Engine Maintenance & Full Overhauling",
    desc: "Precision mechanical craftsmanship for internal combustion engines. We handle blown head gaskets, piston ring alignment, dual VVT-i timing calibration, and full block rebuild restorations.",
    features: ["Cylinder Compression Profiling", "OEM Torque-to-Spec Assembly", "Cylinder Head Resurfacing", "Timing Chain & Tensioner Alignment"],
    price: "Custom Estimate",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121657/78169c6f36497fe0791e541d754d973a_c1i2xb.jpg",
    testimonial: {
      quote: "Resurrected the engine of my microbus after an oil leak issue. The idle is quiet and smooth like a brand-new car.",
      author: "Fahim Chowdhury",
      vehicle: "Toyota Noah 2014"
    }
  },
  {
    id: 4,
    category: 'ROUTINE',
    title: "Professional AC & Climate Control Service",
    desc: "Dhaka’s climate demands peak thermal performance. We evacuate degraded refrigerants, inspect micro-leaks via UV dye, purge condenser fins, and add non-conductive dielectric compressor oils formulated specifically for hybrid compressors.",
    features: ["Dielectric Compressor Lubricant", "Condenser Chemical Flushing", "Environmentally Safe Gas Fill", "Micro-Leak UV Spectroscopy"],
    price: "Custom Estimate",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779122362/5037357ff500e2e146831b1f4b593992_1_kbsg6s.jpg",
    testimonial: {
      quote: "Cabin cools down fast even in heavy traffic now. They used genuine hybrid non-conductive electrical oil for the compressor.",
      author: "Sadia Hossain",
      vehicle: "Toyota Aqua 2015"
    }
  },
  {
    id: 5,
    category: 'DIAGNOSTIC',
    title: "Pre-Purchase Vehicle Inspection",
    desc: "Avoid buying a costly pre-owned nightmare. Our senior diagnosticians inspect chassis structural welding, detect hidden airbag deployment history, evaluate hybrid battery health, and test suspension response before you commit.",
    features: ["OBD-II Fault Log Extraction", "Accident & Panel Repair Check", "Suspension & Steering Audit", "Live Road-Test Assessment"],
    price: "From ৳2,500",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121657/c3c735c3d76c5ab378c5d4f80b8ca632_dufp1z.jpg",
    testimonial: {
      quote: "They discovered hidden chassis rust and an erased SRS airbag fault code in a car I was about to buy. Saved me a huge headache and money.",
      author: "Mir Rashed",
      vehicle: "Toyota Axio"
    }
  },
  {
    id: 6,
    category: 'MECHANICAL',
    title: "Premium Denting & Oven Paint Restoration",
    desc: "Factory-finish body repairs. We match original paint flake profiles using computerized color codes, pull body indentations without cracking steel, and apply high-gloss UV clearcoats inside our climate-controlled spray booth.",
    features: ["Digital OEM Color Matching", "Dust-Free Oven Baking", "Pneumatic Dent Pulling", "Multi-Stage High Gloss Polish"],
    price: "Custom Estimate",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121656/7b4894b053b6df8d0836405fa52186ad_huwdxb.jpg",
    testimonial: {
      quote: "Flawless match on my Pearl White door panel. Removed door dings and looks straight out of the showroom.",
      author: "Mahedi Hasan",
      vehicle: "Toyota Premio 2017"
    }
  },
  {
    id: 7,
    category: 'ROUTINE',
    title: "3D Laser Wheel Alignment & Dynamic Balancing",
    desc: "Protect tire longevity and eliminate high-speed vibration. We use multi-point infrared camera 3D alignment systems to calibrate toe, camber, and steering angle sensors to factory alignment specs.",
    features: ["3D Infrared Camera Alignment", "Dynamic Spin Wheel Balancing", "Steering Angle Sensor (SAS) Reset", "Suspension Bushing Audit"],
    price: "Custom Estimate",
    image: "https://res.cloudinary.com/dapn0wx9y/image/upload/v1779121657/8f7de14c0d3446ccd5ee1ff898266bc9_okgmgv.jpg",
    testimonial: {
      quote: "Steering wheel vibration on the expressway is completely gone. Quick 30-minute calibration on laser sensors.",
      author: "Asif Adnan",
      vehicle: "Honda Grace Hybrid"
    }
  }
];

export default function ServicesPage() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const openBookingFor = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsBookModalOpen(true);
  };

  const filteredServices = activeCategory === 'ALL' 
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <>
      <BookNowModal 
        isOpen={isBookModalOpen} 
        onClose={() => { setIsBookModalOpen(false); setSelectedService(''); }} 
        defaultService={selectedService} 
      />
      <div className="relative w-full min-h-screen bg-[#070707] text-white font-sans flex flex-col items-center overflow-x-hidden pb-0">
        
        {/* Navigation Header */}
        <Navbar activePage="services" onBookClick={() => setIsBookModalOpen(true)} className="max-w-[1440px]" />

        {/* Hero Section */}
        <section className="w-full max-w-5xl px-4 md:px-8 mt-10 md:mt-14">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">Workshop Operations</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-white mt-1">
              SERVICE <span className="text-brand-red">CATALOG</span>
            </h1>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mt-2 font-normal">
              Specialized departments equipped with official scanners, high-voltage battery diagnostic tools, and veteran mechanics.
            </p>
          </div>
          
          {/* Hero Workspace Photograph */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-black">
            <img 
              src="https://res.cloudinary.com/dzbnxmnbd/image/upload/v1781965222/IMG-20260618-WA0019_aoaubg.jpg" 
              alt="iWorksBD live diagnostics bay in Dhaka" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="text-xs uppercase tracking-wider text-white/90 bg-black/60 px-3 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                Live Workshop Floor · Dhaka
              </span>
            </div>
          </div>
        </section>

        {/* Filterable Catalog Section */}
        <section className="w-full max-w-5xl px-4 md:px-8 py-12 md:py-16 flex flex-col items-center">
          
          {/* Category Tabs */}
          <div className="w-full flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-white/10">
            <button 
              onClick={() => setActiveCategory('ALL')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === 'ALL' 
                  ? 'bg-brand-red text-white shadow-lg' 
                  : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              All Services
            </button>
            <button 
              onClick={() => setActiveCategory('DIAGNOSTIC')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === 'DIAGNOSTIC' 
                  ? 'bg-brand-red text-white shadow-lg' 
                  : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              Diagnostic &amp; Hybrid Battery
            </button>
            <button 
              onClick={() => setActiveCategory('MECHANICAL')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === 'MECHANICAL' 
                  ? 'bg-brand-red text-white shadow-lg' 
                  : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              Mechanical &amp; Paint
            </button>
            <button 
              onClick={() => setActiveCategory('ROUTINE')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === 'ROUTINE' 
                  ? 'bg-brand-red text-white shadow-lg' 
                  : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              Routine Care &amp; AC
            </button>
          </div>

          {/* Service Cards List */}
          <div className="w-full flex flex-col gap-8 md:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div 
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-[#111111] border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col lg:flex-row gap-8 items-stretch hover:border-brand-red/30 transition-all shadow-xl"
                >
                  {/* Photo Display */}
                  <div className="w-full lg:w-[40%] aspect-[16/11] rounded-2xl overflow-hidden bg-black border border-white/10 flex-shrink-0">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Operational Details Column */}
                  <div className="flex-1 flex flex-col justify-between text-left gap-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs text-neutral-400 font-mono">
                        <span className="text-brand-red font-semibold">Bay 0{service.id}</span>
                        <span>·</span>
                        <span>{service.category === 'ROUTINE' ? 'Routine & AC' : service.category === 'DIAGNOSTIC' ? 'Diagnostics Lab' : 'Mechanical Engine'}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-2.5">
                        {service.title}
                      </h3>

                      <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-normal mb-5">
                        {service.desc}
                      </p>

                      {/* Technical Inclusions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex gap-2 items-center text-xs text-neutral-200">
                            <Check size={13} className="text-brand-red shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Genuine Client Testimonial */}
                      <div className="bg-white/5 border border-white/5 p-3.5 rounded-2xl flex gap-3 items-start">
                        <MessageSquare size={16} className="text-brand-red shrink-0 mt-0.5" />
                        <div className="flex flex-col text-xs text-neutral-300">
                          <p className="italic">"{service.testimonial.quote}"</p>
                          <span className="text-[11px] text-neutral-400 mt-1 font-medium">
                            — {service.testimonial.author} ({service.testimonial.vehicle})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing & Booking Row */}
                    <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Estimated Cost</span>
                        <span className="text-lg font-bold text-white font-mono">{service.price}</span>
                      </div>
                      
                      <button 
                        onClick={() => openBookingFor(service.title)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-600 text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
                      >
                        <span>Book This Bay</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Operational Highlights Section */}
        <section className="w-full max-w-5xl px-4 md:px-8 mb-16">
          <div className="bg-[#121212] border border-white/10 text-white p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row justify-between items-stretch gap-8">
            <div className="flex-1 flex flex-col justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">
                  Workshop Locations
                </span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mt-1 mb-2">
                  Bosila Garden City &amp; Norda
                </h3>
                <div className="flex items-start gap-2 max-w-md text-neutral-300 text-sm leading-relaxed">
                  <MapPin size={20} className="shrink-0 text-brand-red mt-0.5" />
                  <span>Plot-27, Road-05, Block-D, Bosila Garden City, Mohammadpur, Dhaka-1207, Bangladesh</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 pt-4 border-t border-white/10 text-xs text-neutral-300">
                <span className="text-neutral-500 uppercase tracking-wider font-medium">Quick Contacts:</span>
                <div className="flex flex-wrap gap-4 font-mono">
                  <a href="tel:+8801755652303" className="hover:text-brand-red transition-colors">
                    +880 1755-652303
                  </a>
                  <a href="mailto:iworksbd2015@gmail.com" className="hover:text-brand-red transition-colors">
                    iworksbd2015@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-black/40 p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3">
                <Clock size={24} className="text-brand-red" />
                <h4 className="text-lg font-bold uppercase tracking-tight text-white">
                  Workshop Hours
                </h4>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-xl border border-white/5">
                  <span className="text-neutral-300">Saturday – Thursday</span>
                  <span className="font-semibold text-white">10:00 AM – 7:30 PM</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-xl border border-white/5">
                  <span className="text-neutral-400">Friday</span>
                  <span className="font-semibold text-brand-red">Closed (Emergency Hotline Open)</span>
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 mt-1">
                * We recommend booking ahead on WhatsApp to reserve a diagnostic bay.
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Standards */}
        <section className="w-full max-w-4xl px-4 md:px-8 mb-16 text-center">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">
            Diagnostic Standards
          </span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mt-1 mb-8">
            Why We Skip Dealership Shortcuts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl flex flex-col gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h4 className="text-sm font-bold uppercase text-white tracking-wide">Insulation Protection</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                High-voltage hybrid electronics are tested for insulation resistance before touching any battery or inverter module.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl flex flex-col gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center">
                <Wrench size={20} />
              </div>
              <h4 className="text-sm font-bold uppercase text-white tracking-wide">Strict OEM Specifications</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Components are torqued down to exact manufacturer foot-pound values without relying on arbitrary guess-tightening.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl flex flex-col gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center">
                <Award size={20} />
              </div>
              <h4 className="text-sm font-bold uppercase text-white tracking-wide">Pricing Integrity</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Itemized quotes given before disassembly. We never bill surprise additions without your explicit consent.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
