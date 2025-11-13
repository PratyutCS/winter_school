import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

const schedule = [
  // Dec 09
  [
    { time: '13:00 - 14:30', event: 'Lunch', chair: '', type: 'break' },
    { time: '14:30 - 16:00', event: 'Group Discussion', chair: '', type: 'group-discussion' },
    { time: '16:00 - 16:15', event: 'Tea Break', chair: '', type: 'break' },
    { time: '16:15 - 17:30', event: 'Group Discussion', chair: '', type: 'group-discussion' },
    { time: '17:30 - 18:00', event: 'Tea Break', chair: '', type: 'break' },
    { time: '18:00 - 19:00', event: 'Group Discussion', chair: '', type: 'group-discussion' },
  ],
  // Dec 10
  [
    { time: '09:30 - 10:30', event: 'Talk 1', chair: '', type: 'talk' },
    { time: '10:30 - 11:30', event: 'Talk 2', chair: '', type: 'talk' },
    { time: '11:30 - 12:00', event: 'Snacks & Tea', chair: '', type: 'break' },
    { time: '12:00 - 13:00', event: 'Talk 3', chair: '', type: 'talk' },
    { time: '13:00 - 14:30', event: 'Lunch', chair: '', type: 'break' },
    { time: '14:30 - 16:00', event: 'Group Discussion', chair: '', type: 'group-discussion' },
    { time: '16:00 - 16:15', event: 'Tea Break', chair: '', type: 'break' },
    { time: '16:15 - 17:30', event: 'Group Discussion', chair: '', type: 'group-discussion' },
    { time: '17:30 - 18:00', event: 'Tea Break', chair: '', type: 'break' },
    { time: '18:00 - 19:00', event: 'Group Discussion', chair: '', type: 'group-discussion' },
  ],
  // Dec 11
  [
    { time: '09:30 - 10:30', event: 'Talk 4', chair: '', type: 'talk' },
    { time: '10:30 - 11:30', event: 'Talk 5', chair: '', type: 'talk' },
    { time: '11:30 - 12:00', event: 'Snacks & Tea', chair: '', type: 'break' },
    { time: '12:00 - 13:00', event: 'Talk 6', chair: '', type: 'talk' },
    { time: '13:00 - 14:30', event: 'Lunch', chair: '', type: 'break' },
    { time: '14:30 - 16:00', event: 'Group Discussion', chair: '', type: 'group-discussion' },
    { time: '16:00 - 16:15', event: 'Tea Break', chair: '', type: 'break' },
    { time: '16:15 - 17:30', event: 'Group Discussion', chair: '', type: 'group-discussion' },
    { time: '17:30 - 18:00', event: 'Tea Break', chair: '', type: 'break' },
    { time: '18:00 - 19:00', event: 'Group Discussion', chair: '', type: 'group-discussion' },
  ],
  // Dec 12
  [
    { time: '09:30 - 10:30', event: 'Talk 7', chair: '', type: 'talk' },
    { time: '10:30 - 11:30', event: 'Talk 8', chair: '', type: 'talk' },
    { time: '11:30 - 12:00', event: 'Snacks & Tea', chair: '', type: 'break' },
    { time: '12:00 - 13:00', event: 'Talk 9', chair: '', type: 'talk' },
    { time: '13:00 - 14:30', event: 'Lunch', chair: '', type: 'break' },
    { time: '14:30 - 16:00', event: 'Group Presentation', chair: '', type: 'group-presentation' },
    { time: '16:00 - 16:15', event: 'Tea Break', chair: '', type: 'break' },
    { time: '16:15 - 17:30', event: 'Group Presentation', chair: '', type: 'group-presentation' },
    { time: '17:30 - 18:00', event: 'Tea Break', chair: '', type: 'break' },
    { time: '18:00 - 19:00', event: 'Group Presentation', chair: '', type: 'group-presentation' },
  ],
];

const getTypeIcon = (type) => {
  const colorMap = {
    talk: 'bg-sky-500',
    break: 'bg-amber-500',
    ceremony: 'bg-purple-500',
    registration: 'bg-green-500',
    lightning: 'bg-red-500',
    session: 'bg-indigo-500',
    poster: 'bg-pink-500',
    panel: 'bg-teal-500',
    'group-discussion': 'bg-lime-500',
    'group-presentation': 'bg-fuchsia-500',
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
                                  <th scope="col" className="px-4 py-3 md:w-1/4">Time</th>
                                  <th scope="col" className="px-4 py-3 md:w-1/2">Event Name</th>
                                  <th scope="col" className="px-4 py-3 md:w-1/4">Session Chair/Organiser</th>
                                </tr></thead>
                <tbody>
                  {schedule[activeDay].map((item, index) => (
                    <tr key={index} className="border-b border-white/40 hover:bg-white/10 transition-colors duration-200">
                      <td className="px-4 py-4 font-medium whitespace-nowrap">{item.time}</td>
                      <td className="px-4 py-4 font-semibold">
                        <div className="flex items-center">
                          {getTypeIcon(item.type)}
                          <span>{item.event}</span>
                        </div>
                      </td>
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
