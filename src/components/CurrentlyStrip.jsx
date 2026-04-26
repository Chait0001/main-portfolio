'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { emoji: '📍', text: 'based in India' },
  { emoji: '☕', text: 'coffee count today: lost track' },
  { emoji: '💡', text: 'current mood: shipping features' },
  { emoji: '🎧', text: 'listening to: lo-fi beats' },
  { emoji: '🔧', text: 'working on: this portfolio, ironically' },
];

const CurrentlyStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const item = items[currentIndex];

  return (
    <div className="py-6 px-4 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start overflow-hidden h-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs tracking-wider"
          >
            <span className="text-sm">{item.emoji}</span>
            <span className="text-white/20 font-mono uppercase">currently:</span>
            <span className="text-white/35 font-light">{item.text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CurrentlyStrip;

