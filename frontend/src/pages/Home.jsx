import GlowingBox from "../components/GlowingBox";
import { Link, useNavigate } from "react-router-dom";
import Countdown from "../components/Countdown";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Speaker images
import shimanImg from "../../assets/speakers/shiman.png";
import mostafizarImg from "../../assets/speakers/Mostafizar.jpg";
import angshumanImg from "../../assets/speakers/angshuman.jpg";
import satrajitImg from "../../assets/speakers/satrajit.jpg";
import sabyasachiImg from "../../assets/speakers/sabyacachi.jpg";
import avijitImg from "../../assets/speakers/avijit.jpg";
import avikImg from "../../assets/speakers/avik.jpg";
import mridulImg from "../../assets/speakers/mridul_nandi.jpg";
import souradyutiImg from "../../assets/logo.png";
import dhimanImg from "../../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      once: true,
      offset: 100,
      disable: window.innerWidth < 768
    });
  }, []);

  const speakers = [
    { name: "Prof. Mridul Nandi", expertise: "Provable Security", university: "ISI Kolkata", image: mridulImg },
    { name: "Dr. Souradyuti Paul", expertise: "Cryptographic Protocols", university: "IIT Bhilai", image: souradyutiImg },
    { name: "Dr. Angshuman Karmakar", expertise: "Post Quantum Cryptography", university: "IIT Kanpur", image: angshumanImg },
    { name: "Dr. Avik Chakraborti", expertise: "White Box Cryptography", university: "TCG Crest", image: avikImg },
    { name: "Dr. Satrajit Ghosh", expertise: "Multi-Party Computation", university: "IIT Kharagpur", image: satrajitImg },
    { name: "Dr. Sabyasachi Karati", expertise: "Public Key Cryptography", university: "ISI Kolkata", image: sabyasachiImg },
    { name: "Dr. Dhiman Saha", expertise: "Symmetric Key Cryptanalysis", university: "IIT Bhilai", image: dhimanImg },
    { name: "Dr. Avijit Dutta", expertise: "Provable Security", university: "TCG Crest", image: avijitImg },
    { name: "Dr. Mostafizar Rahman", expertise: "Symmetric Key Cryptanalysis", university: "NTU Singapore", image: mostafizarImg },
    { name: "Dr. Shibam Ghosh", expertise: "Symmetric Key Cryptanalysis", university: "INRIA", image: shimanImg },
  ];

  const focusAreas = [
    "Provable Security and Foundations of Cryptography",
    "Design and Implementation of Cryptographic Algorithms",
    "Symmetric-Key Cryptography and Cryptanalysis",
    "Fault Attacks on Quantum Safe Cryptography",
    "Post-Quantum Cryptography and Lattice-Based Constructions",
    "Quantum Symmetric Cryptology",
    "Privacy-Preserving Protocols",
    "Public-Key Cryptography and Zero-Knowledge Proofs",
    "Secure Multi-Party Computation and Homomorphic Encryption",
    "Quantum-Secure Communication Protocols"
  ];

  return (
    <main className="min-h-screen overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section className="w-full px-4 pt-6 pb-12 sm:pt-8 sm:pb-16 overflow-hidden">
        <GlowingBox
          data-aos="fade-up"
          className="max-w-4xl mx-auto 
                     transition-all duration-300"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2e2a30] 
                       tracking-tight leading-tight text-center mb-4">
            Crypto Winter School 2025
          </h1>

          <div className="text-center space-y-1.5 text-[#2e2a30]/80">
            <p className="text-base sm:text-lg">December 09-12, 2025 · IIT Bhilai</p>
            <p className="text-sm sm:text-base italic">
              A Convergence of Cryptography, Security & Research
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <Countdown targetDate="2025-12-09T12:00:00+05:30" />
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/registration"
              className="group relative px-6 py-2.5 rounded-xl bg-[#7c3aed] text-white 
                       font-medium text-sm sm:text-base tracking-wide text-center
                       transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]
                       active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            </Link>
            <Link
              to="/program"
              className="px-6 py-2.5 rounded-xl bg-white/80 text-[#2e2a30] font-medium
                       text-sm sm:text-base tracking-wide text-center backdrop-blur-sm
                       border border-[#7c3aed]/20 transition-all duration-300
                       hover:border-[#7c3aed] hover:bg-white active:scale-95"
            >
              View Program
            </Link>
          </div>
        </GlowingBox>
      </section>

      {/* About Section */}
      <section className="w-full px-4 py-12 sm:py-16 overflow-hidden">
        <div 
          data-aos="fade-up"
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8">
            About the Workshop
          </h2>
          
          <GlowingBox className="p-5 sm:p-8">
            <div className="space-y-4 text-[#2e2a30]/90 text-sm sm:text-base leading-relaxed text-justify">
              <p className="first-letter:text-3xl first-letter:font-bold">
                The Crypto Winter School (CWS 2025) aims to cultivate advanced research capabilities in cryptology, both from classical and post-quantum perspectives, among India's budding researchers. With the rapid evolution of quantum technologies posing significant threats to classical cryptographic primitives, it is imperative to equip researchers with the knowledge and skills necessary to design, analyse, and implement secure systems in the post-quantum era. The proposed Winter School directly aligns with the Human Resource Development (HRD) objectives of the National Quantum Mission (NQM) by strengthening national capacity in quantum-safe cryptography, building a pipeline of skilled researchers, fostering interdisciplinary collaboration, and increasing the impact and reach of the school by following a Dagstuhl-Seminar type format.
              </p>
              <p>
                By providing hands-on exposure to real-world research under the guidance of eminent experts, CWS 2025 will create a fertile environment for innovation and sustainable research collaborations.
              </p>
            </div>
          </GlowingBox>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="w-full px-4 py-12 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8"
          >
            Distinguished Speakers
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
                data-aos-easing="cubic-bezier(0.645, 0.045, 0.355, 1)"
                className="group relative"
              >
                <GlowingBox className="p-3 sm:p-4 transition-all duration-500 hover:scale-[1.02]">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3 rounded-lg overflow-hidden
                               border border-white/20 group-hover:border-[#7c3aed]/20
                               transition-all duration-500">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transform transition-transform duration-500"
                      loading={index > 5 ? "lazy" : "eager"}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-xs sm:text-sm text-[#2e2a30] mb-0.5
                                 group-hover:text-[#7c3aed] transition-colors duration-500">
                      {speaker.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-medium text-[#7c3aed]/80">
                      {speaker.expertise}
                    </p>
                    <p className="text-[10px] sm:text-xs text-[#2e2a30]/60">
                      {speaker.university}
                    </p>
                  </div>
                </GlowingBox>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="w-full px-4 py-12 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8"
          >
            Key Focus Areas
          </h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group w-full sm:w-1/2 lg:w-1/4 flex"
              >
                <GlowingBox className="p-4 transition-all duration-300 hover:scale-[1.02] w-full h-full flex items-center justify-center">
                  <h3 className="font-medium text-sm sm:text-base text-center text-[#2e2a30]
                               group-hover:text-[#7c3aed] transition-colors duration-300">
                    {area}
                  </h3>
                </GlowingBox>
              </div>
            ))}
          </div>
        </div>
      </section>

                  {/* Important Dates Section */}
                  <section className="w-full px-4 py-12 sm:py-16 overflow-hidden">
  <div className="max-w-4xl mx-auto">
    <h2
      data-aos="fade-up"
      className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8"
    >
      Important Dates
    </h2>

    <div className="grid sm:grid-cols-1 gap-3 sm:gap-4">
      <div
        data-aos="fade-up"
        className="group cursor-pointer"
        onClick={() => navigate('/program')}
      >
        <GlowingBox className="p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] max-w-md mx-auto text-center">
          <h3
            className="text-base sm:text-lg font-semibold text-[#2e2a30] mb-1
                       group-hover:text-[#7c3aed] transition-colors duration-300"
          >
            Workshop Dates
          </h3>
          <p className="text-sm text-[#2e2a30]/70">December 09–12, 2025</p>
        </GlowingBox>
      </div>
    </div>
  </div>
</section>
    
    </main>
  );
};

export default Home;