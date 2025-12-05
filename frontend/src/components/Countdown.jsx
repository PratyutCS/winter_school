import React, { useEffect, useState } from 'react';
import CountdownUnit from './CountdownUnit'; // Import the new component

export default function Countdown({ targetDate, onComplete }) {
  const [left, setLeft] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const t = setInterval(() => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) {
        clearInterval(t);
        setLeft({ days: 0, hrs: 0, mins: 0, secs: 0 });
        if (onComplete) onComplete();
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

  return (
    <div className="flex gap-1 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 justify-center mt-4 sm:mt-6 md:mt-8">
      <CountdownUnit value={left.days} label="Days" />
      <CountdownUnit value={left.hrs} label="Hours" />
      <CountdownUnit value={left.mins} label="Minutes" />
      <CountdownUnit value={left.secs} label="Seconds" />
    </div>
  );
};