import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen text-[#2e2a30]" style={{ backgroundColor: "#9ec5c6" }}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20
                        transition-all duration-1000 ease-in-out"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div
          className="relative max-w-4xl w-full mx-6 px-12 py-14 rounded-[32px] 
          bg-white/20 backdrop-blur-xl border border-white/30 
          shadow-[0_20px_60px_rgba(0,0,0,0.2)] text-center
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)] transition-all duration-500
          hover:scale-[1.02] hover:bg-white/25
          animate-float"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-grey mb-6 tracking-tight leading-tight
                         animate-fade-in-down">
            National Workshop on Cryptology 2025
          </h1>

          <p className="mt-6 text-grey/80 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            December 2025 · IIT Bhilai, India <p>
            A Convergence of Cryptography, Security & Research</p>
          </p>

          {/* COUNTDOWN */}
          <div className="mt-10 animate-fade-in animation-delay-400">
            <Countdown targetDate="2025-12-15T10:00:00+05:30" />
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Link
              to="/registration"
              className="px-7 py-3 rounded-full font-medium text-white shadow-md 
              transition-all duration-300 hover:scale-110 hover:shadow-xl
              hover:-translate-y-1 active:scale-95"
              style={{ backgroundColor: "#2e2a30" }}
            >
              Register
            </Link>
            <Link
              to="/program"
              className="px-7 py-3 rounded-full border border-white/40 text-white/90 hover:text-white 
              hover:border-white transition-all duration-300 hover:scale-110 hover:shadow-xl
              hover:-translate-y-1 active:scale-95 hover:bg-white/10"
            >
              Program
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section data-aos="flip-left" data-aos-duration="1500" 
               className="mt-24 px-8 max-w-6xl mx-auto py-20
                        transition-all duration-1000 ease-in-out transform">
        <div className="text-center mb-12 animate-bounce-slow">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e2a30] inline-block relative
                       hover:scale-105 transition-transform duration-300 cursor-default">
            About the Workshop
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2e2a30]/50 to-transparent
                           transform scale-x-0 hover:scale-x-100 transition-transform duration-500"></span>
          </h2>
        </div>
        
        <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-12 
                        shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]
                        transition-all duration-500 hover:scale-[1.02] hover:bg-white/35">
          
          <div className="space-y-6 text-[#2e2a30]/90 leading-relaxed">
            <p className="text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-[#2e2a30] 
                         first-letter:mr-2 first-letter:float-left">
              The <strong>National Workshop on Cryptology 2025</strong> is a premier educational and research event 
              designed to foster knowledge exchange and collaboration in the rapidly evolving field of cryptology. 
              As digital security becomes increasingly critical in our interconnected world, this workshop serves 
              as a vital platform for exploring cutting-edge cryptographic techniques, protocols, and applications.
            </p>

            <p className="text-base">
              <strong className="text-[#2e2a30]">Cryptology</strong>, the science of secure communication, encompasses 
              both cryptography (designing secure systems) and cryptanalysis (breaking them). In an era of quantum 
              computing threats, blockchain innovations, and sophisticated cyber attacks, understanding cryptological 
              principles has never been more important. This workshop addresses these challenges by bringing together 
              leading experts, emerging researchers, and industry practitioners.
            </p>

            <div className="bg-[#2e2a30]/5 rounded-2xl p-6 border-l-4 border-[#2e2a30]/40">
              <p className="text-base">
                <strong className="text-[#2e2a30]">Organized in collaboration with the Cryptology Research Society of India (CRSI)</strong>, 
                this workshop aligns with the society's mission to promote cryptology research and education across India. 
                The CRSI has been instrumental in advancing the field through academic partnerships, research initiatives, 
                and by organizing the prestigious <strong>Indocrypt conference series</strong>.
              </p>
            </div>

            <p className="text-base">
              <strong className="text-[#2e2a30]">Indocrypt 2025</strong>, the flagship annual conference of CRSI, represents 
              one of Asia's most significant cryptology conferences. Our workshop serves as a complementary educational initiative, 
              providing participants with foundational and advanced knowledge that enriches the broader cryptographic community. 
              By attending this workshop, participants will gain insights into the latest research directions, practical 
              implementations, and theoretical foundations that shape modern cryptology.
            </p>

            <p className="text-base">
              Whether you're a researcher exploring post-quantum cryptography, a student beginning your journey in 
              information security, or an industry professional seeking to strengthen your organization's security posture, 
              this workshop offers <strong className="text-[#2e2a30]">hands-on sessions, expert lectures, and networking 
              opportunities</strong> that will enhance your understanding and capabilities in this critical field.
            </p>

            <div className="mt-8 pt-6 border-t border-[#2e2a30]/20">
              <p className="text-sm text-[#2e2a30]/70 italic text-center">
                Join us at IIT Bhilai for three days of intensive learning, collaboration, and innovation in cryptology.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= SPEAKERS ================= */}
      <section data-aos="fade-up" data-aos-duration="1500" 
               className="mt-28 px-8 max-w-6xl mx-auto py-20
                        transition-all duration-1000 ease-in-out">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e2a30] inline-block relative
                       hover:scale-105 transition-transform duration-300 cursor-default">
            Speakers
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2e2a30]/50 to-transparent
                           transform scale-x-0 hover:scale-x-100 transition-transform duration-500"></span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {[
            { name: "Dr. Dhiman Saha", university: "IIT Bhilai" },
            { name: "Mr. Soumen Jana ", university: "IIT Bhilai" },
            { name: "Mr. Robot ", university: "IIT Bhilai" },
            { name: "Mr. Donald Trump ", university: "IIT Bhilai" },
            { name: "Mr. Micheal Scott ", university: "IIT Bhilai" },
            { name: "Miss Isha Goel", university: "DU MA Psychology" },
          ].map((speaker, i) => (
            <div key={i} 
                 className="flex flex-col items-center text-[#2e2a30] group cursor-pointer
                          transform transition-all duration-700"
                 data-aos="flip-left"
                 data-aos-delay={i * 200}
                 data-aos-duration="1200">
              {/* Circular photo vessel */}
              <div className="w-32 h-32 rounded-full bg-white/40 border border-white/30 shadow-md mb-4 overflow-hidden
                            transition-all duration-700 group-hover:scale-125 group-hover:shadow-2xl 
                            group-hover:border-white/70 group-hover:bg-white/60 group-hover:-translate-y-4
                            group-hover:rotate-12 animate-pulse-slow">
                {/* You can insert <img src="..." alt="..." className="w-full h-full object-cover" /> here later */}
              </div>
              <h3 className="text-lg font-semibold group-hover:text-[#2e2a30] transition-all duration-700 
                           group-hover:scale-125 group-hover:font-bold">{speaker.name}</h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">{speaker.university}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KEY FOCUS AREAS ================= */}
      <section data-aos="zoom-in-up" data-aos-duration="1500" 
               className="mt-24 px-8 max-w-6xl mx-auto py-20
                        transition-all duration-1000 ease-in-out">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e2a30] inline-block relative
                       hover:scale-105 transition-transform duration-300 cursor-default">
            Key Focus Areas
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2e2a30]/50 to-transparent
                           transform scale-x-0 hover:scale-x-100 transition-transform duration-500"></span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Symmetric & Asymmetric Cryptography",
            "Blockchain Security",
            "Quantum-Safe Cryptography",
            "Cryptanalysis Techniques",
            "Zero-Knowledge Proofs",
            "Secure Multi-Party Computation",
            "Hash Functions & Digital Signatures",
            "Cryptographic Protocols",
            "Side-Channel Attacks"
          ].map((topic, i) => (
            <div
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
              data-aos-duration="1200"
              className="p-6 bg-white/30 border border-white/40 rounded-xl backdrop-blur-md text-center text-[#2e2a30]
                       transition-all duration-700 hover:scale-125 hover:bg-white/50 hover:shadow-2xl
                       hover:-translate-y-4 hover:border-white/80 cursor-pointer group hover:rotate-3
                       transform animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold group-hover:scale-125 group-hover:font-bold transition-all duration-700">{topic}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IMPORTANT DATES ================= */}
      <section data-aos="flip-up" data-aos-duration="1500" 
               className="mt-28 px-8 max-w-5xl mx-auto py-20
                        transition-all duration-1000 ease-in-out">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e2a30] inline-block relative
                       hover:scale-105 transition-transform duration-300 cursor-default">
            Important Dates
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2e2a30]/50 to-transparent
                           transform scale-x-0 hover:scale-x-100 transition-transform duration-500"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div data-aos="flip-right" data-aos-duration="1200"
               className="p-8 rounded-2xl shadow-sm border border-[#2e2a30]/20 
                          bg-white/40 text-[#2e2a30] hover:shadow-2xl transition-all duration-700
                          hover:scale-125 hover:-translate-y-4 hover:bg-white/60 hover:border-[#2e2a30]/40 
                          cursor-pointer group transform hover:rotate-3 animate-pulse-slow">
            <h3 className="text-xl font-semibold group-hover:scale-110 group-hover:font-bold transition-all duration-700">Registration Opens</h3>
            <p className="text-sm mt-2 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105">December 05, 2025</p>
          </div>

          <div data-aos="flip-left" data-aos-duration="1200"
               className="p-8 rounded-2xl shadow-sm border border-[#2e2a30]/20 
                          bg-white/40 text-[#2e2a30] hover:shadow-2xl transition-all duration-700
                          hover:scale-125 hover:-translate-y-4 hover:bg-white/60 hover:border-[#2e2a30]/40 
                          cursor-pointer group transform hover:-rotate-3 animate-pulse-slow"
               style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-semibold group-hover:scale-110 group-hover:font-bold transition-all duration-700">Workshop Dates</h3>
            <p className="text-sm mt-2 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105">December 15–17, 2025</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer data-aos="fade-up" data-aos-duration="800" 
              className="w-full py-6 border-t border-white/20 bg-[#2e2a30]/10 backdrop-blur-sm mt-12
                       hover:bg-[#2e2a30]/15 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-[#2e2a30]">
          <p className="font-medium hover:scale-105 transition-transform duration-300 inline-block cursor-default">
            © 2025 National Workshop on Cryptology · IIT Bhilai
          </p>
        </div>
      </footer>
  
    </div>
  );
};

export default Home;
