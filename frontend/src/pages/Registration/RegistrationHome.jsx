import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../../components/GlowingBox';

export default function RegistrationHome() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto mt-8">
          {/* Main Registration Card */}
          <GlowingBox
            className="p-8 md:p-12
                       transition-all duration-500 mb-8"
            data-aos="fade-up"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#2e2a30] text-center">
                Invite-Only
              </h2>

              <p className="text-lg text-[#2e2a30]/80 leading-relaxed text-justify">
                Crypto Winter School 2025 will be an invite-only event. Only participants who receive an invitation through email shall be allowed to register for the event.
              </p>

              <div>
                <h3 className="text-2xl font-bold text-[#2e2a30] mb-4">Participation Benefits</h3>
                <ul className="space-y-4 text-[#2e2a30]/80">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#7c3aed] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h10a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                    <div><strong>No Participation Fee:</strong> Participation in CWS 2025 is completely free of charge for selected applicants.</div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#7c3aed] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16" /><path stroke-linecap="round" stroke-linejoin="round" d="M8 20h-5a1 1 0 01-1-1V5a1 1 0 011-1h5" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 8h9" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 12h9" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 16h9" /></svg>
                    <div><strong>Accommodation:</strong> Complimentary accommodation will be provided to all selected participants within the IIT Bhilai campus.</div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#7c3aed] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    <div><strong>Travel Reimbursement:</strong> Students are eligible for travel expense reimbursement up to 3rd AC train fare or equivalent, as per institute norms.</div>
                  </li>
                </ul>
              </div>
            </div>
          </GlowingBox>

          {/* Important Information */}
          <div
            className="grid md:grid-cols-1 gap-6 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <GlowingBox className="p-6 hover:bg-white/30 transition-all duration-300 w-fit mx-auto text-center">
              <h3 className="text-xl font-bold text-[#2e2a30] mb-3">Winter School Dates</h3>
              <p className="text-[#2e2a30]/80">December 09–12, 2025</p>
              <p className="text-sm text-[#2e2a30]/60 mt-2">
                Four days of intensive learning and collaboration
              </p>
            </GlowingBox>
          </div>

          {/* Code of Conduct Link */}
          <div
            className="text-center mt-8 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link
              to="/registration/code-of-conduct"
              className="inline-block px-12 py-4 rounded-full font-bold text-lg text-white
                         bg-[#2e2a30] border border-[#2e2a30] shadow-glow-medium
                         transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-glow-strong
                         hover:-translate-y-1 active:scale-95"
            >
              View Code of Conduct
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
