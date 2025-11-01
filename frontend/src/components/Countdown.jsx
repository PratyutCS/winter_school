import React, { useEffect, useState } from 'react';

export default function Countdown({ targetDate }) {
  const [left, setLeft] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const t = setInterval(() => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) {
        clearInterval(t);
        setLeft({ days: 0, hrs: 0, mins: 0, secs: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setLeft({ days, hrs, mins, secs });
    }, 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  const items = [
    { k: 'days', v: left.days },
    { k: 'hrs', v: left.hrs },
    { k: 'mins', v: left.mins },
    { k: 'secs', v: left.secs },
  ];

  return (
    <div className="flex gap-6 justify-center mt-8">
      {items.map((it, i) => (
        <div
          key={it.k}
          className={`text-center px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/20 
                      shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform duration-300 
                      hover:scale-105 bg-gradient-to-br from-[#7c3aed]/30 to-[#ec4899]/30`}
        >
          <div className="text-6xl font-bold tracking-widest text-white drop-shadow-md animate-pulse">
            {String(it.v).padStart(2, '0')}
          </div>
          <div className="mt-2 text-sm uppercase text-white/80 tracking-wide font-medium">
            {it.k}
          </div>
        </div>
      ))}
    </div>
  );
}
