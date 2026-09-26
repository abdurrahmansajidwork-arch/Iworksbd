/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Wrench } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import AboutUs from './components/AboutUs';
import Programs from './components/Programs';
import BeforeAndAfter from './components/BeforeAndAfter';
import MeetOurTeam from './components/MeetOurTeam';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import BookNowModal from './components/BookNowModal';
import Card3DTilt from './components/Card3DTilt';
import CarInspector3D from './components/CarInspector3D';
import AnimatedCounter from './components/AnimatedCounter';
import MagneticButton from './components/MagneticButton';

export default function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  // Scroll-based parallax for hero section
  const { scrollY } = useScroll();
  const heroParallaxY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.85]);

  return (
    <>
      <BookNowModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />

      <div className="relative w-full min-h-screen bg-[#070707] font-sans flex flex-col items-center">
        {/* Sticky Geometric Liquid Glass Navbar */}
        <Navbar activePage="home" onBookClick={() => setIsBookModalOpen(true)} />

        {/* Hero Container with Scroll-based Parallax */}
        <motion.div 
          style={{ y: heroParallaxY, opacity: heroOpacity }}
          className="w-full relative flex items-center justify-center p-0 md:p-4 lg:p-8 -mt-20 sm:-mt-22 md:-mt-24"
        >
          <div className="relative w-full max-w-[1440px] min-h-[92vh] md:min-h-[auto] md:aspect-[4/3] max-h-[92vh] bg-deep-black text-white font-sans md:rounded-2xl shadow-2xl flex flex-col pt-20 sm:pt-22 md:pt-24 overflow-hidden">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none md:rounded-2xl"
            >
              <source src="https://res.cloudinary.com/dapn0wx9y/video/upload/v1779190306/lv_0_20260519172656_dr1p0b.mp4" type="video/mp4" />
            </video>

            {/* Main Hero */}
            <main className="relative z-10 flex-1 w-full px-4 md:px-16 flex flex-col justify-center items-center text-center mt-[-10px] md:mt-[-20px]">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col items-center w-full max-w-4xl mb-10 md:mb-12"
              >
                {/* Eyebrow / Kicker */}
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="h-[2px] w-4 mt-1 md:w-12 bg-gradient-to-r from-transparent to-brand-red"></div>
                  <span className="text-brand-red font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-xs">
                    Automotive Engineering &amp; Repair
                  </span>
                  <div className="h-[2px] w-4 mt-1 md:w-12 bg-gradient-to-l from-transparent to-brand-red"></div>
                </div>
                
                {/* Dynamic Headline */}
                <h1 className="flex flex-col items-center font-black uppercase leading-[1.1] md:leading-[1.0] tracking-tighter w-full group cursor-default">
                  <div className="flex flex-wrap justify-center items-center gap-2 md:gap-5">
                    <span className="text-white text-[32px] sm:text-[56px] md:text-[72px] lg:text-[86px] drop-shadow-xl transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                      AUTO REPAIR
                    </span>
                    <span className="relative bg-brand-red text-white px-3 md:px-7 py-0 md:py-1 clip-diagonal inline-block transform -skew-x-[16deg] shadow-[0_10px_30px_rgba(238,63,44,0.3)] transition-transform duration-500 hover:scale-[1.03]">
                      <span className="block transform skew-x-[16deg] text-[28px] sm:text-[52px] md:text-[68px] lg:text-[80px]">
                        YOU TRUST
                      </span>
                    </span>
                  </div>
                  <div className="mt-1 md:mt-3 text-transparent text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] transition-all duration-500 group-hover:text-white/10" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.9)' }}>
                    NO UPSELLS. JUST RESULTS.
                  </div>
                </h1>

                {/* Subtext */}
                <p className="mt-6 md:mt-8 text-white/90 text-xs md:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] max-w-[600px] px-4 text-center leading-relaxed drop-shadow-md">
                  Premium Dent Paint, Engine, and AC services for hybrid &amp; non-hybrid vehicles. Providing modern innovative care in Norda Dhalibari More and Mohammadpur, Dhaka.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-[320px] sm:max-w-none mx-auto justify-center"
              >
                <MagneticButton strength={0.28}>
                  <motion.button 
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsBookModalOpen(true)} 
                    className="flex items-center justify-center bg-brand-red text-white px-6 md:px-10 py-4 md:py-5 w-full sm:w-auto min-w-[200px] uppercase font-bold text-xs md:text-sm tracking-widest hover:bg-red-600 transition-all clip-diagonal hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(238,63,44,0.2)] cursor-pointer"
                  >
                    Book Now
                  </motion.button>
                </MagneticButton>

                <MagneticButton strength={0.28}>
                  <Link to="/services" className="inline-flex justify-center items-center bg-transparent border border-white/40 text-white px-6 md:px-8 py-4 md:py-5 w-full sm:w-auto min-w-[200px] uppercase font-bold text-xs md:text-sm tracking-widest hover:bg-white hover:text-black transition-all clip-diagonal hover:scale-105 active:scale-95 cursor-pointer">
                    View Services
                  </Link>
                </MagneticButton>
              </motion.div>
            </main>

            {/* Bottom Area: 3D Tilt Enhanced Stats Card with Rolling Counter */}
            <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-8 md:pb-12 flex justify-center sm:justify-start shrink-0">
              <div className="w-full sm:w-auto">
                <Card3DTilt intensity={8} glareOpacity={0.15}>
                  <div className="border-t border-l border-b border-white/40 p-4 w-full sm:w-auto min-w-[280px] md:min-w-[320px] flex items-center gap-4 md:gap-6 cursor-pointer hover:bg-white/10 transition-colors group relative bg-black/40 backdrop-blur-md">
                     <div className="absolute top-0 right-0 w-4 h-px bg-white/40"></div>
                     <div className="absolute bottom-0 right-0 w-4 h-px bg-white/40"></div>
                     
                     <div className="w-12 h-12 bg-[#8B0000] flex items-center justify-center shrink-0 border border-brand-red box-border rounded-xl shadow-md">
                        <Wrench size={22} strokeWidth={2.5} className="text-brand-red" />
                     </div>
                     <div className="flex flex-col items-start text-left">
                        <span className="uppercase font-bold text-[13px] tracking-widest text-white mb-1">
                          <AnimatedCounter value={5000} suffix="+" /> Vehicles Repaired
                        </span>
                        <span className="uppercase text-[11px] font-semibold tracking-widest text-gray-400">Trusted by Car Owners Nationwide</span>
                     </div>
                  </div>
                </Card3DTilt>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Page Content Sections - Marquee directly touches AboutUs, just like before */}
        <Marquee />
        <AboutUs />
        <Programs />
        
        {/* Useful 3D Interactive Car Diagnostics & Instant Booking Inspector */}
        <CarInspector3D onBookService={(service) => setIsBookModalOpen(true)} />

        <BeforeAndAfter />
        <MeetOurTeam />
        <Testimonials />
        <FAQ />
        <ContactMap />
        <Footer />

        {/* Floating WhatsApp Button with Magnetic Motion */}
        <MagneticButton strength={0.3} className="fixed bottom-20 right-6 z-50">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/8801755652303" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] border border-white/20 transition-shadow flex items-center justify-center cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767-.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </motion.a>
        </MagneticButton>
      </div>
    </>
  );
}
