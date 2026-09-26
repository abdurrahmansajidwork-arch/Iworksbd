import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight?: boolean;
}

const Word: React.FC<WordProps> = ({ children, progress, range, isHighlight }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, [
    'rgba(255, 255, 255, 0.22)',
    isHighlight ? '#EE3F2C' : 'rgba(255, 255, 255, 1)'
  ]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="relative inline-block mr-[0.28em] my-[0.08em] whitespace-nowrap">
      <motion.span
        style={{
          opacity,
          color,
          y,
        }}
        className={`inline-block transition-colors duration-150 ${
          isHighlight ? 'font-black drop-shadow-[0_0_15px_rgba(238,63,44,0.6)]' : ''
        }`}
      >
        {children}
      </motion.span>
    </span>
  );
};

interface ScrollTextHighlightProps {
  text: string;
  highlightWords?: string[];
  className?: string;
  wordClassName?: string;
}

export default function ScrollTextHighlight({
  text,
  highlightWords = [],
  className = '',
}: ScrollTextHighlightProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');
  const normalizedHighlights = highlightWords.map(w => w.toLowerCase().replace(/[^a-z0-9]/g, ''));

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap leading-tight tracking-tight select-none ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
        const isHighlight = normalizedHighlights.includes(cleanWord);

        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, Math.min(end + 0.05, 1)]}
            isHighlight={isHighlight}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}
