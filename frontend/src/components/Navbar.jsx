import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Program', path: '/program' },
    { label: 'Registration', path: '/registration' },
    { label: 'Venue', path: '/travel/venue' },
    { label: 'Sponsors', path: '/sponsors' },
    { label: 'Nearby Wonders', path: '/travel' },
  ];

  return (
    <nav className="max-w-7xl mx-auto my-2 px-3 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between md:justify-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center backdrop-blur-md bg-[#7c3aed]/20 rounded-[24px] w-full shadow-[0_8px_32px_0_rgba(124,58,237,0.3)] border border-[#7c3aed]/20 px-8 py-2">  
          <div className="flex flex-wrap items-center justify-center w-full gap-x-4 gap-y-2">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className={`relative group px-3 py-2.5 transition-all duration-300 animate-fade-in ${
                  location.pathname === link.path ? 'active-nav-link' : ''
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className={`relative z-10 font-medium text-[#2e2a30] text-sm tracking-wide
                               group-hover:text-[#7c3aed] transition-colors duration-300 ${
                                 location.pathname === link.path ? 'text-[#7c3aed]' : ''
                               }`}>
                  {link.label}
                </span>
                <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r
                               from-[#7c3aed] to-[#ec4899] rounded-full
                               transition-all duration-300 group-hover:w-full ${
                                 location.pathname === link.path ? 'w-full' : ''
                               }`}></span>
                <span className={`absolute inset-0 -z-10 rounded-xl opacity-0
                               group-hover:opacity-100 transition-opacity duration-300
                               bg-[#7c3aed]/10 backdrop-blur-sm ${
                                 location.pathname === link.path ? 'opacity-100' : ''
                               }`}></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden ml-auto">
          <button
            className="backdrop-blur-md bg-[#7c3aed]/20
                     shadow-[0_8px_32px_0_rgba(124,58,237,0.3)]
                     border border-[#7c3aed]/20 rounded-xl p-2
                     transition-all duration-300
                     hover:bg-[#7c3aed]/30 active:scale-95 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <span className={`text-[#2e2a30] text-xl transition-transform duration-300
                            block ${open ? '✕' : '☰'}`}>
              {open ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="absolute right-0 top-full mt-2 w-64 md:hidden
                        backdrop-blur-md bg-[#7c3aed]/20 rounded-2xl
                        shadow-[0_8px_32px_0_rgba(124,58,237,0.3)]
                        border border-[#7c3aed]/20 overflow-hidden
                        animate-slide-up z-50">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className={`block py-3 px-6 text-[#2e2a30] hover:text-[#7c3aed]
                         hover:bg-[#7c3aed]/10 transition-all duration-300
                         border-b border-[#7c3aed]/10 last:border-none
                         text-sm font-medium animate-fade-in ${
                           location.pathname === link.path ? 'text-[#7c3aed] bg-[#7c3aed]/10' : ''
                         }`}
                style={{ animationDelay: `${i * 50}ms` }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
