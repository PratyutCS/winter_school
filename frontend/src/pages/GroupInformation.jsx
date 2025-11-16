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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-[140px] px-4 md:px-8 pb-12">
      <main className="flex-grow flex items-center justify-center w-full">
        <GlowingBox className="w-full max-w-2xl p-8 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-[#2e2a30] mb-4">Group Information</h1>
          <p className="text-lg text-[#2e2a30]/80">
            Group Information will be updated soon
          </p>
        </GlowingBox>
      </main>
    </div>
  );
};

export default GroupInformation;