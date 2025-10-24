import React from 'react';

const sampleProgram = [
  { time:'10:00', title:'Opening & Keynote', speaker:'Prof. A' },
  { time:'11:30', title:'Tutorial: Crypto primitives', speaker:'Dr. B' },
  { time:'14:00', title:'Panel: Applied cryptography', speaker:'Multiple' },
];

export default function Program(){
  return (
    <div>
      <h2 className="text-2xl font-semibold">Program</h2>
      <div className="mt-4 grid gap-4">
        {sampleProgram.map((s,i)=>(
          <div key={i} className="tech-card flex justify-between items-center">
            <div>
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-gray-300">{s.speaker}</div>
            </div>
            <div className="text-xs opacity-70">{s.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
