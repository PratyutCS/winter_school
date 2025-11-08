import React, { useEffect, useState } from 'react';

// Import your background images
const images = [
  'url("../../assets/background/WhatsApp Image 2025-10-1.25.09 (4).jpg")',
  'url("../../assets/background/WhatsApp Image 2025-10-15 at 05.25.09 (3).jpg")',
  'url("../../assets/background/WhatsApp Image 2025-10-15 at 05.25.09 (1).jpg")',
  'url("../../assets/background/WhatsApp Image 2025-10-15 at 05.25.09 (2).jpg")',
  'url("../../assets/background/WhatsApp Image 2025-10-15 at 05.25.08 (5).jpg")',
  'url("../../assets/background/WhatsApp Image 2025-10-15 at 05.25.09.jpg")',
  'url("../../assets/background/WhatsApp Image 2025-10-15 at 05.25.08 (3).jpg")',
  'url("../../assets/background/WhatsApp Image 2025-10-15 at 05.25.08 (2).jpg")',
  'url("../../assets/background/WhatsApp Image 2025-10-15 at 05.25.08.jpg")',
  'url("../../assets/background/WhatsApp Image 2025-10-15 at 05.25.08 (1).jpg")',
  'url("../../assets/background/WhatsApp Image 2025-10-15 at 05.25.09 (4).jpg")',
  'url("../../assets/background/WhatsApp Image 2024-05-16 at 10.24.16 (1).jpeg")',
  'url("../../assets/background/WhatsApp Image 2024-05-16 at 10.24.16.jpeg")',
  'url("../../assets/background/WhatsApp Image 2024-05-16 at 10.24.15.jpeg")',
  'url("../../assets/background/IMG_4697.heic")',
  'url("../../assets/background/IMG_4694.HEIC")',
  'url("../../assets/background/IMG_4711.HEIC")',
  'url("../../assets/background/IMG_4680.HEIC")',
  'url("../../assets/background/IMG_4185.jpg")',
];

export default function BackgroundCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{
            backgroundImage: image,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentImage ? 1 : 0,
          }}
        />
      ))}
      {/* <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" /> */}
      <div className="absolute inset-0 bg-white/60" />

    </div>
  );
}