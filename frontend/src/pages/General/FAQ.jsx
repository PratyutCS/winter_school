import React from 'react';
import Footer from '../../components/Footer';

export default function FAQ(){
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>
      <div className="flex-grow py-12 px-8">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 tech-card">
          <p className="text-sm text-gray-300">Coming soon</p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
