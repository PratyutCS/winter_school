import React from 'react';

export default function EccentricBackground(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-56 -left-40 w-96 h-96 rounded-full blur-3xl" style={{background:'radial-gradient(circle at 30% 30%, rgba(124,58,237,0.18), transparent 30%)'}}></div>
      <div className="absolute -bottom-56 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background:'radial-gradient(circle at 70% 70%, rgba(236,72,153,0.12), transparent 30%)'}}></div>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.02)"></circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  )
}
