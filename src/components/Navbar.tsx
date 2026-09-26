import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, Phone, Users, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type ActivePage = 'home' | 'about' | 'services' | 'team' | 'management' | 'query' | 'contact';

interface NavbarProps {
  activePage: ActivePage;
  onBookClick: () => void;
  className?: string;
  transparent?: boolean;
}

export default function Navbar({ activePage, onBookClick, className = '' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(
    activePage === 'team' || activePage === 'management'
  );
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to update geometric glass elevation & opacity subtly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Desktop hover state for Team dropdown with smooth mechanical grace period
  const [isTeamHovered, setIsTeamHovered] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsTeamHovered(true);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setIsTeamHovered(false);
    }, 180);
  };

  const isTeamActive = activePage === 'team' || activePage === 'management';

  const navLinks = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'About Us', path: '/about', key: 'about' },
    { name: 'Services', path: '/services', key: 'services' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full transition-all duration-300 px-3 sm:px-5 md:px-6 pt-2 sm:pt-2.5 pb-1 pointer-events-none">
      
      {/* Custom Geometric Chamfered Navbar Structure - Compact & Gradient-Free */}
      <div className="max-w-6xl mx-auto w-full pointer-events-auto">
        <header
          className={`relative w-full clip-diagonal-nav p-[1px] transition-all duration-500 geometric-glass-border ${
            isScrolled ? 'opacity-95 scale-[0.995]' : 'opacity-85 hover:opacity-100'
          } ${className}`}
        >
          {/* Inner Liquid Glass Container with Reduced Opacity and Clean Solid Backdrop */}
          <div
            className={`w-full h-12 sm:h-13 md:h-14 px-3.5 sm:px-5 md:px-6 flex items-center justify-between clip-diagonal-nav transition-all duration-500 ${
              isScrolled
                ? 'geometric-glass-inner-scrolled'
                : 'geometric-glass-inner'
            }`}
          >
            {/* Brand Identity - Clean & Direct */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none z-10"
              aria-label="iWorksBD Home"
            >
              <div className="relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md overflow-hidden border border-white/20 p-0.5 group-hover:border-brand-red transition-all duration-300 bg-black/60 shadow-md">
                  <img
                    src="https://res.cloudinary.com/dapn0wx9y/image/upload/v1779197769/IMG-20260519-WA0010_1_cnf1a9.jpg"
                    alt="iWorksBD Logo"
                    className="w-full h-full rounded-[4px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-brand-red rounded-full border-2 border-black"></span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg sm:text-xl font-black tracking-wider font-mono leading-none text-white group-hover:text-brand-red transition-colors">
                  iWorksBD
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5 h-full z-10">
              {navLinks.map((link) => {
                const isActive = activePage === link.key;
                return (
                  <Link
                    key={link.key}
                    to={link.path}
                    className={`relative px-3 py-1.5 text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navGeometricActive"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-red shadow-[0_0_10px_rgba(238,63,44,0.9)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Team Dropdown Menu Container */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/team"
                  className={`relative px-3 py-1.5 text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                    isTeamActive 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span>Team</span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-250 ${
                      isTeamHovered ? 'rotate-180 text-brand-red' : 'text-gray-400'
                    }`}
                  />
                  {isTeamActive && (
                    <motion.div
                      layoutId="navGeometricActive"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-red shadow-[0_0_10px_rgba(238,63,44,0.9)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Geometric Cut Solid Glass Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 transition-all duration-250 z-50 ${
                    isTeamHovered
                      ? 'opacity-100 visible pointer-events-auto translate-y-0'
                      : 'opacity-0 invisible pointer-events-none -translate-y-2'
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="clip-diagonal p-[1px] bg-white/15">
                    <div className="clip-diagonal geometric-glass-dropdown p-2">
                      <Link
                        to="/team"
                        className={`flex items-start gap-3 p-2.5 transition-all duration-200 ${
                          activePage === 'team'
                            ? 'bg-brand-red/20 text-brand-red border-l-2 border-brand-red'
                            : 'hover:bg-white/10 text-white/90 hover:text-white'
                        }`}
                        onClick={() => setIsTeamHovered(false)}
                      >
                        <div className="p-1.5 rounded bg-white/5 border border-white/10 text-brand-red shrink-0 mt-0.5">
                          <Users size={15} />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-white">Our Team</div>
                          <div className="text-[11px] text-gray-400 font-normal normal-case mt-0.5 leading-snug">
                            Certified mechanics &amp; diagnostic technicians.
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/management"
                        className={`flex items-start gap-3 p-2.5 transition-all duration-200 mt-1 ${
                          activePage === 'management'
                            ? 'bg-brand-red/20 text-brand-red border-l-2 border-brand-red'
                            : 'hover:bg-white/10 text-white/90 hover:text-white'
                        }`}
                        onClick={() => setIsTeamHovered(false)}
                      >
                        <div className="p-1.5 rounded bg-white/5 border border-white/10 text-brand-red shrink-0 mt-0.5">
                          <ShieldCheck size={15} />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-white">Management</div>
                          <div className="text-[11px] text-gray-400 font-normal normal-case mt-0.5 leading-snug">
                            Leadership, workshop operations &amp; partners.
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/query"
                className={`relative px-3 py-1.5 text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  activePage === 'query' 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>Query</span>
                {activePage === 'query' && (
                  <motion.div
                    layoutId="navGeometricActive"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-red shadow-[0_0_10px_rgba(238,63,44,0.9)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>

              <Link
                to="/contact"
                className={`relative px-3 py-1.5 text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  activePage === 'contact' 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>Contact</span>
                {activePage === 'contact' && (
                  <motion.div
                    layoutId="navGeometricActive"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-red shadow-[0_0_10px_rgba(238,63,44,0.9)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </nav>

            {/* Action Group: Hotline & Geometric CTA Book Now */}
            <div className="flex items-center gap-2.5 sm:gap-3 z-10">
              <a
                href="tel:+8801755652303"
                className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 border border-white/10 hover:border-brand-red/50 text-white text-[11px] font-mono font-bold hover:bg-white/5 transition-all cursor-pointer"
                title="Call Workshop Hotline"
              >
                <Phone size={12} className="text-brand-red" />
                <span>+880 1755-652303</span>
              </a>

              {/* Geometric CTA Book Now matching site-wide style */}
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
                onClick={onBookClick}
                className="hidden sm:inline-flex items-center justify-center bg-brand-red text-white px-4 sm:px-5 py-2 uppercase font-black text-xs tracking-wider hover:bg-red-600 transition-all clip-diagonal shadow-[0_0_15px_rgba(238,63,44,0.3)] hover:shadow-[0_0_25px_rgba(238,63,44,0.55)] cursor-pointer"
              >
                Book Now
              </motion.button>

              {/* Mobile Geometric Hamburger Button */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden relative w-9 h-8 sm:w-10 sm:h-9 flex flex-col items-center justify-center gap-1 border border-white/20 hover:border-brand-red bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer clip-diagonal group"
                aria-label="Toggle Navigation Menu"
              >
                <span className="w-4 sm:w-4.5 h-0.5 bg-white group-hover:bg-brand-red transition-colors"></span>
                <span className="w-4 sm:w-4.5 h-0.5 bg-white group-hover:bg-brand-red transition-colors"></span>
                <span className="w-3 self-start ml-2 sm:ml-2.5 h-0.5 bg-brand-red transition-all"></span>
              </motion.button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Navigation with Matching Geometric Chamfers & Liquid Glass */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end pointer-events-auto">
            {/* Backdrop with Soft Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Geometric Chamfered Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] h-full liquid-glass-drawer clip-diagonal-drawer flex flex-col p-6 sm:p-7 overflow-y-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Top Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-5 mb-6">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/20 p-0.5 bg-black/60 shadow-md">
                    <img
                      src="https://res.cloudinary.com/dapn0wx9y/image/upload/v1779197769/IMG-20260519-WA0010_1_cnf1a9.jpg"
                      alt="iWorksBD Logo"
                      className="w-full h-full rounded-[6px] object-cover"
                    />
                  </div>
                  <span className="text-2xl text-white font-black font-mono tracking-wider">iWorksBD</span>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-brand-red bg-white/5 text-white hover:text-brand-red transition-all cursor-pointer clip-diagonal"
                  aria-label="Close Navigation Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Urgent Hotline Strip */}
              <div className="p-3.5 mb-6 border border-white/10 bg-white/5 flex items-center justify-between clip-diagonal">
                <div>
                  <span className="text-[10px] text-brand-red font-mono uppercase font-bold tracking-widest block">
                    Workshop Voice Line
                  </span>
                  <div className="text-sm font-black font-mono text-white mt-0.5">
                    +880 1755-652303
                  </div>
                </div>
                <a
                  href="tel:+8801755652303"
                  className="w-9 h-9 bg-brand-red text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-md cursor-pointer clip-diagonal"
                >
                  <Phone size={16} />
                </a>
              </div>

              {/* Mobile Navigation List */}
              <nav className="flex flex-col gap-2 font-black uppercase tracking-widest flex-1">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 flex items-center justify-between transition-all clip-diagonal ${
                    activePage === 'home'
                      ? 'bg-brand-red text-white shadow-[0_4px_15px_rgba(238,63,44,0.35)]'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-sm font-bold">Home</span>
                  <ChevronRight size={18} className="opacity-60" />
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 flex items-center justify-between transition-all clip-diagonal ${
                    activePage === 'about'
                      ? 'bg-brand-red text-white shadow-[0_4px_15px_rgba(238,63,44,0.35)]'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-sm font-bold">About Us</span>
                  <ChevronRight size={18} className="opacity-60" />
                </Link>

                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 flex items-center justify-between transition-all clip-diagonal ${
                    activePage === 'services'
                      ? 'bg-brand-red text-white shadow-[0_4px_15px_rgba(238,63,44,0.35)]'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-sm font-bold">Services</span>
                  <ChevronRight size={18} className="opacity-60" />
                </Link>

                {/* Mobile Team Accordion */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
                    className={`py-3 px-4 flex items-center justify-between uppercase transition-all cursor-pointer clip-diagonal ${
                      isTeamActive
                        ? 'bg-white/10 border-l-2 border-brand-red text-brand-red'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-sm font-bold">Team &amp; Management</span>
                    <ChevronRight
                      size={18}
                      className={`transition-transform duration-200 ${mobileTeamOpen ? 'rotate-90' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileTeamOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-1 pl-3 mt-1.5 overflow-hidden"
                      >
                        <Link
                          to="/team"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`py-2 px-3 flex items-center gap-2.5 text-xs tracking-wider transition-all clip-diagonal ${
                            activePage === 'team'
                              ? 'text-brand-red bg-white/10 font-bold border-l border-brand-red'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <Users size={15} />
                          <span>Our Team</span>
                        </Link>
                        <Link
                          to="/management"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`py-2 px-3 flex items-center gap-2.5 text-xs tracking-wider transition-all clip-diagonal ${
                            activePage === 'management'
                              ? 'text-brand-red bg-white/10 font-bold border-l border-brand-red'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <ShieldCheck size={15} />
                          <span>Management</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/query"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 flex items-center justify-between transition-all clip-diagonal ${
                    activePage === 'query'
                      ? 'bg-brand-red text-white shadow-[0_4px_15px_rgba(238,63,44,0.35)]'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-sm font-bold">Query</span>
                  <ChevronRight size={18} className="opacity-60" />
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 flex items-center justify-between transition-all clip-diagonal ${
                    activePage === 'contact'
                      ? 'bg-brand-red text-white shadow-[0_4px_15px_rgba(238,63,44,0.35)]'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-sm font-bold">Contact</span>
                  <ChevronRight size={18} className="opacity-60" />
                </Link>
              </nav>

              {/* Bottom Quick Actions inside Mobile Drawer */}
              <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="bg-brand-red text-white w-full py-4 uppercase font-black tracking-widest text-sm clip-diagonal shadow-[0_0_20px_rgba(238,63,44,0.35)] hover:bg-red-600 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Book Inspection Now</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href="https://wa.me/8801755652303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 border border-white/15 hover:border-brand-red bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 clip-diagonal"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={14} className="text-brand-red" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
