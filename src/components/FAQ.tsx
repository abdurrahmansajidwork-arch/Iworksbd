import React, { useState } from 'react';
import { Plus, Minus, Search, X, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    "q": "What makes iWorksBD different from traditional workshops?",
    "a": "We are a specialized hybrid and high-tech automotive center equipped with Japanese OEM diagnostic scanners, cell-level battery testers, and certified technicians. We offer direct, transparent repairs with zero unnecessary upsells."
  },
  {
    "q": "How can I claim or avail a hybrid health check promo?",
    "a": "Our specialized hybrid battery and ECU diagnostic checks are regularly featured in seasonal promotions. You can claim inquiries by calling us directly at +880 1755-652303 or booking an appointment through our website."
  },
  {
    "q": "Do you offer genuine OEM Japanese parts?",
    "a": "Yes. We directly import and install authentic Japanese OEM replacement components for Toyota, Honda, Lexus, Nissan, and other Japanese brands to ensure maximum longevity and factory performance."
  },
  {
    "q": "Is the workshop equipped for full engine rebuilds and overhauls?",
    "a": "Absolutely. Whether you require routine synthetic oil changes, hybrid battery cell balancing, or a complete engine overhaul, our precision workshop handles all complex mechanical repairs."
  },
  {
    "q": "How long does a high-voltage hybrid battery service take?",
    "a": "Basic battery diagnostic scans take under 30 minutes. Cell balancing and individual module replacements typically take 4 to 6 hours, while complete battery pack replacement is completed within the same day."
  },
  {
    "q": "What air conditioning and cooling system services do you provide?",
    "a": "We offer complete AC diagnostic scanning, R134a/R1234yf refrigerant gas flushing and refilling, compressor overhauls, leak testing, and cabin air filter replacements for optimal cooling performance."
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter((faq) => {
    const query = searchTerm.toLowerCase().trim();
    if (!query) return true;
    return (
      faq.q.toLowerCase().includes(query) ||
      faq.a.toLowerCase().includes(query)
    );
  });

  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-gradient-to-b from-black via-[#1a0505] to-black py-24 md:py-32 px-6 border-x border-b border-white/10">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-12"
        >
           <div className="border border-white/30 bg-black/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 inline-flex items-center gap-2">
              <span className="text-[10px] text-white uppercase font-bold tracking-[0.2em]">Got Questions?</span>
           </div>
           <h2 className="text-4xl md:text-5xl lg:text-7xl font-oswald font-bold text-white tracking-tight mb-4 uppercase drop-shadow-md">
              Frequently Asked <span className="text-brand-red">Questions</span>
           </h2>
           <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Search our knowledge base or browse common inquiries about our hybrid diagnostics, repairs, and workshop services.
           </p>
        </motion.div>

        {/* Search Input Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 max-w-2xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-red transition-colors">
              <Search size={20} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setOpenIndex(0); // auto-expand first result
              }}
              placeholder="Search questions (e.g. hybrid battery, OEM parts, engine, AC)..."
              className="w-full bg-black/50 backdrop-blur-xl border border-white/20 focus:border-brand-red rounded-2xl py-4 pl-12 pr-12 text-white placeholder-gray-400 text-sm md:text-base shadow-2xl transition-all outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
          {searchTerm.trim() && (
            <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono text-gray-400">
              <span>Showing {filteredFaqs.length} of {faqs.length} results</span>
              <button 
                onClick={() => setSearchTerm('')}
                className="text-brand-red hover:underline uppercase tracking-wider font-bold cursor-pointer"
              >
                Clear Filter
              </button>
            </div>
          )}
        </motion.div>

        {/* FAQ List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div 
                  layout
                  key={faq.q} 
                  className="border border-white/20 bg-black/20 rounded-2xl overflow-hidden backdrop-blur-sm transition-all hover:bg-black/30 hover:border-white/30 shadow-lg"
                >
                  <motion.button 
                    layout="position"
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex items-center justify-between w-full p-6 md:p-8 text-left cursor-pointer"
                  >
                    <span className="text-base md:text-lg font-bold text-white uppercase tracking-wide pr-8">{faq.q}</span>
                    <motion.span 
                      layout
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-brand-red text-white' : 'bg-white/20 text-white'}`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </motion.span>
                  </motion.button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0 text-white/80 text-sm md:text-base leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 px-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md"
          >
            <HelpCircle size={40} className="mx-auto text-brand-red/60 mb-4" />
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">No Matching Questions Found</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
              We couldn't find any FAQs matching "{searchTerm}". Feel free to reach out to our team directly for immediate assistance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button 
                onClick={() => setSearchTerm('')}
                className="px-5 py-2.5 rounded-xl border border-white/20 text-white text-xs font-mono uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer"
              >
                Clear Search
              </button>
              <a 
                href="tel:+8801755652303"
                className="px-5 py-2.5 rounded-xl bg-brand-red text-white text-xs font-mono uppercase tracking-widest font-bold hover:bg-red-700 transition-colors"
              >
                Call Hotline
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
