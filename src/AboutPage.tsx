import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Settings, 
  Gauge 
} from 'lucide-react';
import BookNowModal from './components/BookNowModal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTextHighlight from './components/ScrollTextHighlight';
import Card3DTilt from './components/Card3DTilt';

export default function AboutPage() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <BookNowModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
      <div className="relative w-full min-h-screen bg-[#070707] text-white font-sans flex flex-col items-center overflow-x-hidden pb-0">
        
        {/* Navigation Header */}
        <Navbar activePage="about" onBookClick={() => setIsBookModalOpen(true)} className="max-w-[1440px]" />

        {/* 1. Header Section */}
        <section className="w-full max-w-5xl px-4 md:px-8 mt-12 mb-6">
          <div className="text-center">
            <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-xs">Behind The Tools</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mt-2">
              Who is <span className="text-brand-red">iWorksBD?</span>
            </h1>
          </div>
        </section>

        {/* 2. Raw, Human, Authentic Narrative (Real Storytelling) */}
        <section className="w-full max-w-4xl px-6 py-8 md:py-12 text-left flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white border-l-4 border-brand-red pl-4">
              A Symbol of Trust and Excellence
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
              <strong>iWorksBD</strong> stands as a symbol of trust and excellence in the automobile service center arena of Dhaka. We have premium Dent and Paint department, Engine and Mechanical department, AC and Electric department. We provide diagnosis and holistic solutions for all types of hybrid and non-hybrid vehicles integrating modern and innovative methods by skilled technicians in capital city's prime areas like Norda Dhalibari Kachabazar Moor (Total Care Automobiles Ltd.) and Mohammadpur (iWorksBD).
            </p>
            
            {/* Scroll-Driven Philosophy Highlight */}
            <div className="my-3 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-red font-bold block mb-3">
                Core Directive // Scroll To Illuminate
              </span>
              <ScrollTextHighlight
                text="OUR PHILOSOPHY IS SIMPLE: TO ENSURE QUALITY SERVICE STANDARDS WITHOUT COMPROMISE OR DELAY, AND TO SECURE THE LIFELONG DURABILITY AND FLAWLESS INTEGRITY OF YOUR VEHICLE."
                highlightWords={['QUALITY', 'STANDARDS', 'COMPROMISE', 'DELAY', 'LIFELONG', 'DURABILITY', 'INTEGRITY']}
                className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-white/90 leading-snug"
              />
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
              The trust of our customers is a reflection of our commitment. Through strategic location, modern features and modern services, we aim to make your favorite car look like new.
            </p>
          </div>

          {/* Genuine Garage Interactive Grid - Visual proof of authentic operations without images */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-brand-red">
              Inside Dhaka's Hybrid Command Center
            </h3>
            
            {/* Split layout for feature cards with 3D Tilt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card3DTilt intensity={10} glareOpacity={0.15}>
                <div className="h-full bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-red/40 transition-all shadow-xl">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red mb-4">
                      <Settings size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-red">Specialized Cell Refurbishing</span>
                    <h4 className="text-lg font-bold text-white uppercase mt-1">High-Voltage Battery Pack Lab</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      Our team opens and rebuilds battery modules to replace individual cells, perform industrial cell balancing, and eliminate terminal oxidation safely.
                    </p>
                  </div>
                </div>
              </Card3DTilt>

              <Card3DTilt intensity={10} glareOpacity={0.15}>
                <div className="h-full bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-red/40 transition-all shadow-xl">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red mb-4">
                      <Gauge size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-red">Live Waveform Profiling</span>
                    <h4 className="text-lg font-bold text-white uppercase mt-1">Advanced Electronics Diagnostics</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      We trace wiring charts, diagnose actual CAN bus communications, monitor electronic solenoids, and study sensor waveforms live to run absolute fault location.
                    </p>
                  </div>
                </div>
              </Card3DTilt>
            </div>
          </div>
        </section>

        {/* 3. SOLID BRAND RED OPERATIONAL HIGHLIGHT SECTION */}
        <section id="location-hours-red-highlight" className="w-full max-w-5xl px-4 md:px-8 mb-16">
          <div className="bg-brand-red text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-stretch gap-8 border border-red-500/30">
            
            {/* Absolute visual design details */}
            <div className="absolute right-0 bottom-0 top-0 opacity-10 pointer-events-none hidden lg:block">
              <svg width="400" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="8" strokeDasharray="20 20" />
                <path d="M200 40 V360" stroke="white" strokeWidth="12" />
                <path d="M40 200 H360" stroke="white" strokeWidth="12" />
              </svg>
            </div>

            {/* Left Box: Physical Spot */}
            <div className="flex-1 flex flex-col justify-between gap-4 z-10">
              <div>
                <span className="text-[10px] uppercase font-black tracking-[0.3em] bg-black/25 px-3 py-1 rounded inline-block text-white mb-3">
                  Our Garage Headquarters
                </span>
                <h3 className="text-2xl md:text-3.5xl font-black uppercase tracking-tight text-white mb-1">
                  BOSILA GARDEN CITY
                </h3>
                <p className="text-lg font-bold text-black/90 uppercase tracking-wider mb-3">
                  MOHAMMADPUR, DHAKA
                </p>
                <div className="flex items-start gap-2 max-w-md">
                  <MapPin size={22} className="shrink-0 text-white mt-0.5" />
                  <p className="text-sm md:text-base font-medium text-white/95 leading-relaxed">
                    Plot-27, Road-05, Block-D, Bosila Garden City, Mohammadpur, Dhaka-1207, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-white/20 mt-2">
                <p className="text-xs font-bold uppercase tracking-widest text-black/80">
                  Quick Contacts:
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-black">
                  <a href="tel:+8801755652303" className="flex items-center gap-1.5 hover:underline">
                    +880 1755-652303
                  </a>
                  <a href="mailto:iworksbd2015@gmail.com" className="flex items-center gap-1.5 hover:underline">
                    iworksbd2015@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Box: Dynamic Timeline Hours */}
            <div className="flex-1 bg-black/20 p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-center gap-6 z-10">
              <div className="flex gap-4 items-center">
                <Clock size={32} className="text-white shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-widest text-white/80">Diagnostic Floor</span>
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
                    Operational Hours
                  </h4>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center bg-white/10 px-4 py-3 rounded-xl border border-white/10">
                  <span className="text-sm font-black uppercase tracking-wider text-white">Saturday - Thursday</span>
                  <span className="text-sm font-black text-white bg-black/30 px-3 py-1 rounded">
                    10:00 AM - 07:30 PM
                  </span>
                </div>
                
                <div className="flex justify-between items-center bg-black/30 px-4 py-3 rounded-xl border border-transparent">
                  <span className="text-sm font-black uppercase tracking-wider text-white/80">Friday</span>
                  <span className="text-sm font-bold text-red-200 uppercase tracking-widest bg-brand-red/50 px-3 py-1 rounded">
                    Closed
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-white/80 font-medium leading-relaxed uppercase text-center mt-1 border-t border-white/10 pt-3">
                * Call ahead to preemptively block a service bay and diagnostic monitor sequence.
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Standards Card */}
        <section className="w-full max-w-4xl px-6 mb-16">
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-xl md:text-2.5xl font-black uppercase tracking-tight text-white mb-3">
              REAL ENGINEERING, ZERO GUESSWORK
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed uppercase font-bold tracking-wider mb-6">
              We believe in providing permanent solutions instead of quick, superficial code resets. Your safety is our absolute standard.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <p className="text-xs text-gray-200 font-semibold uppercase">Advanced high-voltage insulation protection testing.</p>
              </div>
              <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <p className="text-xs text-gray-200 font-semibold uppercase">Proper copper busbar replacement &amp; layout treatment.</p>
              </div>
              <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <p className="text-xs text-gray-200 font-semibold uppercase">Professional thermal heat dissipation gel calibration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Booking Call to Action */}
        <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-8 py-16 flex flex-col items-center bg-[#070707] border-t border-white/5">
          <div className="w-full max-w-4xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2">
                Have an unresolved hybrid warning light?
              </h3>
              <p className="text-xs md:text-sm text-gray-400 font-semibold tracking-wider uppercase">
                Stop waiting. Connect directly with our diagnostic partners on WhatsApp.
              </p>
            </div>
            
            <button 
              onClick={() => setIsBookModalOpen(true)}
              className="bg-brand-red text-white px-8 py-4 uppercase font-bold text-xs md:text-sm tracking-widest hover:bg-white hover:text-black transition-all clip-diagonal hover:scale-105 cursor-pointer"
            >
              Book Inspection Now
            </button>
          </div>
        </section>

        {/* Floating Call & WhatsApp Buttons */}
        <a 
          href="tel:+8801755652303" 
          className="fixed bottom-6 left-6 z-50 bg-brand-red text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:shadow-[0_0_20px_rgba(238,63,44,0.4)]"
          title="Call Us Now"
        >
          <Phone size={24} strokeWidth={2.5} />
        </a>
        <a 
          href="https://wa.me/8801755652303" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
          title="WhatsApp Us"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767-.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Global Footer */}
        <Footer />
      </div>
    </>
  );
}
