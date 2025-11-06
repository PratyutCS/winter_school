import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';

const scheduleData = [
  { 
    time: '10:00 AM - 10:30 AM', 
    title: 'Opening Ceremony & Welcome Address', 
    speaker: 'Prof. Rajeev Prakash, Director IIT Bhilai',
    type: 'ceremony',
    description: 'Inaugural session with workshop overview and objectives'
  },
  { 
    time: '10:30 AM - 11:45 AM', 
    title: 'Keynote: Foundations of Modern Cryptography', 
    speaker: 'Dr. Dhiman Saha, IIT Bhilai',
    type: 'keynote',
    description: 'An introduction to cryptographic primitives and their applications'
  },
  { 
    time: '11:45 AM - 12:00 PM', 
    title: 'Coffee Break', 
    speaker: null,
    type: 'break',
    description: 'Networking and refreshments'
  },
  { 
    time: '12:00 PM - 1:00 PM', 
    title: 'Tutorial: Symmetric Key Cryptography', 
    speaker: 'Mr. Soumen Jana, IIT Bhilai',
    type: 'tutorial',
    description: 'Block ciphers, stream ciphers, and modes of operation'
  },
  { 
    time: '1:00 PM - 2:00 PM', 
    title: 'Lunch Break', 
    speaker: null,
    type: 'break',
    description: 'Networking lunch at the campus dining hall'
  },
  { 
    time: '2:00 PM - 3:15 PM', 
    title: 'Workshop: Public Key Cryptography & RSA', 
    speaker: 'Dr. Ananya Sharma, IIIT Delhi',
    type: 'workshop',
    description: 'Hands-on session on asymmetric encryption and digital signatures'
  },
  { 
    time: '3:15 PM - 4:00 PM', 
    title: 'Panel Discussion: Quantum-Safe Cryptography', 
    speaker: 'Multiple Experts',
    type: 'panel',
    description: 'Preparing for the post-quantum era'
  },
  { 
    time: '4:00 PM - 4:30 PM', 
    title: 'Tea Break', 
    speaker: null,
    type: 'break',
    description: 'Evening refreshments and networking'
  },
  { 
    time: '4:30 PM - 5:45 PM', 
    title: 'Cryptanalysis Techniques & Case Studies', 
    speaker: 'Prof. Vikram Singh, IIT Bombay',
    type: 'lecture',
    description: 'Breaking ciphers and understanding vulnerabilities'
  },
  { 
    time: '5:45 PM - 6:00 PM', 
    title: 'Day 1 Wrap-up & Q&A', 
    speaker: 'All Speakers',
    type: 'discussion',
    description: 'Open floor for questions and discussions'
  },
];

export default function Program() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50,
    });
  }, []);

  const getTypeStyles = (type) => {
    switch(type) {
      case 'keynote':
        return 'bg-purple-500/20 border-purple-400/50 hover:bg-purple-500/30';
      case 'tutorial':
        return 'bg-blue-500/20 border-blue-400/50 hover:bg-blue-500/30';
      case 'workshop':
        return 'bg-green-500/20 border-green-400/50 hover:bg-green-500/30';
      case 'panel':
        return 'bg-orange-500/20 border-orange-400/50 hover:bg-orange-500/30';
      case 'lecture':
        return 'bg-cyan-500/20 border-cyan-400/50 hover:bg-cyan-500/30';
      case 'ceremony':
        return 'bg-pink-500/20 border-pink-400/50 hover:bg-pink-500/30';
      case 'discussion':
        return 'bg-yellow-500/20 border-yellow-400/50 hover:bg-yellow-500/30';
      case 'break':
        return 'bg-gray-400/20 border-gray-400/50 hover:bg-gray-400/30';
      default:
        return 'bg-white/20 border-white/40 hover:bg-white/30';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'keynote':
        return <span className="text-purple-500 font-bold">●</span>;
      case 'tutorial':
        return <span className="text-blue-500 font-bold">●</span>;
      case 'workshop':
        return <span className="text-green-500 font-bold">●</span>;
      case 'panel':
        return <span className="text-orange-500 font-bold">●</span>;
      case 'lecture':
        return <span className="text-cyan-500 font-bold">●</span>;
      case 'ceremony':
        return <span className="text-pink-500 font-bold">●</span>;
      case 'discussion':
        return <span className="text-yellow-600 font-bold">●</span>;
      case 'break':
        return <span className="text-gray-500 font-bold">●</span>;
      default:
        return <span className="text-gray-500 font-bold">●</span>;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8" style={{ backgroundColor: '#ffffff' }}>
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center" data-aos="fade-down">
        <h1 className="text-5xl md:text-6xl font-bold text-[#2e2a30] mb-4">
          Workshop Program
        </h1>
        <p className="text-xl text-[#2e2a30]/80">December 15, 2025 - Day 1</p>
        <div className="mt-4 inline-block px-6 py-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40">
          <p className="text-sm font-medium text-[#2e2a30]">IIT Bhilai · 10:00 AM - 6:00 PM</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2e2a30]/20 via-[#2e2a30]/50 to-[#2e2a30]/20 
                        transform md:-translate-x-1/2 hidden sm:block"></div>

        {/* Timeline items */}
        <div className="space-y-8">
          {scheduleData.map((event, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 50}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-8`}
            >
              {/* Time badge - center on desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-[#2e2a30] text-white px-4 py-2 rounded-full shadow-lg 
                              hover:scale-110 transition-all duration-300 hover:shadow-xl
                              border-4 border-white/30 backdrop-blur-sm whitespace-nowrap
                              animate-pulse-slow">
                  <span className="font-bold text-sm">{event.time}</span>
                </div>
              </div>

              {/* Content card */}
              <div className={`w-full md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? 'md:text-right md:pr-4' : 'md:text-left md:pl-4'
              }`}>
                <div className={`p-6 rounded-2xl backdrop-blur-xl border-2 shadow-lg
                               transition-all duration-500 hover:scale-105 hover:shadow-2xl
                               cursor-pointer group ${getTypeStyles(event.type)}`}>
                  
                  {/* Mobile time */}
                  <div className="md:hidden mb-3 inline-block">
                    <span className="bg-[#2e2a30] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {event.time}
                    </span>
                  </div>

                  {/* Event icon & title */}
                  <div className={`flex items-start gap-3 ${
                    index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'md:flex-row md:text-left'
                  } flex-row text-left`}>
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                      {getTypeIcon(event.type)}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#2e2a30] mb-2 group-hover:text-[#1a1618] transition-colors">
                        {event.title}
                      </h3>
                      {event.speaker && (
                        <p className="text-sm font-medium text-[#2e2a30]/80 mb-2">
                          {event.speaker}
                        </p>
                      )}
                      <p className="text-sm text-[#2e2a30]/70 italic">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Type badge */}
                  <div className={`mt-3 inline-block ${index % 2 === 0 ? 'md:float-left' : 'md:float-right'}`}>
                    <span className="px-3 py-1 bg-white/40 rounded-full text-xs font-semibold text-[#2e2a30] uppercase tracking-wide">
                      {event.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Placeholder for alternating layout */}
              <div className="hidden md:block w-[calc(50%-3rem)]"></div>
            </div>
          ))}
        </div>

        {/* End marker */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <div className="inline-block p-6 bg-white/30 backdrop-blur-xl rounded-full border-4 border-white/40 
                        hover:scale-110 transition-all duration-500 hover:shadow-xl cursor-pointer">
            <span className="text-4xl font-bold text-[#2e2a30]">●</span>
          </div>
          <p className="mt-4 text-lg font-bold text-[#2e2a30]">End of Day 1</p><p>


          </p>
          <p className="text-sm text-[#2e2a30]/70"> Au revoir</p>
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-5xl mx-auto mt-16 p-6 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/40"
           data-aos="fade-up">
        <h3 className="text-lg font-bold text-[#2e2a30] mb-4 text-center">Session Types</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {['keynote', 'tutorial', 'workshop', 'panel', 'lecture', 'ceremony', 'discussion', 'break'].map((type) => (
            <div key={type} className="flex items-center gap-2 justify-center">
              <span className={`text-xl font-bold ${
                type === 'keynote' ? 'text-purple-500' :
                type === 'tutorial' ? 'text-blue-500' :
                type === 'workshop' ? 'text-green-500' :
                type === 'panel' ? 'text-orange-500' :
                type === 'lecture' ? 'text-cyan-500' :
                type === 'ceremony' ? 'text-pink-500' :
                type === 'discussion' ? 'text-yellow-600' :
                'text-gray-500'
              }`}>●</span>
              <span className="capitalize text-[#2e2a30] font-medium">{type}</span>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
