import React, { useState, useRef } from 'react';
import './FloatingButton.css';

const FloatingButton = () => {
  const [style, setStyle] = useState({
    transform: 'translate(0, 0)',
    // Initial state: combine all transitions
    transition: 'transform 0.4s ease-in-out, width 0.5s ease-out, height 0.5s ease-out, box-shadow 0.5s ease-out'
  });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = button.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const moveX = (clientX - centerX) * 0.5;
    const moveY = (clientY - centerY) * 0.5;

    setStyle({
      transform: `translate(${moveX}px, ${moveY}px)`,
      // On mouse move: fast transform transition, keep other transitions
      transition: 'transform 0.1s linear, width 0.5s ease-out, height 0.5s ease-out, box-shadow 0.5s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'translate(0, 0)',
      // On mouse leave: slower transform transition, keep other transitions
      transition: 'transform 0.4s ease-in-out, width 0.5s ease-out, height 0.5s ease-out, box-shadow 0.5s ease-out'
    });
  };

  return (
    <div className="floating-button-container">
      <a
        ref={buttonRef}
        href="https://events.iitbhilai.ac.in/nwc/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
      >
        <div className="circular-text-hover">
          <svg viewBox="0 0 100 100">
            <defs>
              <path id="circle-hover" d="M 50, 50 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
            </defs>
            <text dy="10">
              <textPath href="#circle-hover">
                NATIONAL WORKSHOP ON CRYPTOLOGY (NWC) • 
              </textPath>
            </text>
          </svg>
        </div>
        <div className="circular-text-static">
          <svg viewBox="0 0 100 100">
            <defs>
              <path id="circle-static" d="M 50, 50 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
            </defs>
            <text dy="10">
              <textPath href="#circle-static">
                MORE EVENTS • MORE EVENTS • MORE EVENTS •
              </textPath>
            </text>
          </svg>
        </div>
        <span className="arrow">&rarr;</span>
      </a>
    </div>
  );
};

export default FloatingButton;
