import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-white/20 backdrop-blur-xl glowing-border-light">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-[#2e2a30]">Crypto Winter School 2025</h2>
          <p className="text-lg text-[#2e2a30]/70">
            A premier event dedicated to advancing the fields of cryptography and information security.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#2e2a30]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className={`text-[#2e2a30]/70 hover:text-[#7c3aed] transition-colors duration-300 ${location.pathname === '/' ? 'text-[#7c3aed]' : ''}`}>Home</Link></li>
              <li><Link to="/program" className={`text-[#2e2a30]/70 hover:text-[#7c3aed] transition-colors duration-300 ${location.pathname === '/program' ? 'text-[#7c3aed]' : ''}`}>Program</Link></li>
              <li><Link to="/organising-committee" className={`text-[#2e2a30]/70 hover:text-[#7c3aed] transition-colors duration-300 ${location.pathname === '/organising-committee' ? 'text-[#7c3aed]' : ''}`}>Organising Committee</Link></li>
              <li><Link to="/registration" className={`text-[#2e2a30]/70 hover:text-[#7c3aed] transition-colors duration-300 ${location.pathname === '/registration' ? 'text-[#7c3aed]' : ''}`}>Registration</Link></li>
              <li><Link to="/travel/venue" className={`text-[#2e2a30]/70 hover:text-[#7c3aed] transition-colors duration-300 ${location.pathname === '/travel/venue' ? 'text-[#7c3aed]' : ''}`}>Venue</Link></li>
              <li><Link to="/sponsors" className={`text-[#2e2a30]/70 hover:text-[#7c3aed] transition-colors duration-300 ${location.pathname === '/sponsors' ? 'text-[#7c3aed]' : ''}`}>Sponsors</Link></li>
              <li><Link to="/group-information" className={`text-[#2e2a30]/70 hover:text-[#7c3aed] transition-colors duration-300 ${location.pathname === '/group-information' ? 'text-[#7c3aed]' : ''}`}>Group Information</Link></li>
              <li><Link to="/photostream" className={`text-[#2e2a30]/70 hover:text-[#7c3aed] transition-colors duration-300 ${location.pathname === '/photostream' ? 'text-[#7c3aed]' : ''}`}>Photostream</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#2e2a30]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-[#2e2a30]/70">
                <Mail className="w-5 h-5 mr-2 text-[#7c3aed]" />
                <a href="mailto:decipheredlab@iitbhilai.ac.in" className="hover:text-[#7c3aed] transition-colors duration-300">decipheredlab@iitbhilai.ac.in</a>
              </li>
              <li className="flex items-center text-[#2e2a30]/70">
                <Mail className="w-5 h-5 mr-2 text-[#7c3aed]" />
                <a href="mailto:crypto@iitbhilai.ac.in" className="hover:text-[#7c3aed] transition-colors duration-300">crypto@iitbhilai.ac.in</a>
              </li>
              {/* <li className="flex items-center text-[#2e2a30]/70">
                <Phone className="w-5 h-5 mr-2 text-[#7c3aed]" />
                +91-XXX-XXXXXXX
              </li> */}
              <li className="flex items-center text-[#2e2a30]/70">
                <MapPin className="w-5 h-5 mr-2 text-[#7c3aed]" />
                <Link to="/travel/venue" className="hover:text-[#7c3aed] transition-colors duration-300">IIT Bhilai, Chhattisgarh, India</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-[#2e2a30]/70">
            © 2025 Crypto Winter School ·
            <a
              href="https://www.iitbhilai.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7c3aed] hover:text-[#2e2a30] transition-colors duration-300 ml-1"
            >
              IIT Bhilai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
