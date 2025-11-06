import React from 'react';
import Footer from '../components/Footer';

const sponsors = [
  {name:'Sponsor Alpha', level:'Platinum'},
  {name:'Sponsor Beta', level:'Gold'},
  {name:'Sponsor Gamma', level:'Silver'}
];

export default function Sponsors(){
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>
      <div className="flex-grow py-12 px-8">
        <h2 className="text-2xl font-semibold">Sponsors</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {sponsors.map((s,i)=>(<div key={i} className="tech-card text-center"><div className='font-medium'>{s.name}</div><div className='text-xs opacity-70'>{s.level}</div></div>))}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
