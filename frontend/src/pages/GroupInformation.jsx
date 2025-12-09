import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';
import { groups } from '../data/groupsData';
import { Users, ChevronRight, MapPin } from 'lucide-react';

const GroupInformation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pt-[120px] pb-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-[#2e2a30]/5">
      <main className="w-full max-w-7xl">
        <GlowingBox className="p-6 md:p-12">
          <div data-aos="fade-up" className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2e2a30] mb-6 tracking-tight">
              Research Groups
            </h1>
            <p className="text-[#2e2a30]/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Collaborative research pods focused on advanced cryptographic themes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
            {groups.map((group, index) => (
              <div
                key={group.id}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                onClick={() => navigate(`/group-information/${group.id}`)}
                className="group cursor-pointer h-full"
              >
                <div className="h-full relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 
                            shadow-[0_0_25px_rgba(124,58,237,0.25)] 
                            hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:border-[#7c3aed]/30
                            transition-all duration-500 hover:-translate-y-1">

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7c3aed]/10 via-transparent to-[#ec4899]/10" />

                  {/* Top Border Gradient Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7c3aed] via-[#ec4899] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="p-8 flex flex-col h-full relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7c3aed]/5 text-[#7c3aed] text-sm font-bold border border-[#7c3aed]/10 group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-300">
                        {group.id}
                      </span>
                      <ChevronRight className="w-5 h-5 text-[#2e2a30]/20 group-hover:text-[#7c3aed] group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#2e2a30] leading-tight mb-3 group-hover:text-[#7c3aed] transition-colors duration-300">
                      {group.name}
                    </h3>

                    {/* Stats */}
                    <div className="mt-auto pt-6 border-t border-[#2e2a30]/5 flex flex-wrap items-center gap-3 text-sm font-medium text-[#2e2a30]/50 group-hover:text-[#2e2a30]/70 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>Room {group.roomNumber}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-[#2e2a30]/20" />
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        <span>{group.experts.length} Experts</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-[#2e2a30]/20" />
                      <div>
                        {group.members.length} Members
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlowingBox>
      </main>
    </div>
  );
};

export default GroupInformation;