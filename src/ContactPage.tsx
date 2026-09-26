import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageCircle, 
  Share2, 
  Navigation, 
  Wrench, 
  ShieldAlert 
} from 'lucide-react';
import BookNowModal from './components/BookNowModal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function ContactPage() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: 'Hybrid Battery Restoration',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+8801755652303');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('iworksbd2015@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your vehicle issue';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <BookNowModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
      <div className="relative w-full min-h-screen bg-[#070707] text-white font-sans flex flex-col items-center overflow-x-hidden pb-0">
        
        {/* Navigation Header */}
        <Navbar activePage="contact" onBookClick={() => setIsBookModalOpen(true)} className="max-w-[1440px]" />

        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 flex flex-col items-center bg-[#050505] overflow-hidden border-b border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center px-6 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium mb-4">
              <span>Workshops in Mohammadpur &amp; Norda, Dhaka</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
              CONTACT OUR <span className="text-brand-red">ENGINEERS</span>
            </h1>
            <p className="text-neutral-300 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
              Connect directly with iWorksBD for Japanese hybrid battery diagnostics, engine overhaul quotes, or same-day inspection appointments.
            </p>
          </motion.div>
        </section>

        {/* 4 Touchpoints Grid */}
        <section className="w-full max-w-6xl mx-auto px-4 md:px-8 -mt-6 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Phone Hotline Card */}
            <div className="bg-[#111] border border-white/10 hover:border-brand-red/40 rounded-2xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <button 
                    onClick={handleCopyPhone}
                    className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 font-mono bg-white/5 px-2 py-1 rounded-md transition-colors cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check size={12} className="text-brand-red" /> : <Copy size={12} />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <span className="text-[11px] font-medium text-brand-red uppercase tracking-wider">Voice Hotline</span>
                <h3 className="text-base font-bold font-mono text-white mt-1 mb-1">+880 1755-652303</h3>
                <p className="text-xs text-neutral-400">Direct phone line for immediate inquiries &amp; bay reservations.</p>
              </div>
              <a 
                href="tel:+8801755652303" 
                className="mt-5 w-full py-2.5 bg-white/5 hover:bg-brand-red text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5 border border-white/10 hover:border-brand-red"
              >
                <span>Call Hotline</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#111] border border-white/10 hover:border-brand-red/40 rounded-2xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                    <MessageCircle size={18} />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono bg-white/5 px-2 py-0.5 rounded">
                    Sat–Thu
                  </span>
                </div>
                <span className="text-[11px] font-medium text-brand-red uppercase tracking-wider">WhatsApp Desk</span>
                <h3 className="text-base font-bold font-mono text-white mt-1 mb-1">+880 1755-652303</h3>
                <p className="text-xs text-neutral-400">Send dashboard warning lights or fault photos for fast diagnosis.</p>
              </div>
              <a 
                href="https://wa.me/8801755652303" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-5 w-full py-2.5 bg-white/5 hover:bg-brand-red text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5 border border-white/10 hover:border-brand-red"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-[#111] border border-white/10 hover:border-brand-red/40 rounded-2xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 font-mono bg-white/5 px-2 py-1 rounded-md transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check size={12} className="text-brand-red" /> : <Copy size={12} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <span className="text-[11px] font-medium text-brand-red uppercase tracking-wider">Email Inquiry</span>
                <h3 className="text-xs font-bold font-mono text-white mt-1 mb-1 break-all">iworksbd2015@gmail.com</h3>
                <p className="text-xs text-neutral-400">Corporate fleet, official quotation, and business inquiries.</p>
              </div>
              <a 
                href="mailto:iworksbd2015@gmail.com" 
                className="mt-5 w-full py-2.5 bg-white/5 hover:bg-brand-red text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5 border border-white/10 hover:border-brand-red"
              >
                <span>Send Email</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Facebook Community Card */}
            <div className="bg-[#111] border border-white/10 hover:border-brand-red/40 rounded-2xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                    <Share2 size={18} />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono bg-white/5 px-2 py-0.5 rounded">
                    26k+ Fans
                  </span>
                </div>
                <span className="text-[11px] font-medium text-brand-red uppercase tracking-wider">Facebook Page</span>
                <h3 className="text-sm font-bold text-white mt-1 mb-1">iWorksBD Official</h3>
                <p className="text-xs text-neutral-400">Project showcases, before/after videos &amp; customer reviews.</p>
              </div>
              <a 
                href="https://www.facebook.com/share/18Mj6GakiH/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-5 w-full py-2.5 bg-white/5 hover:bg-brand-red text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5 border border-white/10 hover:border-brand-red"
              >
                <span>Visit Facebook</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* Main Content Split: Location Details & Form */}
        <section className="w-full max-w-6xl mx-auto py-16 px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Workshop Facility */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">Workshop Facilities</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mt-1 mb-3">
                  OUR <span className="text-brand-red">LOCATIONS</span>
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Located in Bosila Garden City, Mohammadpur and Norda, Dhaka. Equipped with high-voltage battery diagnostic laboratories, mechanical bays, and oven paint booths.
                </p>
              </div>

              {/* Address Card */}
              <div className="bg-[#111] border border-white/10 rounded-2xl p-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">Mohammadpur Facility</span>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-0.5 leading-relaxed font-normal">
                      Plot-27, Road-05, Block-D, Bosila Garden City, Mohammadpur, Dhaka-1207, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div className="w-full">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">Opening Hours</span>
                    <div className="mt-1 space-y-1 text-xs text-neutral-300">
                      <div className="flex justify-between items-center">
                        <span>Saturday – Thursday:</span>
                        <span className="font-mono text-white">10:00 AM – 7:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-brand-red">Friday:</span>
                        <span className="text-neutral-400">Emergency Line Available</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://maps.google.com/?q=Bosila+Garden+City+Mohammadpur+Dhaka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-brand-red hover:bg-red-600 text-white font-semibold text-xs rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Navigation size={14} />
                  <span>Get Driving Directions</span>
                </a>
              </div>

              {/* Map Container */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 relative shadow-xl">
                <iframe 
                  title="iWorksBD Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848833139366!2d90.3425!3d23.7535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf0000000001%3A0x1!2sBosila%20Garden%20City!5e0!3m2!1sen!2sbd!4v1710000000000" 
                  className="w-full h-full border-0 filter grayscale invert contrast-115 opacity-80 hover:opacity-100 transition-opacity"
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-[#111] border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                    SEND A <span className="text-brand-red">MESSAGE</span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">Direct routing to our workshop service advisor.</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-brand-red/15 text-brand-red flex items-center justify-center shrink-0">
                  <Wrench size={16} />
                </div>
              </div>

              {submitted ? (
                <div className="py-10 px-4 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/15 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-tight">Inquiry Received</h4>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-1 max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-bold">{formData.name}</span>. Our workshop manager will review your issue and reach back at <span className="text-brand-red font-mono font-bold">{formData.phone}</span> shortly.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a 
                      href={`https://wa.me/8801755652303?text=${encodeURIComponent(`Hi iWorksBD, I submitted a contact inquiry.\nName: ${formData.name}\nPhone: ${formData.phone}\nVehicle: ${formData.vehicle}\nService: ${formData.service}\nIssue: ${formData.message}`)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-brand-red hover:bg-red-600 text-white font-semibold text-xs rounded-full transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={14} />
                      <span>Connect via WhatsApp</span>
                    </a>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          vehicle: '',
                          service: 'Hybrid Battery Restoration',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-full transition-colors border border-white/10"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Tanvir Hossain" 
                        className={`w-full bg-black/60 border ${errors.name ? 'border-brand-red' : 'border-white/15'} rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all`}
                      />
                      {errors.name && <p className="text-[10px] text-brand-red mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Phone / WhatsApp <span className="text-brand-red">*</span>
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. 01712-345678" 
                        className={`w-full bg-black/60 border ${errors.phone ? 'border-brand-red' : 'border-white/15'} rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all`}
                      />
                      {errors.phone && <p className="text-[10px] text-brand-red mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Email Address <span className="text-neutral-500">(Optional)</span>
                      </label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="e.g. name@example.com" 
                        className={`w-full bg-black/60 border ${errors.email ? 'border-brand-red' : 'border-white/15'} rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Vehicle Model &amp; Year
                      </label>
                      <input 
                        type="text" 
                        value={formData.vehicle}
                        onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                        placeholder="e.g. Toyota Axio Hybrid 2017" 
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Service Category
                    </label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-[#181818] border border-white/15 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all cursor-pointer"
                    >
                      <option value="Hybrid Battery Restoration">High-Voltage Hybrid Battery Restoration</option>
                      <option value="Computer OBD-II Diagnostics">Computerized OBD-II Fault Diagnostics</option>
                      <option value="Engine Repair & Overhaul">Engine Repair &amp; Full Overhaul</option>
                      <option value="AC Gas & Compressor Service">Car AC Servicing &amp; Gas Refill</option>
                      <option value="Suspension & Brakes">Suspension, Brakes &amp; Steering Service</option>
                      <option value="Dent & Paint Restoration">Dent Repair &amp; Oven Paint Restoration</option>
                      <option value="General Periodic Maintenance">General Periodic Maintenance &amp; Oil Change</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Details / Vehicle Symptoms <span className="text-brand-red">*</span>
                    </label>
                    <textarea 
                      rows={3} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Describe symptoms (e.g. dashboard error lights, abnormal idle, hybrid cooling fan noise)..." 
                      className={`w-full bg-black/60 border ${errors.message ? 'border-brand-red' : 'border-white/15'} rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-brand-red transition-all resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-[10px] text-brand-red mt-1">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-red hover:bg-red-600 text-white py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Submit Service Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Emergency Assistance Banner */}
        <section className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-16">
          <div className="bg-[#111] border border-brand-red/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center shrink-0">
                <ShieldAlert size={22} />
              </div>
              <div>
                <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">Urgent Support</span>
                <h4 className="text-lg font-bold text-white uppercase tracking-tight mt-0.5">Need Emergency Diagnostic Advice?</h4>
                <p className="text-xs text-neutral-400 mt-0.5">If your hybrid vehicle has stalled or displays critical warning codes, call our workshop line directly.</p>
              </div>
            </div>
            <a 
              href="tel:+8801755652303"
              className="px-6 py-3 bg-brand-red hover:bg-red-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors shadow-lg flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <Phone size={14} />
              <span>Call +880 1755-652303</span>
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
