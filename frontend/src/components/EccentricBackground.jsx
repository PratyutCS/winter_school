import React from 'react';

export default function EccentricBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ backgroundColor: '#ffffff' }}
    />
  );
}
