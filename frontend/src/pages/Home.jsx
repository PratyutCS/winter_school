import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <div className="min-h-screen text-[#2e2a30]" style={{ backgroundColor: "#9ec5c6" }}>
      {/* ================= HERO SECTION ================= */}
      <header
        className="relative h-[92vh] w-full flex items-center justify-center overflow-hidden"
        data-aos="fade-in"
      >
        {/* Background gradient (LIGHT) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cbbec6] to-[#9ec5c6]"></div>

        {/* Accent soft blobs */}
        <div className="absolute -top-24 -left-20 w-[55vh] h-[55vh] bg-[#9ec5c6] opacity-25 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[45vh] h-[45vh] bg-[#bfdbdd] opacity-20 blur-[150px] rounded-full"></div>

        {/* HERO GLASS CARD */}
        <div
          className="relative max-w-4xl w-full mx-6 px-12 py-14 rounded-[32px] 
          bg-white/10 backdrop-blur-2xl border border-white/25 
          shadow-[0_20px_60px_rgba(0,0,0,0.25)] text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            National Workshop on Cryptology 2025
          </h1>

          <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
            December 2025 · IIT Bhilai, India  
            A Convergence of Cryptography, Security & Research
          </p>

          {/* COUNTDOWN */}
          <div className="mt-10">
            <Countdown targetDate="2025-12-15T10:00:00+05:30" />
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex justify-center gap-4">
            <Link
              to="/registration"
              className="px-7 py-3 rounded-full font-medium text-white shadow-md shadow-pink-500/20 
              transition-transform hover:scale-105"
              style={{ background: "linear-gradient(90deg,#7c3aed,#ec4899)" }}
            >
              Register
            </Link>
            <Link
              to="/program"
              className="px-7 py-3 rounded-full border border-white/40 text-white/90 hover:text-white 
              hover:border-white transition-transform hover:scale-105"
            >
              Program
            </Link>
          </div>
        </div>
      </header>

      {/* ================= ABOUT SECTION ================= */}
      <section data-aos="fade" className="mt-24 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About the Workshop</h2>
        <p className="text-gray-100 leading-relaxed max-w-3xl mx-auto">
          This national workshop brings together researchers, academicians, and industry
          professionals to discuss modern cryptographic advancements, secure systems, and
          emerging cryptanalysis methods.
        </p>
      </section>

      {/* ================= KEY FOCUS AREAS ================= */}
      <section data-aos="fade" className="mt-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Key Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Modern Cryptography", "Blockchain Security", "Quantum Safe Systems"].map((topic, i) => (
            <div
              key={i}
              className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-xl text-center text-white"
            >
              <h3 className="text-xl font-semibold">{topic}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IMPORTANT DATES ================= */}
      <section data-aos="fade" className="mt-28 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 tracking-tight text-[#2e2a30]">
          Important Dates
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl shadow-sm border border-[#c2b8c0] 
                          bg-[#d6cdd4] text-[#2e2a30] hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Registration Opens</h3>
            <p className="text-sm mt-2 opacity-80">December 05, 2025</p>
          </div>

          <div className="p-8 rounded-2xl shadow-sm border border-[#c2b8c0] 
                          bg-[#d6cdd4] text-[#2e2a30] hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Workshop Dates</h3>
            <p className="text-sm mt-2 opacity-80">December 15–17, 2025</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
