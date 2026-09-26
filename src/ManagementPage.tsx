import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import BookNowModal from './components/BookNowModal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const management = [
  {
    name: 'Sharmil Ahmed',
    role: 'Managing Partner',
    image: 'https://res.cloudinary.com/dapn0wx9y/image/upload/v1779126427/IMG-20260517-WA0016_g4ishb.jpg'
  },
  {
    name: 'Saiful Osman',
    role: 'Partner',
    image: 'https://res.cloudinary.com/dapn0wx9y/image/upload/v1779126495/IMG-20260517-WA0017_joselg.jpg'
  },
  {
    name: 'Mohammad Mahbub Khair Murad',
    role: 'Partner',
    image: 'https://res.cloudinary.com/uxelon45/image/upload/v1785394449/IMG-20260729-WA0005_1_cska7a.jpg'
  },
  {
    name: 'Ziaur Rahman',
    role: 'Partner',
    image: 'https://res.cloudinary.com/dapn0wx9y/image/upload/v1779126743/Screenshot_20260518-235144_yzxna6.png'
  }
];

export default function ManagementPage() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <BookNowModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
      <div className="relative w-full min-h-screen bg-[#070707] text-white font-sans flex flex-col items-center overflow-x-hidden pb-0">
        
        {/* Navigation Header */}
        <Navbar activePage="management" onBookClick={() => setIsBookModalOpen(true)} className="max-w-[1440px]" />

        {/* Hero Section */}
        <section className="w-full max-w-4xl px-4 md:px-8 mt-12 mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">Leadership &amp; Governance</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mt-2">
            OUR <span className="text-brand-red">MANAGEMENT</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mt-3 font-normal">
            The founding leadership upholding service standards, equipment investment, and customer trust at iWorksBD.
          </p>
        </section>

        {/* Management Grid Section */}
        <section className="w-full max-w-5xl mx-auto py-10 px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col items-center text-center bg-[#111] border border-white/10 rounded-2xl p-5 shadow-xl hover:border-brand-red/40 transition-colors"
              >
                {/* Photo frame */}
                <div className="relative w-full aspect-[4/5] bg-black overflow-hidden rounded-xl border border-white/10 mb-4 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                  />
                </div>
                {/* Info */}
                <div className="flex flex-col items-center">
                  <h3 className="text-base md:text-lg font-bold uppercase text-white tracking-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs text-brand-red font-medium tracking-wide mt-1">
                    {member.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative w-full max-w-4xl mx-auto py-16 px-4 md:px-8 text-center">
           <div className="bg-[#111] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl">
              <ShieldCheck className="text-brand-red mx-auto mb-6" size={44} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                "TRANSPARENT CARE. <span className="text-brand-red">ABSOLUTE PRECISION.</span>"
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto">
                Our management team operates on one foundational commitment: treat every customer's vehicle as our own. We invest continually in OEM diagnostic software and ongoing technician training to ensure our repairs are permanent and reliable.
              </p>
           </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
