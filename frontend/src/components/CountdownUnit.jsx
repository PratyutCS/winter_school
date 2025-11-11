import React from 'react'; // No useState, useEffect needed for animation

const CountdownUnit = ({ value, label }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center 
                 min-w-[90px] sm:min-w-[120px] md:min-w-[150px] h-[100px] sm:h-[120px] md:h-[150px]
                 rounded-2xl backdrop-blur-xl border border-white/20 
                 bg-gradient-to-br from-[#7c3aed]/60 to-[#ec4899]/60 
                 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl
                 overflow-hidden`}
    >
      <div className="absolute inset-0 flex items-center justify-center"> {/* Container for the number */}
        <div className={`text-4xl sm:text-6xl md:text-8xl font-extrabold text-white 
                       tracking-tight drop-shadow-lg`}>
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="absolute bottom-2 text-sm sm:text-base md:text-lg uppercase text-white/90 font-medium">
        {label}
      </div>
    </div>
  );
};

export default CountdownUnit;

