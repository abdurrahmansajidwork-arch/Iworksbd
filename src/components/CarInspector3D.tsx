import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Gauge, 
  Disc, 
  Wind, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  BadgeCheck, 
  ChevronRight, 
  Phone,
  RotateCw,
  Eye
} from 'lucide-react';

export interface DiagnosticHotspot {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  position: { x: number; y: number; z: number }; // percentage on 3D car plane
  symptoms: string[];
  workshopFix: string;
  timeEstimate: string;
  startingPrice: string;
  urgency: 'HIGH' | 'MEDIUM' | 'RECOMMENDED';
  viewAngle: { rx: number; rz: number };
}

const hotspots: DiagnosticHotspot[] = [
  {
    id: 'hybrid-battery',
    name: 'Hybrid Battery & Inverter Pack',
    category: 'High-Voltage System',
    icon: Zap,
    position: { x: 50, y: 72, z: 32 },
    symptoms: [
      '"Check Hybrid System" warning on dash',
      'Engine runs constantly, refusing EV mode',
      'Rapid battery charge meter fluctuation',
      'Loud cooling blower fan noise in rear seat',
    ],
    workshopFix: 'Computerized cell voltage delta profiling (<15mV), cooling duct purification, bus-bar oxidation stripping, and OEM module replacement.',
    timeEstimate: '2 – 3 Hours',
    startingPrice: '৳2,500',
    urgency: 'HIGH',
    viewAngle: { rx: 56, rz: -28 },
  },
  {
    id: 'engine-efi',
    name: 'Engine EFI & Combustion Diagnostic',
    category: 'Powertrain Calibration',
    icon: Gauge,
    position: { x: 50, y: 22, z: 38 },
    symptoms: [
      'Check Engine MIL lamp illuminated',
      'Engine jerking or sluggish acceleration',
      'Rough idle vibration at traffic stops',
      'Drop in fuel economy (km/L)',
    ],
    workshopFix: 'OBD-II Japanese diagnostic live sensor stream scan, spark plug & ignition coil test, ultrasonic fuel injector & throttle body overhaul.',
    timeEstimate: '1.5 – 2 Hours',
    startingPrice: '৳1,500',
    urgency: 'HIGH',
    viewAngle: { rx: 50, rz: -12 },
  },
  {
    id: 'brakes-abs',
    name: 'Brake Rotors, Pads & ABS Electronics',
    category: 'Safety & Braking',
    icon: Disc,
    position: { x: 20, y: 35, z: 22 },
    symptoms: [
      'High-pitched squealing when stopping',
      'Steering vibration when braking from 60+ km/h',
      'Spongy or low brake pedal feel',
      'ABS warning light activated',
    ],
    workshopFix: 'Micrometer disc rotor run-out measurement, precision on-car rotor skimming, ceramic low-dust pad installation, and ABS bleed.',
    timeEstimate: '1 Hour',
    startingPrice: '৳1,200',
    urgency: 'HIGH',
    viewAngle: { rx: 44, rz: -35 },
  },
  {
    id: 'ac-climate',
    name: 'AC Cooling, Compressor & Evaporator',
    category: 'Cabin Climate Control',
    icon: Wind,
    position: { x: 74, y: 36, z: 28 },
    symptoms: [
      'Blowing warm air during Dhaka traffic jams',
      'Foul musty odor when AC starts',
      'Whistling or hissing noise behind dashboard',
      'Compressor clicking repeatedly without cooling',
    ],
    workshopFix: 'High/low pressure diagnostic, digital nitrogen leak detection, R134a/R1234yf vacuum recharge, and anti-bacterial evaporator core flush.',
    timeEstimate: '1 – 2 Hours',
    startingPrice: '৳1,800',
    urgency: 'MEDIUM',
    viewAngle: { rx: 48, rz: 18 },
  },
  {
    id: 'suspension-alignment',
    name: '3D Laser Suspension & Wheel Alignment',
    category: 'Chassis & Geometry',
    icon: Compass,
    position: { x: 80, y: 70, z: 20 },
    symptoms: [
      'Vehicle pulls to the left or right on straight roads',
      'Uneven tire tread wear on inside edges',
      'Thumping sound over speed breakers & potholes',
      'Off-center steering wheel position',
    ],
    workshopFix: 'Computerized 3D high-resolution laser alignment, camber/caster/toe correction to OEM factory specs, ball joint & bushing renewal.',
    timeEstimate: '45 Mins',
    startingPrice: '৳1,200',
    urgency: 'RECOMMENDED',
    viewAngle: { rx: 52, rz: 25 },
  },
  {
    id: 'dent-paint',
    name: 'Baking Booth Paint & Dent Restoration',
    category: 'Exterior & Bodywork',
    icon: Sparkles,
    position: { x: 30, y: 55, z: 30 },
    symptoms: [
      'Bumper scratches and fender scrapes',
      'Door dings and deep metal creases',
      'Faded clear-coat or mismatched panel paint',
      'Stone chips and swirl marks',
    ],
    workshopFix: 'Hydraulic panel pulling, paintless dent repair (PDR), computerized spectrophotometer color mixing, and dust-free heated baking booth cure.',
    timeEstimate: '24 – 48 Hours',
    startingPrice: '৳2,000 / Panel',
    urgency: 'RECOMMENDED',
    viewAngle: { rx: 46, rz: -20 },
  },
];

interface CarInspector3DProps {
  onBookService?: (serviceName: string) => void;
}

export default function CarInspector3D({ onBookService }: CarInspector3DProps) {
  const [activeId, setActiveId] = useState<string>('hybrid-battery');
  const [vehicleMode, setVehicleMode] = useState<'hybrid' | 'petrol'>('hybrid');
  const containerRef = useRef<HTMLDivElement>(null);

  const activeHotspot = hotspots.find(h => h.id === activeId) || hotspots[0];

  // Mouse physics for natural 3D rotational tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 26 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Dynamic 3D rotation angles combining active viewpoint and mouse tilt
  const dynamicRX = useTransform(smoothY, [-0.5, 0.5], [activeHotspot.viewAngle.rx + 8, activeHotspot.viewAngle.rx - 8]);
  const dynamicRZ = useTransform(smoothX, [-0.5, 0.5], [activeHotspot.viewAngle.rz - 10, activeHotspot.viewAngle.rz + 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSelectHotspot = (id: string) => {
    setActiveId(id);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-20 md:py-28 px-4 md:px-8 bg-[#070707] text-white overflow-hidden border-y border-white/10">
      {/* Background ambient crimson glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header with Relatable Value */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/20 bg-white/5 mb-4 text-[11px] font-mono uppercase tracking-[0.25em] text-brand-red rounded-full">
          <Eye size={13} className="text-brand-red" />
          <span>Interactive 3D Diagnostic &amp; Issue Inspector</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          CLICK ANY CAR PART TO <br />
          <span className="text-brand-red">DIAGNOSE ISSUES &amp; GET ESTIMATES</span>
        </h2>

        <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Select any zone on our 3D interactive vehicle to discover common symptoms, certified workshop repair methods, transparent pricing, and instant booking.
        </p>

        {/* Vehicle Mode Switcher */}
        <div className="inline-flex items-center gap-1.5 p-1 bg-white/5 border border-white/15 rounded-xl mt-6">
          <button
            onClick={() => setVehicleMode('hybrid')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              vehicleMode === 'hybrid'
                ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(238,63,44,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Hybrid Vehicles (Prius / Aqua / Axio / Vezel)
          </button>
          <button
            onClick={() => setVehicleMode('petrol')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              vehicleMode === 'petrol'
                ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(238,63,44,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Conventional &amp; European Cars
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: 3D Interactive Car View (7 Cols) */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-7 relative min-h-[460px] sm:min-h-[520px] md:min-h-[580px] w-full border border-white/15 rounded-2xl bg-gradient-to-b from-white/[0.05] via-black/80 to-black/95 p-4 sm:p-6 overflow-hidden flex flex-col justify-between cursor-grab active:cursor-grabbing shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          style={{ perspective: '1100px' }}
        >
          {/* Top Info Bar inside 3D canvas */}
          <div className="relative z-30 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-300 font-bold uppercase">3D Stage: Active</span>
            </div>
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest hidden sm:block">
              Move Cursor to Orbit in 3D
            </div>
          </div>

          {/* Perspective 3D Car Assembly Canvas */}
          <div className="relative flex-1 flex items-center justify-center my-auto [transform-style:preserve-3d]">
            {/* Subtle Circular Laser Alignment Floor Ground */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40"
              style={{
                transform: 'perspective(600px) rotateX(60deg) scale(1.6)',
              }}
            >
              <div className="w-[420px] h-[420px] rounded-full border border-white/20 border-dashed" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-brand-red/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[180px] h-[180px] rounded-full border border-white/10" />
            </div>

            {/* Realistic 3D Perspective Vehicle Mockup */}
            <motion.div
              style={{
                rotateX: dynamicRX,
                rotateZ: dynamicRZ,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[1/1.8] transition-transform duration-150 ease-out flex items-center justify-center"
            >
              {/* Drop Shadow Underbody */}
              <div className="absolute inset-x-4 bottom-2 h-16 bg-black/90 blur-xl rounded-full [transform:translateZ(-20px)] pointer-events-none" />

              {/* Main Vehicle Exterior Body Shell */}
              <div className="relative w-full h-full rounded-[44px] bg-gradient-to-b from-[#1c1c1c] via-[#0d0d0d] to-[#141414] border-2 border-white/20 shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.9)] flex flex-col justify-between p-4 overflow-hidden [transform-style:preserve-3d]">
                
                {/* Hood & Engine Bay (Front) */}
                <div className="relative w-full h-[28%] rounded-[32px] bg-gradient-to-b from-black/80 to-[#181818] border border-white/10 p-3 flex flex-col justify-between overflow-hidden">
                  {/* Headlights */}
                  <div className="flex justify-between items-center px-2">
                    <div className="w-8 h-3 bg-cyan-400/80 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                    <div className="w-12 h-2 bg-white/20 rounded-full" />
                    <div className="w-8 h-3 bg-cyan-400/80 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                  </div>
                  {/* Engine Valve Cover Accent */}
                  <div className="mx-auto w-24 h-8 bg-brand-red/20 border border-brand-red/50 rounded-lg flex items-center justify-center">
                    <span className="text-[8px] font-mono font-bold tracking-widest text-brand-red">EFI / HYBRID</span>
                  </div>
                </div>

                {/* Windshield & Cabin Glass Roof */}
                <div className="relative w-full h-[40%] rounded-2xl bg-gradient-to-b from-cyan-950/40 via-black/90 to-cyan-950/30 border border-cyan-500/20 p-3 flex flex-col justify-center items-center shadow-inner">
                  {/* Interior Seats & Dashboard Silhouette */}
                  <div className="w-full flex justify-around opacity-40">
                    <div className="w-10 h-12 bg-white/20 rounded-t-lg" />
                    <div className="w-10 h-12 bg-white/20 rounded-t-lg" />
                  </div>
                  <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/40 mt-1">
                    DUAL CLIMATE CABIN
                  </span>
                </div>

                {/* Trunk, High-Voltage Battery & Taillights (Rear) */}
                <div className="relative w-full h-[26%] rounded-[28px] bg-gradient-to-b from-[#181818] to-black border border-white/10 p-3 flex flex-col justify-between">
                  {/* Hybrid Battery Module Deck */}
                  <div className="w-full h-8 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center gap-1">
                    <Zap size={11} className="text-amber-400" />
                    <span className="text-[8px] font-mono font-bold text-amber-300 tracking-wider">
                      {vehicleMode === 'hybrid' ? 'HV BATTERY MODULES' : 'REAR AXLE / FUEL'}
                    </span>
                  </div>
                  {/* Taillights */}
                  <div className="flex justify-between items-center px-2">
                    <div className="w-10 h-2.5 bg-brand-red rounded-full shadow-[0_0_12px_rgba(238,63,44,0.9)]" />
                    <div className="w-10 h-2.5 bg-brand-red rounded-full shadow-[0_0_12px_rgba(238,63,44,0.9)]" />
                  </div>
                </div>
              </div>

              {/* 4 Alloy Wheels with 3D Offset */}
              {/* Front Left */}
              <div className="absolute -left-4 top-[18%] w-5 h-16 bg-[#1a1a1a] border-2 border-white/30 rounded-md shadow-lg [transform:translateZ(10px)]" />
              {/* Front Right */}
              <div className="absolute -right-4 top-[18%] w-5 h-16 bg-[#1a1a1a] border-2 border-white/30 rounded-md shadow-lg [transform:translateZ(10px)]" />
              {/* Rear Left */}
              <div className="absolute -left-4 bottom-[16%] w-5 h-16 bg-[#1a1a1a] border-2 border-white/30 rounded-md shadow-lg [transform:translateZ(10px)]" />
              {/* Rear Right */}
              <div className="absolute -right-4 bottom-[16%] w-5 h-16 bg-[#1a1a1a] border-2 border-white/30 rounded-md shadow-lg [transform:translateZ(10px)]" />

              {/* Interactive 3D Hotspot Pins Floating in Space */}
              {hotspots.map((spot) => {
                const isSelected = activeId === spot.id;
                const Icon = spot.icon;

                return (
                  <div
                    key={spot.id}
                    onClick={() => handleSelectHotspot(spot.id)}
                    style={{
                      left: `${spot.position.x}%`,
                      top: `${spot.position.y}%`,
                      transform: `translate(-50%, -50%) translateZ(${isSelected ? spot.position.z + 24 : spot.position.z}px)`,
                      transformStyle: 'preserve-3d',
                    }}
                    className="absolute cursor-pointer z-30 group"
                  >
                    {/* Pulsing Hotspot Disc */}
                    <div
                      className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-brand-red text-white scale-125 shadow-[0_0_25px_rgba(238,63,44,0.95)]'
                          : 'bg-black/90 border border-white/40 text-white/90 hover:scale-115 hover:border-brand-red hover:text-white'
                      }`}
                    >
                      <Icon size={15} />
                      {isSelected && (
                        <span className="absolute inset-0 rounded-full border-2 border-brand-red animate-ping opacity-75" />
                      )}
                    </div>

                    {/* Floating Label in 3D */}
                    <div
                      style={{ transform: 'translateZ(16px)' }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider transition-all pointer-events-none ${
                        isSelected
                          ? 'bg-brand-red text-white shadow-lg border border-red-400'
                          : 'bg-black/85 text-white/80 border border-white/10 opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {spot.name.split('&')[0]}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Quick Angle Reset / Viewpoint Switchers at Bottom of Canvas */}
          <div className="relative z-30 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <RotateCw size={12} className="text-brand-red" />
              <span>Inspection Viewpoints:</span>
            </span>

            <div className="flex flex-wrap gap-1.5">
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => handleSelectHotspot(spot.id)}
                  className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
                    activeId === spot.id
                      ? 'bg-brand-red text-white font-bold'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {spot.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Practical Diagnostic Card, Pricing & Booking Action (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHotspot.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="border border-white/15 bg-white/5 p-6 rounded-2xl relative overflow-hidden backdrop-blur-md shadow-2xl flex flex-col justify-between flex-1"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />

              <div>
                {/* Header Kicker */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-red">
                    {activeHotspot.category}
                  </span>
                  <div className={`flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                    activeHotspot.urgency === 'HIGH'
                      ? 'bg-rose-950/80 border border-rose-500/40 text-rose-300'
                      : 'bg-amber-950/80 border border-amber-500/40 text-amber-300'
                  }`}>
                    <AlertTriangle size={11} />
                    <span>PRIORITY // {activeHotspot.urgency}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                  {activeHotspot.name}
                </h3>

                {/* Common Symptoms Checklist */}
                <div className="my-4 p-3.5 rounded-xl bg-black/50 border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold block mb-2">
                    Common Symptoms Experienced By Drivers:
                  </span>
                  <ul className="space-y-1.5">
                    {activeHotspot.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-1.5" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Workshop Fix */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5 mb-1">
                    <BadgeCheck size={13} className="text-emerald-400" />
                    <span>iWorksBD Certified Workshop Procedure:</span>
                  </span>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {activeHotspot.workshopFix}
                  </p>
                </div>
              </div>

              {/* Estimate & 1-Click Booking Section */}
              <div className="pt-4 border-t border-white/15 mt-auto">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-black/60 p-3 rounded-xl border border-white/10">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-0.5">
                      <Clock size={11} className="text-brand-red" />
                      <span>Est. Turnaround</span>
                    </div>
                    <span className="text-sm font-black font-mono text-white">{activeHotspot.timeEstimate}</span>
                  </div>

                  <div className="bg-black/60 p-3 rounded-xl border border-white/10">
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-0.5">
                      Service Starting At
                    </div>
                    <span className="text-base font-black font-mono text-brand-red">{activeHotspot.startingPrice}</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => {
                      if (onBookService) {
                        onBookService(activeHotspot.name);
                      }
                    }}
                    className="flex-1 py-3 px-4 bg-brand-red hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(238,63,44,0.4)] clip-diagonal cursor-pointer"
                  >
                    <span>Book This Inspection</span>
                    <ChevronRight size={15} />
                  </button>

                  <a
                    href="tel:+8801755652303"
                    className="py-3 px-4 border border-white/20 hover:border-brand-red bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 clip-diagonal cursor-pointer"
                    title="Direct Call to Workshop"
                  >
                    <Phone size={13} className="text-brand-red" />
                    <span>Call Hotline</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
