import React from 'react';
import logo from '../../assets/logo.png';
import decipheredLogo from '../../assets/deciphered_logo.jpg';
import iitBhilaiLogo from '../../assets/IIT_Bhilai_Logo.svg';

export default function Header() {
  return (
    <header className="w-full bg-[#a5b4fc] border-b border-[#2e2a30]/20 shadow-sm">
      {/* Logo + Title + Right Logos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 lg:py-2.5 flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Main Logo + Title */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <a 
            href="https://crsind.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logo}
              alt="Workshop Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain cursor-pointer"
            />
          </a>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold tracking-wide sm:tracking-wider leading-tight">
            <span className="text-white" style={{ textShadow: '0.5px 0.5px 0 rgba(0,0,0,0.3), -0.5px -0.5px 0 rgba(0,0,0,0.3)' }}>National Workshop on Cryptology(NWC) </span>
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">2025</span>
          </h1>
        </div>

        {/* Right: Partner/Sponsor Logos */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Deciphered Logo */}
          <a 
            href="http://de.ci.phe.red/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-white/70 transition-all duration-300 hover:scale-110 shadow-md p-1"
          >
            <img 
              src={decipheredLogo} 
              alt="Deciphered Logo" 
              className="w-full h-full object-contain rounded-full cursor-pointer"
            />
          </a>
          
          {/* IIT Bhilai Logo */}
          <a 
            href="https://www.iitbhilai.ac.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-white/70 transition-all duration-300 hover:scale-110 shadow-md p-1"
          >
            <img 
              src={iitBhilaiLogo} 
              alt="IIT Bhilai Logo" 
              className="w-full h-full object-contain rounded-full cursor-pointer"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
