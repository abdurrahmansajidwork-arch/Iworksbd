import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  ShieldCheck, 
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import BookNowModal from './components/BookNowModal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function TeamPage() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <BookNowModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
      <div className="relative w-full min-h-screen bg-[#070707] text-white font-sans flex flex-col items-center overflow-x-hidden pb-0">
        
        {/* Navigation Header */}
        <Navbar activePage="team" onBookClick={() => setIsBookModalOpen(true)} className="max-w-[1440px]" />

        {/* Hero Section */}
        <section className="w-full max-w-4xl px-4 md:px-8 mt-12 mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">Workshop Personnel</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mt-2">
            OUR <span className="text-brand-red">EXPERT TEAM</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mt-3 font-normal">
            Certified mechanics and diagnostic engineers behind iWorksBD's precision repairs.
          </p>
        </section>

        {/* Manager Showcase Section */}
        <section className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8">
          <div className="flex justify-center mb-16">
            <div className="max-w-md w-full flex flex-col items-center text-center bg-[#111111] border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="relative w-full aspect-[4/5] bg-black overflow-hidden rounded-2xl border border-white/10 mb-6 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dzbnxmnbd/image/upload/v1781965222/IMG-20260618-WA0028_fvbswz.jpg" 
                  alt="Md. Sabbir Ahmed" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-brand-red font-semibold uppercase tracking-wider mb-1">
                  Workshop Manager
                </span>
                <h3 className="text-2xl font-bold uppercase text-white tracking-tight">
                  Md. Sabbir Ahmed
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Oversees daily bay operations, customer diagnostic consultations, and high-voltage battery restorations at iWorksBD.
                </p>
              </div>
            </div>
          </div>

          {/* Workshop Experts Grid */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">Workshop Operations</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                ON THE WORKSHOP FLOOR
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="aspect-[4/5] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/uxelon45/image/upload/v1785312227/IMG-20260618-WA0017_vdb8qk.jpg" 
                  alt="iWorksBD technician at work" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="aspect-[4/5] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/uxelon45/image/upload/v1785312227/IMG-20260618-WA0022_esmgob.jpg" 
                  alt="iWorksBD engine specialist" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Core Operational Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <Wrench size={22} className="text-brand-red mb-3" />
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-1.5">Mechanical Assembly</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Every component is torqued down to strict manufacturer OEM tolerances.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <ShieldCheck size={22} className="text-brand-red mb-3" />
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-1.5">Hybrid Electrical</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Cell balancing and inverter calibration performed strictly with insulated diagnostic tools.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <Users size={22} className="text-brand-red mb-3" />
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-1.5">Client Accountability</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Direct WhatsApp photos and video updates sent throughout every repair step.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
