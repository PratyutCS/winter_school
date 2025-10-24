import React from 'react';
import Countdown from '../components/Countdown';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <section className="text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">IndoCrypt National Workshop 2025</h1>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">A convergence of ideas, cryptography and systems research — Bhilai.</p>
      <Countdown targetDate="2025-12-15T10:00:00+05:30" />
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/registration" className="px-6 py-3 rounded-full font-medium" style={{background:'linear-gradient(90deg,#7c3aed,#ec4899)'}}>Register</Link>
        <Link to="/program" className="px-6 py-3 rounded-full border border-white/10">Program</Link>
      </div>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="tech-card">
          <h3 className="font-semibold">Why attend?</h3>
          <p className="text-sm text-gray-300 mt-2">Hands-on tutorials, keynote talks and networking with national experts.</p>
        </div>
        <div className="tech-card">
          <h3 className="font-semibold">Where?</h3>
          <p className="text-sm text-gray-300 mt-2">Bhilai — venue details and accommodation under Travel.</p>
        </div>
        <div className="tech-card">
          <h3 className="font-semibold">Tech features</h3>
          <p className="text-sm text-gray-300 mt-2">Live demo area, poster sessions and code sprints.</p>
        </div>
      </section>
    </section>
  )
}
