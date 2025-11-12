import React, { useEffect, useRef, useState } from 'react';
import GlowingBox from '../components/GlowingBox';

// Sponsor images
import dstLogo from '../../assets/sponsors/dst.png';
import ibitfLogo from '../../assets/sponsors/ibitf.png';
import iitBhilaiLogo from '../../assets/sponsors/iitbhilai.png';
import meityLogo from '../../assets/sponsors/meity.png';

export default function Sponsors() {
  const sponsors = [
    { name: 'DST (Department of Science and Technology)', logo: dstLogo },
    { name: 'IBITF (IIT Bhilai Innovation and Technology Foundation)', logo: ibitfLogo },
    { name: 'IIT Bhilai', logo: iitBhilaiLogo },
    { name: 'MeitY (Ministry of Electronics and Information Technology)', logo: meityLogo },
  ];

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const containerRef = useRef(null);

  // Wait for original images to be loaded (handles cached images too)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Select only the ORIGINAL images (first group)
    const originalImgs = Array.from(container.querySelectorAll('.marquee__img[data-original="true"]'));
    const total = originalImgs.length;
    if (total === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;

    const checkAndMaybeFinish = () => {
      if (loadedCount >= total) {
        // tiny delay to allow layout to stabilize
        setTimeout(() => setImagesLoaded(true), 20);
      }
    };

    const onLoad = () => {
      loadedCount += 1;
      checkAndMaybeFinish();
    };

    // Attach listeners and account for already-complete images
    originalImgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        loadedCount += 1;
      } else {
        img.addEventListener('load', onLoad, { once: true });
        img.addEventListener('error', onLoad, { once: true }); // treat error as "loaded" to avoid blocking
      }
    });

    checkAndMaybeFinish();

    // cleanup
    return () => {
      originalImgs.forEach((img) => {
        img.removeEventListener('load', onLoad);
        img.removeEventListener('error', onLoad);
      });
    };
  }, [sponsors]);

  return (
    <div className="flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="text-center">
          <GlowingBox>
            <div className="w-full overflow-hidden relative">
              <div
                ref={containerRef}
                className={`marquee ${imagesLoaded ? 'marquee--animate' : 'marquee--idle'}`}
                aria-hidden={imagesLoaded ? 'false' : 'true'}
              >
                {/* First group (original) */}
                <div className="marquee__group">
                  {sponsors.map((s, i) => (
                    <div key={`a-${i}`} className="marquee__item">
                      <img
                        src={s.logo}
                        alt={s.name}
                        className="marquee__img"
                        data-original="true"
                        draggable="false"
                      />
                    </div>
                  ))}
                </div>

                {/* Duplicate group (for seamless loop) */}
                <div className="marquee__group">
                  {sponsors.map((s, i) => (
                    <div key={`b-${i}`} className="marquee__item">
                      <img
                        src={s.logo}
                        alt=""
                        className="marquee__img"
                        data-original="false"
                        draggable="false"
                      />
                    </div>
                  ))}
                </div>

                {/* Third group for extra buffer */}
                <div className="marquee__group" aria-hidden="true">
                  {sponsors.map((s, i) => (
                    <div key={`c-${i}`} className="marquee__item">
                      <img
                        src={s.logo}
                        alt=""
                        className="marquee__img"
                        data-original="false"
                        draggable="false"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlowingBox>
        </div>
      </main>

      <style>{`
        /* Container & layout */
        .marquee {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 0;
          will-change: transform;
        }

        .marquee__group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .marquee__item {
          flex: 0 0 auto;
          margin: 0 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* fixed height, variable width (keep aspect) */
        .marquee__img {
          height: 8rem;
          width: auto;
          display: block;
          object-fit: contain;
          user-select: none;
          -webkit-user-drag: none;
        }

        /* Idle (no animation) — prevents overlap while loading */
        .marquee--idle {
          animation: none;
        }

        /* Continuous animation: move left by exactly 33.333% (one third since we have 3 groups) */
        @keyframes marquee-scroll {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(calc(-100% / 3)); 
          }
        }

        .marquee--animate {
          animation: marquee-scroll 40s linear infinite;
        }

        /* responsiveness */
        @media (max-width: 640px) {
          .marquee__item { margin: 0 0.8rem; }
          .marquee__img { height: 3rem; }
        }
      `}</style>
    </div>
  );
}