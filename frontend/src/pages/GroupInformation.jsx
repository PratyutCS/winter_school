import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

const GroupInformation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const groups = [
    { id: 1, topic: "Searchable Encryption", leaders: "Laltu Sardar & Subhabrata Samajder & Avik Chakraborti" },
    { id: 2, topic: "Post-Quantum Cryptography and Digital Signatures", leaders: "R Kabaleeshwaran & Sabhasachi Karati" },
    { id: 3, topic: "Key Recovery Attack in Differential Cryptanalysis", leaders: "Shibam Ghosh & Anup Kumar Kundu" },
    { id: 4, topic: "Symmetric Key Cryptanalysis", leaders: "Mostafizar Rahman & Dilip Kumar Sau" },
    { id: 5, topic: "Applications of Fully Homomorphic Encryption", leaders: "Angshuman Karmakar & Srinivas Vivek" },
    { id: 6, topic: "Hardware Security / Implementation", leaders: "Subidh Ali" },
    { id: 7, topic: "Multi-Party Computation", leaders: "Satrajit Ghosh & Subhradeep (VISA Research)" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-[140px] px-4 md:px-8 pb-12">
      <main className="flex-grow flex items-center justify-center w-full">
        <GlowingBox className="w-full max-w-7xl p-6 md:p-10" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold text-[#2e2a30] mb-10 text-center">Groups</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-[#2e2a30]/5 rounded-xl p-6 border border-[#2e2a30]/10 hover:border-[#2e2a30]/30 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,0,0,0.8)] hover:scale-105 hover:-translate-y-2 flex flex-col h-full transform"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2e2a30]/10">
                  <span className="text-sm font-bold text-[#2e2a30]/60 uppercase tracking-wider">Group {group.id}</span>
                </div>

                <div className="mb-4 flex-grow">
                  <h3 className="text-lg font-bold text-[#2e2a30] leading-tight mb-2">
                    {group.topic}
                  </h3>
                </div>

                {/* <div className="mt-auto pt-3">
                  <p className="text-sm text-[#2e2a30]/80 font-medium">
                    <span className="block text-xs text-[#2e2a30]/50 mb-1 uppercase tracking-wide">Leaders</span>
                    {group.leaders}
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </GlowingBox>
      </main>
    </div>
  );
};

export default GroupInformation;