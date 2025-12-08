import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

const GroupInformation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const groups = [
    {
      id: 1,
      name: "Cryptanalysis I",
      experts: ["Shibam Ghosh", "Dhiman Saha"],
      members: ["Soumen Jana", "Prathamesh Ram", "Dilip Sau", "Ayush", "Mohit", "Akshay Ankush Yadav"]
    },
    {
      id: 2,
      name: "Cryptanalysis II",
      experts: ["Mostafizar Rahman", "M Prem Laxman Das"],
      members: ["Md Sariful Molla", "Niloy Das", "Anup Kundu", "Ajay Kumar Das", "Madhurima Das", "Manish Sahu", "Isha Goel"]
    },
    {
      id: 3,
      name: "Cryptanalysis III",
      experts: ["Sahiba Suryawanshi", "Goutam Kumar Paul"],
      members: ["Ranit Dutta", "Sreedhar Karmakar", "Hrithik Nandi", "Jhelum Dhar", "Nitesh Singh Bhadouria", "Dr Medini H R"]
    },
    {
      id: 4,
      name: "Cryptographic Hardware",
      experts: ["Subidh Ali", "Angshuman Karmakar"],
      members: ["Dr Jamunarani D", "Venkatesh Kumar", "Santosh Kumar Singh", "Sajjan Kumar"]
    },
    {
      id: 5,
      name: "Multi-Party Computation",
      experts: ["Satrajit Ghosh"],
      members: ["Amlan Sinha", "Kiran Deep Ghosh", "Suchandan Ghosh", "Sougata Mandal", "Soumit Pal", "Subha Kar"]
    },
    {
      id: 6,
      name: "PQ Digital Signatures",
      experts: ["R Kabaleeshwaran", "Sabhasachi Karati"],
      members: ["Akshay Dhan", "Gagan Soni", "Divya Nagabhai Varu", "Nikita Dey", "Divyam Katiyar"]
    },
    {
      id: 7,
      name: "Searchable Encryption",
      experts: ["Laltu Sardar", "Subhabrata Samajder"],
      members: ["Bibhas Chandra Das", "Palak Kumari", "Vipin Kumar", "Fedal Castro", "Shreya Dey"]
    },
    {
      id: 8,
      name: "Security of TEEs",
      experts: ["Avik Chakraborti", "Srinivas Vivek"],
      members: ["Jitendra Kulaste", "Sandip Pal", "Dr Ayantika Laha", "Sajani Kundu", "Md Alamgir Alam"]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-[140px] px-4 md:px-8 pb-12">
      <main className="flex-grow flex items-center justify-center w-full">
        <GlowingBox className="w-full max-w-7xl p-6 md:p-10" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold text-[#2e2a30] mb-10 text-center">Groups</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-[#2e2a30]/5 rounded-xl p-6 border border-[#2e2a30]/10 hover:border-[#7c3aed]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-[1.02] flex flex-col h-full transform"
              >
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#2e2a30]/10">
                  <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider">Group {group.id}</span>
                </div>

                <h3 className="text-lg font-bold text-[#2e2a30] leading-tight mb-4">
                  {group.name}
                </h3>

                <div className="mb-4">
                  <p className="text-xs text-[#7c3aed]/80 uppercase tracking-wide font-semibold mb-1">Group Experts</p>
                  <div className="space-y-0.5">
                    {group.experts.map((expert, idx) => (
                      <p key={idx} className="text-sm font-medium text-[#2e2a30]/90">{expert}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-3 border-t border-[#2e2a30]/10">
                  <p className="text-xs text-[#2e2a30]/50 uppercase tracking-wide font-semibold mb-2">Members ({group.members.length})</p>
                  <div className="flex flex-wrap gap-1">
                    {group.members.map((member, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#7c3aed]/10 text-[#2e2a30]/80 px-2 py-0.5 rounded-full"
                      >
                        {member}
                      </span>
                    ))}
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