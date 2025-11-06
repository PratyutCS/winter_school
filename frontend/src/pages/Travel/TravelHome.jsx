import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function TravelHome(){
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>
      <div className="flex-grow py-12 px-8">
        <h2 className="text-2xl font-semibold">Travel</h2>
        <div className="mt-4 flex gap-4">
          <Link to="/travel/venue" className="tech-card">Venue</Link>
          <Link to="/travel/accommodation" className="tech-card">Accommodation</Link>
          <Link to="/travel/places" className="tech-card">Places in Bhilai</Link>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
