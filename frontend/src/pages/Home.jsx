import GlowingBox from "../components/GlowingBox";
import { Link } from "react-router-dom";
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
import dipanwitaImg from "../../assets/speakers/Dipanwita.jpg";
import mridulImg from "../../assets/speakers/mridul_nandi.jpg";
import brkImg from "../../assets/speakers/brk.avif"; // New import

const Home = () => {
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
    { name: "Prof. Bimal Kumar Roy", expertise: "Combinatorics, and application of Statistics in Cryptology and Design of Experiments", university: "Indian Statistical Institute (ISI)", image: brkImg }, // New speaker
    { name: "Prof. Dipanwita Roy Chowdhury", expertise: "Symmetric Key Cryptography", university: "IIT Kharagpur", image: dipanwitaImg },
    { name: "Prof. Mridul Nandi", expertise: "Provable Security", university: "ISI Kolkata", image: mridulImg },
    { name: "Dr. Shibam Ghosh", expertise: "Symmetric Key Cryptanalysis", university: "INRIA", image: shimanImg },
    { name: "Dr. Mostafizar Rahman", expertise: "Symmetric Key Cryptanalysis", university: "NTU Singapore", image: mostafizarImg },
    { name: "Dr. Angshuman Karmakar", expertise: "Post Quantum Cryptography", university: "IIT Kanpur", image: angshumanImg },
    { name: "Dr. Satrajit Ghosh", expertise: "Multi-Party Computation", university: "IIT Kharagpur", image: satrajitImg },
    { name: "Dr. Sabyasachi Karati", expertise: "Public Key Cryptography", university: "ISI Kolkata", image: sabyasachiImg },
    // { name: "Dr. Anindita Banerjee", expertise: "Quantum Communication", university: "CDAC Pune", image: aninditaImg },
    { name: "Dr. Avijit Dutta", expertise: "Provable Security", university: "TCG Crest", image: avijitImg },
    { name: "Dr. Avik Chakraborti", expertise: "White Box Cryptography", university: "TCG Crest", image: avikImg },
  ];

  const focusAreas = [
    "Symmetric Key Cryptanalysis",
    "Post Quantum Cryptography",
    "Multi-Party Computation",
    "Public Key Cryptography",
    "Quantum Communication",
    "Provable Security",
    "White Box Cryptography",
    "Symmetric Key Cryptography"
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
            National Workshop on Cryptology 2025
          </h1>

          <div className="text-center space-y-1.5 text-[#2e2a30]/80">
            <p className="text-base sm:text-lg">December 07-09, 2025 · IIT Bhilai</p>
            <p className="text-sm sm:text-base italic">
              A Convergence of Cryptography, Security & Research
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <Countdown targetDate="2025-12-07T00:00:00+05:30" />
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
                In a landmark collaboration, the Indian Institute of Technology Bhilai and the Cryptology Research Society of India (CRSI) are proud to present the <strong>National Workshop on Cryptology (NWC 2025)</strong>. As the flagship annual event of CRSI, this workshop serves as a premier national forum, dedicated to uniting the brightest minds in cryptology and information security. We warmly invite researchers, academicians, students, and industry pioneers to converge for an enriching exchange of knowledge and ideas, fostering a community dedicated to advancing the frontiers of digital security.
              </p>
              <p>
                The workshop agenda is meticulously crafted to provide a comprehensive exploration of modern cryptography. Participants will engage with eminent experts through a series of invited talks, in-depth tutorials, and interactive sessions. The curriculum will span a wide spectrum of critical topics, including <strong>Post-Quantum Cryptography</strong>, <strong>Lightweight Cryptography</strong>, <strong>Secure Protocols</strong>, and <strong>Blockchain Security</strong>. Beyond the sessions, the workshop will offer ample opportunities for networking, poster presentations, and collaborative discussions. Our vision is to cultivate a vibrant ecosystem for cryptographic research in India, empowering the next generation of scholars and professionals to shape a secure digital future.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group"
              >
                <GlowingBox className="p-4 transition-all duration-300 hover:scale-[1.02]">
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
            
                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        <div
                          data-aos="fade-right"
                          className="group"
                        >
                          <GlowingBox className="p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02]">
                            <div className="text-center">
                              <h3 className="text-base sm:text-lg font-semibold text-[#2e2a30] mb-1
                                           group-hover:text-[#7c3aed] transition-colors duration-300">
                                Registration
                              </h3>
                              <p className="text-sm text-[#2e2a30]/70">November 09 - December 01, 2025</p>
                            </div>
                          </GlowingBox>
                        </div>
            
                        <div
                          data-aos="fade-left"
                          className="group"
                        >
                          <GlowingBox className="p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02]">
                            <div className="text-center">
                              <h3 className="text-base sm:text-lg font-semibold text-[#2e2a30] mb-1
                                           group-hover:text-[#7c3aed] transition-colors duration-300">
                                Workshop Dates
                              </h3>
                              <p className="text-sm text-[#2e2a30]/70">December 07–09, 2025</p>
                            </div>
                          </GlowingBox>
                        </div>
                      </div>
                    </div>
                  </section>      
    </main>
  );
};

export default Home;