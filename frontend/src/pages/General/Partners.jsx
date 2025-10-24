import React from 'react';

const partners = [
  {name:'Institute A'}, {name:'Lab B'}, {name:'Company C'}
];

export default function Partners(){
  return (
    <div>
      <h2 className="text-2xl font-semibold">Partners</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        {partners.map((p,i)=>(<div key={i} className="tech-card text-center">{p.name}</div>))}
      </div>
    </div>
  )
}
