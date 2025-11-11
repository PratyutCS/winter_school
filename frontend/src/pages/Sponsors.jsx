import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

// Sponsor images
import dstLogo from '../../assets/sponsors/dst.png';
import ibitfLogo from '../../assets/sponsors/ibitf.png';
import iitBhilaiLogo from '../../assets/sponsors/iitbhilai.png';
import meityLogo from '../../assets/sponsors/meity.png';

export default function Sponsors() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const sponsors = [
    { name: 'DST (Department of Science and Technology)', logo: dstLogo, link: '#' },
    { name: 'IBITF (IIT Bhilai Innovation and Technology Foundation)', logo: ibitfLogo, link: '#' },
    { name: 'IIT Bhilai', logo: iitBhilaiLogo, link: 'https://www.iitbhilai.ac.in/' },
    { name: 'MeitY (Ministry of Electronics and Information Technology)', logo: meityLogo, link: '#' },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
                <div className="max-w-4xl mx-auto mt-8">
                  <GlowingBox className="p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {sponsors.map((sponsor, index) => (
                        <a
                          key={index}
                          href={sponsor.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-aos="fade-up"
                          data-aos-delay={100 + index * 100}
                          className="group block transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                          <GlowingBox className="p-6">
                            <div className="flex flex-col items-center text-center">
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-24 object-contain mb-4"
                              />
                              <h3 className="text-lg font-semibold text-[#2e2a30] group-hover:text-[#7c3aed] transition-colors duration-300">
                                {sponsor.name}
                              </h3>
                            </div>
                          </GlowingBox>
                        </a>
                      ))}
                    </div>
                  </GlowingBox>
                </div>      </main>
    </div>
  );
}
