import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

const presenters = [
    {
        name: "Sajani Kundu",
        title: "EWEMrl: A White-Box Secure Cipher with Longevity",
    },
    {
        name: "Hrithik Nandi",
        title: "Sequential Indifferentiability of STH and EDM",
    },
    {
        name: "Amlan Sinha",
        title: "Committing Security of BBB Secure MACs",
    },
    {
        name: "Anup Kumar Kundu",
        title: "TBD",
    },
    {
        name: "Prathamesh Ram",
        title: "TBD",
    },
    {
        name: "Bibhas Chandra Das",
        title: "TBD",
    },
    {
        name: "Shreya De",
        title: "TBD",
    }
];

export default function Presentation() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col pt-[140px] bg-gradient-to-b from-transparent to-[#2e2a30]/5">
            <main className="flex-grow px-4 md:px-8 pb-12">
                <div className="max-w-5xl mx-auto">
                    <GlowingBox strongGlow={true} className="p-8 md:p-12 border-0 overflow-hidden bg-white/60 backdrop-blur-2xl" data-aos="fade-up">

                        {/* Header inside the box */}
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-5xl font-bold text-[#2e2a30] mb-6 tracking-tight">
                                Student Presentation Session
                            </h1>
                            <div className="h-1.5 w-32 bg-gradient-to-r from-[#7c3aed] via-[#ec4899] to-[#7c3aed] mx-auto rounded-full shadow-lg shadow-[#7c3aed]/20"></div>
                        </div>

                        {/* Table Header for Desktop */}
                        <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-5 border-b border-[#2e2a30]/10 bg-[#7c3aed]/5 rounded-t-xl">
                            <div className="col-span-1 font-bold text-[#7c3aed] uppercase tracking-wider text-sm text-center">#</div>
                            <div className="col-span-4 font-bold text-[#2e2a30]/70 uppercase tracking-wider text-sm">Speaker</div>
                            <div className="col-span-7 font-bold text-[#2e2a30]/70 uppercase tracking-wider text-sm">Title</div>
                        </div>

                        <div className="divide-y divide-[#7c3aed]/10 border-x border-b border-[#2e2a30]/5 rounded-b-xl bg-white/40">
                            {presenters.map((presenter, index) => (
                                <div
                                    key={index}
                                    className="group md:grid md:grid-cols-12 md:gap-4 p-6 md:px-8 md:py-6 items-center hover:bg-white/80 transition-colors duration-300"
                                >
                                    {/* Number */}
                                    <div className="hidden md:flex col-span-1 justify-center">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] font-bold text-sm">
                                            {index + 1}
                                        </span>
                                    </div>

                                    {/* Header for Mobile only */}
                                    <div className="flex md:hidden items-center gap-3 mb-2">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] font-bold text-xs">
                                            {index + 1}
                                        </span>
                                        <h3 className="text-lg font-bold text-[#2e2a30]">
                                            {presenter.name}
                                        </h3>
                                    </div>

                                    {/* Name (Desktop) */}
                                    <div className="hidden md:block col-span-4">
                                        <h3 className="text-lg font-bold text-[#2e2a30] group-hover:text-[#7c3aed] transition-colors duration-300">
                                            {presenter.name}
                                        </h3>
                                    </div>

                                    {/* Title */}
                                    <div className="col-span-12 md:col-span-7 pl-9 md:pl-0">
                                        <p className="text-base md:text-lg text-[#2e2a30]/80 font-medium italic">
                                            {presenter.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlowingBox>
                </div>
            </main>
        </div>
    );
}
