import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2,
  Send,
  ArrowRight
} from 'lucide-react';
import BookNowModal from './components/BookNowModal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function QueryPage() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email required';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        service: '',
        message: ''
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }
  };

  return (
    <>
      <BookNowModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
      <div className="relative w-full min-h-screen bg-[#070707] text-white font-sans flex flex-col items-center overflow-x-hidden pb-0">
        
        {/* Navigation Header */}
        <Navbar activePage="query" onBookClick={() => setIsBookModalOpen(true)} className="max-w-[1440px]" />

        {/* Hero Section */}
        <section className="w-full max-w-4xl px-4 md:px-8 mt-12 mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">Technical Inquiries</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mt-1">
            SUBMIT A <span className="text-brand-red">QUERY</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-md mx-auto mt-2 font-normal">
            Have a question regarding hybrid battery health, transmission behavior, or repair cost? Send us your vehicle details.
          </p>
        </section>

        {/* Form Container */}
        <div className="w-full max-w-3xl px-4 md:px-8 mb-16">
          <div className="bg-[#111] border border-white/10 p-6 sm:p-10 md:p-12 rounded-3xl relative shadow-2xl">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-12 px-4 gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-white tracking-tight">Query Received</h3>
                  <p className="text-sm text-neutral-300 max-w-md leading-relaxed font-normal">
                    Thank you. Your diagnostic inquiry was safely received. Our workshop team will review the symptoms and reach out shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-neutral-400 hover:text-white uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-neutral-300 font-medium">Full Name *</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`bg-black/60 border ${errors.name ? 'border-brand-red' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-all`} 
                        placeholder="Your Name" 
                      />
                      {errors.name && <span className="text-[10px] text-brand-red">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-neutral-300 font-medium">Email Address *</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`bg-black/60 border ${errors.email ? 'border-brand-red' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-all`} 
                        placeholder="yourname@domain.com" 
                      />
                      {errors.email && <span className="text-[10px] text-brand-red">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-neutral-300 font-medium">Active Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={`bg-black/60 border ${errors.phone ? 'border-brand-red' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-all`} 
                        placeholder="+880 17..." 
                      />
                      {errors.phone && <span className="text-[10px] text-brand-red">{errors.phone}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-neutral-300 font-medium">Service Needed *</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className={`bg-[#181818] border ${errors.service ? 'border-brand-red' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-all cursor-pointer`}
                      >
                        <option value="">Select Service Category</option>
                        <option value="diagnostics">Computerized Diagnostics &amp; ECU Scan</option>
                        <option value="hybrid">Hybrid Battery &amp; Inverter Servicing</option>
                        <option value="engine">Engine Maintenance &amp; Mechanical Overhaul</option>
                        <option value="ac">Car AC Servicing &amp; Gas Refill</option>
                        <option value="denting">Denting &amp; Oven Painting</option>
                        <option value="general">General Vehicle Health Audit</option>
                      </select>
                      {errors.service && <span className="text-[10px] text-brand-red">{errors.service}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-neutral-300 font-medium">Vehicle Make, Model &amp; Year</label>
                    <input 
                      type="text" 
                      value={formData.vehicle}
                      onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                      className="bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-all" 
                      placeholder="e.g. Toyota Aqua 2015" 
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-neutral-300 font-medium">Describe Issue or Question *</label>
                    <textarea 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-all resize-none font-normal" 
                      placeholder="Explain your vehicle's symptoms, dashboard codes, or any questions..." 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand-red hover:bg-red-600 text-white py-3.5 rounded-full uppercase font-semibold text-xs tracking-wider transition-colors cursor-pointer shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Submit Query</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
