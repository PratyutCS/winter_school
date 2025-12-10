import GlowingBox from "../components/GlowingBox";
import { Link, useNavigate } from "react-router-dom";
import Countdown from "../components/Countdown";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { getCurrentEvent, isEventFinished } from "../data/programSchedule";

// Speaker images
import shimanImg from "../../assets/speakers/shiman.png";
import mostafizarImg from "../../assets/speakers/Mostafizar.jpg";
import angshumanImg from "../../assets/speakers/angshuman.jpg";
import satrajitImg from "../../assets/speakers/satrajit.jpg";
import sabyasachiImg from "../../assets/speakers/sabyacachi.jpg";
import avijitImg from "../../assets/speakers/avijit.jpg";
import avikImg from "../../assets/speakers/avik.jpg";
import mridulImg from "../../assets/speakers/mridul_nandi.jpg";
import souradyutiImg from "../../assets/speakers/souradyuti.jpg";
import dhimanImg from "../../assets/speakers/dhiman.png";
import vi from "../../assets/speakers/vi_.jpg";
import prem from "../../assets/speakers/prem.png";
import laltu from "../../assets/speakers/laltu.jpg";
import sahibaImg from "../../assets/speakers/sahiba.jpeg";
import paulImg from "../../assets/speakers/paul.png";
import kableeshImg from "../../assets/speakers/r_kableesh.png";
import subhabrataImg from "../../assets/speakers/subhabrata.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [isLive, setIsLive] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [eventFinished, setEventFinished] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      once: true,
      offset: 100,
      disable: window.innerWidth < 768
    });

    // Check if event has finished
    if (isEventFinished()) {
      setEventFinished(true);
      return;
    }

    // Check initially if we should be live
    const event = getCurrentEvent();
    if (event) {
      setIsLive(true);
      setCurrentEvent(event);
    }

    // Set up an interval to update the current event if we are live
    let interval;
    if (isLive) {
      interval = setInterval(() => {
        // Also check if event has finished
        if (isEventFinished()) {
          setEventFinished(true);
          setIsLive(false);
          return;
        }
        const event = getCurrentEvent();
        setCurrentEvent(event);
      }, 60000); // Check every minute
    }

    return () => clearInterval(interval);
  }, [isLive]);

  const handleCountdownComplete = () => {
    setIsLive(true);
    const event = getCurrentEvent();
    setCurrentEvent(event);
  };

  const speakers = [
    { name: "Prof. Goutam Kumar Paul", university: "ISI Kolkata", image: paulImg },
    { name: "Dr. M. Prem Laxman Das", university: "SETS India", image: prem },
    { name: "Dr Angshuman Karmakar", university: "IIT Kanpur", image: angshumanImg },
    { name: "Dr Avik Chakraborti", university: "TCG Crest", image: avikImg },
    { name: "Dr Laltu Sardar", university: "IISER Thiruvananthapuram", image: laltu },
    { name: "Dr Satrajit Ghosh", university: "IIT Kharagpur", image: satrajitImg },
    { name: "Dr Sabyasachi Karati", university: "ISI Kolkata", image: sabyasachiImg },
    { name: "Dr Srinivas Vivek", university: "IIIT Bangalore", image: vi },
    { name: "Dr Mostafizar Rahman", university: "NTU Singapore", image: mostafizarImg },
    { name: "Dr Shibam Ghosh", university: "INRIA", image: shimanImg },
    { name: "Dr Dhiman Saha", university: "IIT Bhilai", image: dhimanImg },
    { name: "Dr Sahiba Suryawanshi", university: "IIT Bhilai", image: sahibaImg },
    { name: "Dr R Kabaleeshwaran", university: "IIITDM Kurnool", image: kableeshImg },
    { name: "Dr Subhabrata Samajder", university: "TCG Crest", image: subhabrataImg },
  ];

  const focusAreas = [
    "Symmetric-Key Cryptanalysis",
    "Cryptographic Hardware",
    "Multi-Party Computation",
    "Post-Quantum Digital Signatures",
    "Searchable Encryption",
    "Security of Trusted Execution Environments"
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
            {eventFinished ? (
              <div className="text-center animate-fade-in">
                <div className="bg-gradient-to-r from-[#7c3aed]/10 to-[#ec4899]/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-[#7c3aed]/20">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#7c3aed] mb-4">
                    🎉 Event Concluded! 🎉
                  </h2>
                  <p className="text-base sm:text-lg text-[#2e2a30] mb-4">
                    Thank you for being part of the Crypto Winter School 2025!
                  </p>
                  <div className="space-y-2 text-sm sm:text-base text-[#2e2a30]/80">
                    <p>A heartfelt thanks to our <strong className="text-[#7c3aed]">distinguished speakers</strong> for sharing their expertise.</p>
                    <p>Gratitude to all the <strong className="text-[#7c3aed]">participants</strong> for your enthusiasm and engagement.</p>
                    <p>Special thanks to the <strong className="text-[#7c3aed]">group leaders</strong> for guiding the discussions.</p>
                    <p>And immense appreciation to the <strong className="text-[#7c3aed]">organising committee</strong> for making this event a success!</p>
                  </div>
                </div>
              </div>
            ) : !isLive ? (
              <Countdown
                targetDate="2025-12-09T14:30:00+05:30"
                onComplete={handleCountdownComplete}
              />
            ) : (
              <div className="text-center animate-fade-in">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <h2 className="text-xl font-bold text-[#7c3aed] uppercase tracking-wider">
                    Program Updates
                  </h2>
                </div>

                {currentEvent ? (
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-[#7c3aed]/20">
                    <div className="text-sm font-semibold text-[#7c3aed] mb-1">
                      {currentEvent.day} • {currentEvent.time}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#2e2a30] mb-2">
                      {currentEvent.event}
                    </h3>
                    {currentEvent.speaker && (
                      <p className="text-sm font-medium text-[#2e2a30]/80 mb-1">
                        Speaker: {currentEvent.speaker}
                      </p>
                    )}
                    {currentEvent.chair && (
                      <p className="text-sm text-[#2e2a30]/70">
                        Session Chair: {currentEvent.chair}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-[#7c3aed]/20">
                    <p className="text-lg text-[#2e2a30]/80">
                      No active session right now. Check the full program below.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-6 sm:mt-8 flex justify-center">
            <Link
              to="/program"
              className="group relative px-10 sm:px-14 py-3 sm:py-4 rounded-xl 
                       bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#ec4899]
                       text-white font-semibold text-base sm:text-lg tracking-wide text-center
                       transition-all duration-500 ease-out
                       hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]
                       active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">View Program</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                            transition-transform duration-1000 ease-out
                            bg-gradient-to-r from-transparent via-white/30 to-transparent"/>
              {/* Glow pulse on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500
                            bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#ec4899]
                            blur-xl -z-10 group-hover:animate-pulse"/>
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
            About the Winter School
          </h2>

          <GlowingBox className="p-5 sm:p-8">
            <div className="space-y-4 text-[#2e2a30]/90 text-sm sm:text-base leading-relaxed text-justify">
              <p className="first-letter:text-3xl first-letter:font-bold">
                The <strong>Crypto Winter School (CWS 2025)</strong> aims to cultivate advanced research capabilities in cryptology, both from <strong>classical and post-quantum perspectives</strong>, among India's budding researchers. With the rapid evolution of quantum technologies posing significant threats to classical cryptographic primitives, it is imperative to equip researchers with the knowledge and skills necessary to design, analyse, and implement secure systems in the post-quantum era. The proposed Winter School directly aligns with the Human Resource Development (HRD) objectives of the <strong>National Quantum Mission (NQM)</strong> by strengthening national capacity in quantum-safe cryptography, building a pipeline of skilled researchers, fostering interdisciplinary collaboration, and increasing the impact and reach of the school by following a <strong>Dagstuhl-Seminar</strong> type format.
              </p>
              <p>
                Through the group discussion sessions, students get an opportunity to have intensive collaborative discussions with eminent experts in the field, giving them hands-on exposure to real-world research. Thus, CWS 2025 will create a fertile environment for innovation and sustainable research collaborations.
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
            Distinguished Speakers & Experts
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
                  Winter School Dates
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
