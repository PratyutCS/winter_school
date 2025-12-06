import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

import { schedule } from '../data/programSchedule';

const getTypeIcon = (type) => {
  const colorMap = {
    nwc: 'bg-green-500',
    lunch: 'bg-yellow-500',
    misc: 'bg-orange-500',
    snacks: 'bg-blue-500',
    groupd: 'bg-purple-500',
    talk: 'bg-pink-500',
    groupp: 'bg-red-500',
    default: 'bg-gray-400',
  };
  const color = colorMap[type] || colorMap.default;
  return <span className={`w-2.5 h-2.5 ${color} rounded-full mr-3 flex-shrink-0`}></span>;
};

export default function Program() {
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <GlowingBox className="mt-8 mb-16 p-4 sm:p-6 md:p-8 shadow-lg" data-aos="fade-up">
            <div className="flex justify-center border-b border-white/30 mb-4">
              {['Dec 09', 'Dec 10', 'Dec 11', 'Dec 12'].map((day, index) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(index)}
                  className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-all duration-300
                              ${activeDay === index
                      ? 'text-[#2e2a30] border-b-2 border-[#7c3aed]'
                      : 'text-[#2e2a30]/60 hover:text-[#2e2a30]'
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-[#2e2a30]">
                <thead className="text-xs text-[#2e2a30]/80 uppercase"><tr>
                  <th scope="col" className="px-4 py-3 md:w-1/5">Time</th>
                  <th scope="col" className="px-4 py-3 md:w-2/5">Event Name</th>
                  <th scope="col" className="px-4 py-3 md:w-1/5">Speaker</th>
                  <th scope="col" className="px-4 py-3 md:w-1/5">Session Chair</th>
                </tr></thead>
                <tbody>
                  {schedule[activeDay].map((item, index) => (
                    <tr key={index} className="border-b border-white/40 hover:bg-white/10 transition-colors duration-200">
                      <td className="px-4 py-4 font-medium whitespace-nowrap">{item.time}</td>
                      <td className="px-4 py-4 font-semibold">
                        <div className="flex items-center">
                          {getTypeIcon(item.type)}
                          <span className={item.type === 'talk' ? 'italic' : ''}>{item.event}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">{item.speaker}</td>
                      <td className="px-4 py-4">{item.chair}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowingBox>
        </div>
      </main>
    </div>
  );
}
