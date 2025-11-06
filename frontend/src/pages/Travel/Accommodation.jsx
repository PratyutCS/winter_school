import React from 'react';
import Footer from '../../components/Footer';

export default function Accommodation(){
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>
      <div className="flex-grow py-12 px-8">
        <h2 className="text-2xl font-semibold">Accommodation</h2>
        <div className="mt-4 tech-card">
          <p>Nearby hotels and guesthouses listed with contact details (sample data).</p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
