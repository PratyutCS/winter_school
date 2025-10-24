import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav className="w-full py-4 border-b border-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to='/' className="font-extrabold text-xl tracking-widest bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#7c3aed,#ec4899)'}}>IndoCrypt National Workshop 2025</Link>
        <div className="flex gap-4 items-center text-sm">
          <Link to="/program">Program</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/travel">Travel</Link>
          <Link to="/general/about">About</Link>
          <Link to="/sponsors">Sponsors</Link>
        </div>
      </div>
    </nav>
  )
}
