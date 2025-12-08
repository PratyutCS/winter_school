import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';
import { getGroupById } from '../data/groupsData';
import { ArrowLeft, Award, Users } from 'lucide-react';

const GroupDetail = () => {
    const { groupId } = useParams();
    const navigate = useNavigate();
    const group = getGroupById(groupId);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
        window.scrollTo(0, 0);
    }, [groupId]);

    if (!group) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-[#2e2a30] mb-4">Group Not Found</h1>
                    <button
                        onClick={() => navigate('/group-information')}
                        className="text-[#7c3aed] hover:underline"
                    >
                        Return to Groups
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-10 px-4 md:px-8 bg-gradient-to-b from-transparent to-[#2e2a30]/5 flex flex-col items-center">
            <div className="w-full max-w-5xl">
                {/* Navigation - Enhanced */}
                <button
                    onClick={() => navigate('/group-information')}
                    className="group flex items-center gap-3 mb-2 pl-0 
                     text-[#2e2a30] hover:text-[#7c3aed] transition-all duration-300"
                >
                    <div className="p-3 rounded-full bg-white border border-white/40 shadow-sm 
                        group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] group-hover:border-[#7c3aed]/30 
                        group-hover:scale-110 group-hover:bg-[#7c3aed] group-hover:text-white
                        transition-all duration-300 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#7c3aed] to-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <ArrowLeft className="w-5 h-5 relative z-10 transition-transform duration-300" />
                    </div>
                    <span className="font-bold text-base tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                        Back to Groups
                    </span>
                </button>

                <GlowingBox className="p-0 border-0 overflow-hidden bg-white/60 backdrop-blur-2xl shadow-xl">
                    {/* Header Section - Compact */}
                    <div className="relative p-6 border-b border-[#2e2a30]/5 bg-white/40">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7c3aed]/40 via-[#ec4899]/40 to-[#7c3aed]/40" />

                        <div className="text-center flex flex-col items-center">
                            <span className="inline-block py-1 px-4 rounded-full bg-[#7c3aed]/5 text-[#7c3aed] text-sm md:text-base font-bold tracking-widest uppercase mb-3 border border-[#7c3aed]/10">
                                Group {group.id}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-[#2e2a30] tracking-tight leading-tight">
                                {group.name}
                            </h1>
                        </div>
                    </div>


                    <div className="p-6 md:p-8 space-y-8">

                        {/* Top Row: Experts */}
                        <div className="flex flex-col items-center w-full">
                            <div className="flex items-center gap-2 mb-4 justify-center">
                                <Award className="w-4 h-4 text-[#7c3aed]" />
                                <h2 className="text-sm font-bold text-[#2e2a30]/80 uppercase tracking-wide">
                                    Domain Experts
                                </h2>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                                {group.experts.map((expert, idx) => (
                                    <div key={idx} className="flex flex-col items-center group">
                                        <div className="relative mb-2">
                                            {/* Avatar container - Large */}
                                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-[4px] bg-gradient-to-br from-[#7c3aed]/20 to-[#ec4899]/20 group-hover:from-[#7c3aed] group-hover:to-[#ec4899] transition-all duration-500 overflow-hidden">
                                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden relative shadow-inner">
                                                    <img
                                                        src={expert.image}
                                                        alt={expert.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-sm font-bold text-[#2e2a30] leading-snug group-hover:text-[#7c3aed] transition-colors duration-300">
                                                {expert.name}
                                            </h3>
                                            <p className="text-[10px] font-medium text-[#2e2a30]/40 uppercase tracking-wider mt-0.5">
                                                Topic Expert
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2e2a30]/10 to-transparent" />

                        {/* Bottom Row: Members */}
                        <div className="w-full">
                            <div className="flex items-center gap-2 mb-4 justify-center">
                                <Users className="w-4 h-4 text-[#ec4899]" />
                                <h2 className="text-sm font-bold text-[#2e2a30]/80 uppercase tracking-wide">
                                    Members
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {group.members.map((member, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-center py-2 px-3 rounded-lg
                             bg-white/50 border border-[#2e2a30]/5
                             hover:bg-white hover:border-[#7c3aed]/20 hover:shadow-sm hover:shadow-[#7c3aed]/5
                             transition-all duration-300 group cursor-default"
                                    >
                                        <span className="font-medium text-[#2e2a30]/80 group-hover:text-[#7c3aed] transition-colors text-center text-xs md:text-sm truncate w-full">
                                            {member}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </GlowingBox>
            </div >
        </div >
    );
};

export default GroupDetail;
