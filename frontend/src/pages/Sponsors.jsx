import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

// Sponsor images
import dstLogo from '../../assets/sponsors/dst.png';
import iitBhilaiLogo from '../../assets/sponsors/IIT_B.svg';
import samgnyaLogo from '../../assets/sponsors/samgnya.jpeg';
import nqmLogo from '../../assets/sponsors/nqm.png';
import placeholderLogo from '../../assets/sponsors/crsi.png';

export default function Sponsors() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const organizers = [
    { name: 'CSE Department, IIT Bhilai', logo: iitBhilaiLogo, link: 'https://www.iitbhilai.ac.in/index.php?pid=cse_home' },
  ];

  const sponsors = [
    { name: 'IITM CDOT Samgnya Technologies Foundation', logo: samgnyaLogo, link: 'https://samgnya.in/' },
    { name: 'National Quantum Mission', logo: nqmLogo, link: 'https://dst.gov.in/national-quantum-mission-nqm' },
    { name: 'CRSI (Cryptology Research Society of India)', logo: placeholderLogo, link: 'https://crsind.in' },
    { name: 'IIT Bhilai', logo: iitBhilaiLogo, link: 'https://www.iitbhilai.ac.in/' },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-[40px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto mt-16">
          {/* Glassmorphism background container for all sponsors */}
          <div
            className="relative p-8 md:p-12 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              boxShadow: `
                0 0 40px rgba(128, 0, 128, 0.4),
                0 0 80px rgba(128, 0, 128, 0.3),
                0 0 120px rgba(128, 0, 128, 0.2)
              `,
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                  className="flex flex-col items-center transition-all duration-300 hover:scale-110"
                >
                  <a
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <GlowingBox className="w-64 h-64 p-0 flex justify-center items-center shadow-glow-medium hover:shadow-glow-strong !bg-white !backdrop-blur-none rounded-full overflow-hidden transition-all duration-300 hover:scale-110">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-full w-full object-contain"
                      />
                    </GlowingBox>
                  </a>
                  <div className="text-center mt-4 text-lg font-semibold text-black">{sponsor.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}