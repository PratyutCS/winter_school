import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

// Sponsor images
import dstLogo from '../../assets/sponsors/dst.png';
import iitBhilaiLogo from '../../assets/sponsors/iitbhilai.png';
import placeholderLogo from '../../assets/logo.png';

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
    { name: 'IITM CDOT Samgnya Technologies Foundation', logo: placeholderLogo, link: 'https://samgnya.in/' },
    { name: 'DST (Department of Science and Technology)', logo: dstLogo, link: '#' },
    { name: 'CRSI (Cryptology Research Society of India)', logo: placeholderLogo, link: 'https://crsind.in' },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto mt-8">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8">Organizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
            {organizers.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
                className="block transition-all duration-300 scale-105"
              >
                <GlowingBox className="p-6 h-full flex flex-col justify-between items-center shadow-glow-strong">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-24 object-contain mb-4"
                    />
                    <h3 className="text-lg font-semibold text-[#7c3aed] transition-colors duration-300">
                      {sponsor.name}
                    </h3>
                  </div>
                </GlowingBox>
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8">Sponsors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
                className="block transition-all duration-300 scale-105"
              >
                <GlowingBox className="p-6 h-full flex flex-col justify-between items-center shadow-glow-strong">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-24 object-contain mb-4"
                    />
                    <h3 className="text-lg font-semibold text-[#7c3aed] transition-colors duration-300">
                      {sponsor.name}
                    </h3>
                  </div>
                </GlowingBox>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}