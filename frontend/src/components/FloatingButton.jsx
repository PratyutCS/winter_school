import React from 'react';
import './FloatingButton.css';

const FloatingButton = () => {
  return (
    <div className="floating-button-container">
      <a
        href="https://events.iitbhilai.ac.in/nwc/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button group"
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
