import React, { useEffect, useState } from 'react';

// Import your background images
import img1 from '../../assets/background/bg_image_1.jpg';
import img2 from '../../assets/background/bg_image_2.jpg';
import img3 from '../../assets/background/bg_image_3.jpg';
import img4 from '../../assets/background/bg_image_4.jpg';
import img5 from '../../assets/background/bg_image_5.jpg';
import img6 from '../../assets/background/bg_image_6.jpg';
import img7 from '../../assets/background/bg_image_7.jpg';
import img8 from '../../assets/background/bg_image_8.jpg';
import img9 from '../../assets/background/bg_image_9.jpg';
import img10 from '../../assets/background/bg_image_10.jpg';
import img11 from '../../assets/background/bg_image_11.jpeg';
import img12 from '../../assets/background/bg_image_12.jpeg';
import img13 from '../../assets/background/bg_image_13.jpeg';
import img14 from '../../assets/background/bg_image_14.jpg';

const images = [
  `url(${img1})`,
  `url(${img2})`,
  `url(${img3})`,
  `url(${img4})`,
  `url(${img5})`,
  `url(${img6})`,
  `url(${img7})`,
  `url(${img8})`,
  `url(${img9})`,
  `url(${img10})`,
  `url(${img11})`,
  `url(${img12})`,
  `url(${img13})`,
  `url(${img14})`,
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