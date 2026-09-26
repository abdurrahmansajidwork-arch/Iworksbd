import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // max tilt degrees, default 12
  glareOpacity?: number; // default 0.15
  onClick?: () => void;
}

export default function Card3DTilt({
  children,
  className = '',
  intensity = 12,
  glareOpacity = 0.15,
  onClick,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates relative to card center (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Position for dynamic specular glare reflection (0% to 100%)
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // Physics springs for natural, weighted mechanical damping
  const springX = useSpring(mouseX, { stiffness: 320, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 320, damping: 24 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalizing between -0.5 and 0.5
    const normalizedX = x / width - 0.5;
    const normalizedY = y / height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);

    // Glare position in percent
    glareX.set((x / width) * 100);
    glareY.set((y / height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      style={{ perspective: '1100px' }}
      className="relative w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ scale: { duration: 0.25, ease: 'easeOut' } }}
        className={`relative w-full h-full transition-shadow duration-300 ${className}`}
      >
        {/* Dynamic Specular Glare Reflection Sheen */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-30 transition-opacity duration-300 overflow-hidden"
          style={{
            opacity: isHovered ? glareOpacity : 0,
            background: `radial-gradient(circle 320px at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 40%, transparent 80%)`,
          }}
        />

        {/* Card Content with 3D Depth capability */}
        <div className="relative w-full h-full [transform-style:preserve-3d]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
