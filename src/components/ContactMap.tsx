import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, ArrowUpRight, Clock, MessageSquare, Wrench, CheckCircle2 } from 'lucide-react';

export default function ContactMap() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email required';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          vehicle: '',
          service: '',
          message: ''
        });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative w-full max-w-[1440px] mx-auto py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-black overflow-hidden flex flex-col items-center border-t border-white/5">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-30"
      >
        <source 
          src="https://res.cloudinary.com/uxelon45/video/upload/v1785309604/From_Klickpin.com-_Beautiful_Nail_Design_Ideas_You_Need_Right_Now-pin-id-1129840625279618233_uiczhh.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Radial Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]" 
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 70%, #000 100%)'
        }}
      />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-12 max-w-2xl mx-auto px-4"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">Direct Workshop Connection</span>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-1 leading-tight">
          CONNECT WITH OUR <span className="text-brand-red">ENGINEERS</span>
        </h2>
        <p className="text-neutral-400 text-sm md:text-base mt-2 font-normal">
          Book an inspection slot or drop by our Mohammadpur facility for immediate diagnosis.
        </p>
      </motion.div>

      {/* Main Glass Cards Split Layout */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column - Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Card 1: Immediate Assistance */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">
                Direct Line
              </span>
              <Clock size={16} className="text-neutral-400" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight mb-3">
              NEED IMMEDIATE ASSISTANCE?
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm font-normal leading-relaxed mb-6">
              Speak directly with our workshop manager or drop by our Bosila, Mohammadpur facility for preliminary inspection.
            </p>

            <div className="space-y-3 mb-6 pt-3 border-t border-white/10 text-xs text-neutral-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-red shrink-0" />
                <span>Instant diagnostic appointments available</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-red shrink-0" />
                <span>Sat–Thu: 10:00 AM – 7:30 PM (Friday Closed)</span>
              </div>
            </div>

            <a 
              href="tel:+8801755652303" 
              className="w-full py-3.5 px-6 bg-brand-red hover:bg-red-600 text-white font-semibold text-xs rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>CALL +880 1755-652303</span>
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Card 2: Contact Methods */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {/* Email Card */}
            <a 
              href="mailto:iworksbd2015@gmail.com" 
              className="bg-[#111111]/90 backdrop-blur-xl border border-white/10 hover:border-brand-red/40 transition-all rounded-2xl p-4 flex items-center justify-between group shadow-xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs uppercase tracking-wider">Email Inquiry</div>
                  <div className="text-neutral-400 text-xs font-mono">iworksbd2015@gmail.com</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
            </a>

            {/* Location Card */}
            <div className="bg-[#111111]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs uppercase tracking-wider">Mohammadpur Facility</div>
                  <div className="text-neutral-400 text-xs">Plot-27, Road-05, Block-D, Bosila Garden City, Dhaka-1207</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Booking Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                BOOK SERVICE <span className="text-brand-red">INSPECTION</span>
              </h3>
              <p className="text-neutral-400 text-xs mt-1">Our workshop team responds rapidly on WhatsApp &amp; phone.</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-brand-red/15 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
              <Wrench size={16} />
            </div>
          </div>

          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400 mb-4">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-2">Request Transmitted</h4>
              <p className="text-neutral-300 text-xs max-w-sm leading-relaxed">
                Thank you, <span className="text-white font-bold">{formData.name}</span>. Our workshop manager will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-neutral-300 font-medium">Your Name *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`bg-black/60 border ${errors.name ? 'border-brand-red' : 'border-white/15'} rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all placeholder:text-neutral-600`} 
                    placeholder="e.g. Tanvir Hasan" 
                  />
                  {errors.name && <span className="text-[10px] text-brand-red">{errors.name}</span>}
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-neutral-300 font-medium">Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`bg-black/60 border ${errors.phone ? 'border-brand-red' : 'border-white/15'} rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all placeholder:text-neutral-600`} 
                    placeholder="01712-345678" 
                  />
                  {errors.phone && <span className="text-[10px] text-brand-red">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-neutral-300 font-medium">Vehicle Model &amp; Year</label>
                  <input 
                    type="text" 
                    value={formData.vehicle}
                    onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                    className="bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all placeholder:text-neutral-600" 
                    placeholder="e.g. Toyota Prius 2018" 
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-neutral-300 font-medium">Required Service *</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className={`w-full bg-black/60 border ${errors.service ? 'border-brand-red' : 'border-white/15'} rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all cursor-pointer`}
                  >
                    <option value="" disabled className="bg-neutral-900 text-neutral-400">Select service...</option>
                    <option value="diagnostics" className="bg-neutral-900 text-white">Computerized Diagnostics</option>
                    <option value="hybrid" className="bg-neutral-900 text-white">Hybrid Battery &amp; Cell Balancing</option>
                    <option value="engine" className="bg-neutral-900 text-white">Engine Overhaul &amp; Maintenance</option>
                    <option value="ac" className="bg-neutral-900 text-white">Car AC Servicing &amp; Gas Refill</option>
                    <option value="dent_paint" className="bg-neutral-900 text-white">Dent &amp; Paint Bodyworks</option>
                    <option value="other" className="bg-neutral-900 text-white">General Routine Maintenance</option>
                  </select>
                  {errors.service && <span className="text-[10px] text-brand-red">{errors.service}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-neutral-300 font-medium">Describe Symptoms / Message</label>
                <textarea 
                  rows={3} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all resize-none placeholder:text-neutral-600" 
                  placeholder="e.g. Hybrid warning light on dashboard, strange engine idle sound, or AC cooling check..." 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-2 w-full py-3.5 px-6 bg-brand-red hover:bg-red-600 text-white font-semibold text-xs rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={14} />
                <span>Submit Service Request</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Embedded Google Map */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl w-full mx-auto mt-8 bg-black border border-white/10 rounded-3xl p-2 shadow-2xl overflow-hidden"
      >
        <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848833139366!2d90.3425!3d23.7535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf0000000001%3A0x1!2sBosila%20Garden%20City!5e0!3m2!1sen!2sbd!4v1710000000000" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.15)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="iWorksBD Mohammadpur Workshop"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
