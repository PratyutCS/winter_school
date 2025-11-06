import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/Footer';

export default function RegistrationHome() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 md:px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2e2a30] mb-4">
            Registration
          </h1>
          <p className="text-xl text-[#2e2a30]/80">
            Secure your spot at the National Workshop on Cryptology 2025
          </p>
        </div>

        {/* Main Registration Card */}
        <div 
          className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-12 
                     shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]
                     transition-all duration-500 mb-8"
          data-aos="fade-up"
        >
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#2e2a30] mb-6">
              Register Now
            </h2>
            
            <p className="text-lg text-[#2e2a30]/80 leading-relaxed max-w-2xl mx-auto">
              Registration for the National Workshop on Cryptology 2025 is now open. 
              Fill out the registration form to confirm your participation in this premier educational event.
            </p>

            <div className="py-8">
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
            </div>

            <p className="text-sm text-[#2e2a30]/60 italic">
              You will be redirected to Google Forms
            </p>
          </div>
        </div>

        {/* Important Information */}
        <div 
          className="grid md:grid-cols-2 gap-6 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6
                        hover:bg-white/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#2e2a30] mb-3">Registration Deadline</h3>
            <p className="text-[#2e2a30]/80">December 10, 2025</p>
            <p className="text-sm text-[#2e2a30]/60 mt-2">Limited seats available, register early!</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6
                        hover:bg-white/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#2e2a30] mb-3">Workshop Dates</h3>
            <p className="text-[#2e2a30]/80">December 15-17, 2025</p>
            <p className="text-sm text-[#2e2a30]/60 mt-2">Three days of intensive learning</p>
          </div>
        </div>

        {/* Code of Conduct Link */}
        <div 
          className="text-center mt-8"
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
      
      <Footer />
    </div>
  );
}
