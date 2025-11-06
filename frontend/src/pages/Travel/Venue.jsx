import React from 'react';
import Footer from '../../components/Footer';

export default function Venue(){
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>
      <div className="flex-grow py-12 px-8">
        <h2 className="text-2xl font-semibold">Venue</h2>
        <div className="mt-4 tech-card">
          <p>Venue: Bhilai Institute — Auditorium A</p>
          <p>Address: Example Road, Bhilai</p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
