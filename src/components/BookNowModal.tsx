import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookNowModal({ isOpen, onClose, defaultService = '' }: BookNowModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService,
    vehicle: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || (!formData.service && !defaultService)) return;
    
    // Construct WhatsApp message
    const phoneNumber = "8801755652303";
    const selectedService = formData.service || defaultService;
    const text = `Hello iWorksBD! I would like to book a workshop inspection.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${selectedService}%0A*Vehicle Model:* ${formData.vehicle || 'Not specified'}%0A%0APlease let me know the earliest available bay slot.`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#111111] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">Book Workshop Bay</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Quick WhatsApp appointment confirmation</p>
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-neutral-300 font-medium">Your Full Name <span className="text-brand-red">*</span></label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-neutral-600"
                  placeholder="e.g. Tanvir Hasan"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-neutral-300 font-medium">Phone / WhatsApp Number <span className="text-brand-red">*</span></label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-neutral-600"
                  placeholder="01712-345678"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-neutral-300 font-medium">Select Service <span className="text-brand-red">*</span></label>
                <select 
                  required
                  value={formData.service || defaultService}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  className="bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors cursor-pointer"
                >
                  <option value="" disabled>Choose a service bay...</option>
                  <option value="Car Maintenance & Fluid Service">Car Maintenance &amp; Fluid Service</option>
                  <option value="Hybrid Battery & Health Check">Hybrid Battery &amp; Health Check</option>
                  <option value="Engine Maintenance & Overhauling">Engine Maintenance &amp; Overhauling</option>
                  <option value="Climate Control & AC Service">Climate Control &amp; AC Service</option>
                  <option value="Pre-Purchase Vehicle Inspection">Pre-Purchase Vehicle Inspection</option>
                  <option value="Premium Denting & Oven Paint">Premium Denting &amp; Oven Paint</option>
                  <option value="Wheel Alignment & Balancing">Wheel Alignment &amp; Balancing</option>
                  <option value="General Diagnostics & Other">General Diagnostics &amp; Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-neutral-300 font-medium">Vehicle Make &amp; Model (Optional)</label>
                <input 
                  type="text" 
                  value={formData.vehicle}
                  onChange={e => setFormData({...formData, vehicle: e.target.value})}
                  className="bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-neutral-600"
                  placeholder="e.g. 2017 Toyota Axio Hybrid"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="mt-3 bg-brand-red hover:bg-red-600 text-white py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Continue to WhatsApp Booking</span>
                <Send size={14} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
