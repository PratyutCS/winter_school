import React from 'react';
import Footer from '../../components/Footer';

export default function About(){
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>
      <div className="flex-grow py-12 px-8">
        <h2 className="text-2xl font-semibold">About</h2>
        <div className="mt-4 tech-card">
          <p>The National Workshop for Cryptology is being organised by IIT Bhilai, Chhattisgarh</p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
