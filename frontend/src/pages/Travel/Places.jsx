import React from 'react';
import Footer from '../../components/Footer';

export default function Places(){
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>
      <div className="flex-grow py-12 px-8">
        <h2 className="text-2xl font-semibold">Places in Bhilai</h2>
        <div className="mt-4 grid gap-3">
          <div className="tech-card">Parks & sightseeing</div>
          <div className="tech-card">Local eateries</div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
