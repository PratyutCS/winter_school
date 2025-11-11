import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import GlowingBox from '../components/GlowingBox';

export default function SubmissionOfPoster() {
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
          <GlowingBox className="mb-16 p-6 sm:p-8 md:p-10" data-aos="fade-up">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-6">
              Call for Posters
            </h1>
            <div className="space-y-6 text-[#2e2a30]/90 text-base leading-relaxed text-justify">
              <p>
                We are pleased to invite poster submissions from academic institutions, research groups, and industry organizations across India for the National Workshop on Cryptology (NWC 2025). This is a unique opportunity to showcase your latest research, innovative projects, and significant contributions in the field of cryptology. Posters should reflect current and futuristic advancements in applied cryptography and will be exhibited throughout the workshop, offering a platform for engaging with a diverse audience of experts and peers.
              </p>
              <p>
                To participate, please email the title and a brief description of your poster to <a href="mailto:decipheredlab@iitbhilai.ac.in" className="text-[#7c3aed] font-semibold hover:underline">decipheredlab@iitbhilai.ac.in</a> with the subject line "Poster Submission for NWC 2025" by November 30, 2025. Authors are responsible for printing and bringing their A0-sized posters to the workshop venue. At least one author must be present to discuss the work during designated poster sessions. We look forward to your valuable contributions.
              </p>
            </div>
          </GlowingBox>
        </div>
      </main>
      <Footer />
    </div>
  );
}