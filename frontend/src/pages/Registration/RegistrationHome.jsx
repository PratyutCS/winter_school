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
                Register Now
              </h2>

              <p className="text-lg text-[#2e2a30]/80 leading-relaxed text-justify">
                We are pleased to announce that registration for the National Workshop on Cryptology (NWC 2025) is now open. We invite all interested students, researchers, and professionals in the field of cryptology and information security to apply for this premier educational event.
              </p>

              <div>
                <h3 className="text-2xl font-bold text-[#2e2a30] mb-4">Registration Benefits</h3>
                <ul className="space-y-4 text-[#2e2a30]/80">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#7c3aed] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h10a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                    <div><strong>No Registration Fee:</strong> Participation in NWC 2025 is completely free of charge.</div>
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

              <div className="bg-white/20 rounded-2xl p-6 border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-[#2e2a30] mb-2">Important Note</h3>
                <p className="text-[#2e2a30]/80 leading-relaxed text-justify">
                  Please be advised that seats for the workshop are limited. Submission of the registration form does not guarantee participation. All applications will undergo a selection process, and confirmed participants will be notified via email. We encourage you to register early to secure your consideration.
                </p>
              </div>

              <div className="text-center pt-4">
                <a
                  href="https://forms.gle/RExqYDbqCN2fBJWE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-4 rounded-full font-bold text-lg text-white
                                   shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl
                                   hover:-translate-y-1 active:scale-95"
                  style={{ backgroundColor: '#2e2a30' }}
                >
                  Fill Registration Form
                </a>
                <p className="text-sm text-[#2e2a30]/60 italic mt-4">
                  You will be redirected to Google Forms
                </p>
              </div>
            </div>
          </GlowingBox>

          {/* Important Information */}
          <div
            className="grid md:grid-cols-2 gap-6 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <GlowingBox className="p-6 hover:bg-white/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#2e2a30] mb-3">Registration Deadline</h3>
              <p className="text-[#2e2a30]/80">December 10, 2025</p>
              <p className="text-sm text-[#2e2a30]/60 mt-2">Limited seats available, register early!</p>
            </GlowingBox>

            <GlowingBox className="p-6 hover:bg-white/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#2e2a30] mb-3">Workshop Dates</h3>
              <p className="text-[#2e2a30]/80">December 15-17, 2025</p>
              <p className="text-sm text-[#2e2a30]/60 mt-2">Three days of intensive learning</p>
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
              className="inline-block px-8 py-3 rounded-full border-2 border-[#2e2a30]/40
                       text-[#2e2a30] font-semibold hover:bg-[#2e2a30] hover:text-white
                       transition-all duration-300 hover:scale-105"
            >
              View Code of Conduct
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}