import { useState, useEffect } from 'react';

const items = [
  { emoji: '📍', text: 'based in India' },
  { emoji: '☕', text: 'coffee count today: lost track' },
  { emoji: '💡', text: 'current mood: shipping features' },
  { emoji: '🎧', text: 'listening to: lo-fi beats' },
  { emoji: '🔧', text: 'working on: this portfolio, ironically' },
];

const CurrentlyStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsVisible(true);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const item = items[currentIndex];

  return (
    <div className="py-6 px-4 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start">
        <div
          className={`flex items-center gap-2 text-xs tracking-wider transition-all duration-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="text-sm">{item.emoji}</span>
          <span className="text-white/20 font-mono uppercase">currently:</span>
          <span className="text-white/35 font-light">{item.text}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyStrip;
