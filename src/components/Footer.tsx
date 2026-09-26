import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto border-x border-t border-white/[0.08] bg-[#070809] text-white">
      {/* Upper Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-b border-white/[0.08]">
        
        {/* Brand Column (5 Cols) */}
        <div className="lg:col-span-5 p-8 md:p-12 xl:p-14 flex flex-col justify-between">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img
                src="https://res.cloudinary.com/dapn0wx9y/image/upload/v1779197769/IMG-20260519-WA0010_1_cnf1a9.jpg"
                alt=""
                className="w-10 h-10 rounded-full object-cover border border-white/20"
              />
              <span className="font-display text-2xl font-black uppercase tracking-tight text-white">
                iWorksBD
              </span>
            </Link>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Premier automotive service center in Dhaka specializing in Japanese hybrid systems, high-voltage battery restorations, precision mechanical engine overhauls, and OEM diagnostics.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.06] flex items-center gap-4 text-xs font-mono text-neutral-400">
            <span>Norda Dhalibari</span>
            <span>·</span>
            <span>Mohammadpur, Dhaka</span>
          </div>
        </div>

        {/* Navigation & Services (4 Cols) */}
        <div className="lg:col-span-4 p-8 md:p-12 grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#E52B30] mb-5 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs text-neutral-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Service Bays</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About iWorksBD</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">Engineering Team</Link>
              </li>
              <li>
                <Link to="/management" className="hover:text-white transition-colors">Management</Link>
              </li>
              <li>
                <Link to="/query" className="hover:text-white transition-colors">Diagnostic Query</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Workshop Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#E52B30] mb-5 font-semibold">
              Services
            </h4>
            <ul className="space-y-3 text-xs text-neutral-300">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Hybrid Battery Lab</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">OBD-II Scanning</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Engine Overhaul</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Hybrid AC Service</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Pre-Purchase Audit</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Dent &amp; Oven Paint</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">3D Wheel Alignment</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Direct Contacts & Hours (3 Cols) */}
        <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-between bg-[#0A0C0E]">
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#E52B30] mb-5 font-semibold">
              Workshop Desk
            </h4>
            <div className="space-y-4 text-xs text-neutral-300">
              <a 
                href="tel:+8801755652303" 
                className="flex items-center gap-2 hover:text-[#E52B30] font-mono font-medium transition-colors"
              >
                <Phone size={13} className="text-[#E52B30]" />
                <span>+880 1755-652303</span>
              </a>

              <a 
                href="mailto:iworksbd2015@gmail.com" 
                className="flex items-center gap-2 hover:text-[#E52B30] font-mono text-[11px] transition-colors break-all"
              >
                <Mail size={13} className="text-[#E52B30]" />
                <span>iworksbd2015@gmail.com</span>
              </a>

              <div className="pt-2 text-neutral-400">
                <span className="block text-white font-medium mb-1">Operating Hours</span>
                <span className="font-mono text-[11px] block">Sat–Thu: 10:00 AM – 07:30 PM</span>
                <span className="font-mono text-[11px] block text-[#E52B30] mt-0.5">Friday: Emergency Desk Active</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.08]">
            <a
              href="https://www.facebook.com/share/18Mj6GakiH/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#E52B30] transition-colors"
            >
              <span>Facebook Community (26k+)</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

      </div>

      {/* Sub-Footer */}
      <div className="px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
        <div>
          &copy; {new Date().getFullYear()} iWorksBD Automotive Engineering Ltd. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <span>Dhaka, Bangladesh</span>
          <span>·</span>
          <span>Zero-Upsell Integrity</span>
        </div>
      </div>
    </footer>
  );
}
